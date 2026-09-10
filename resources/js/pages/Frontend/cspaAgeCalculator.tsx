import { useEffect, useState } from 'react';
import config from '@/config';
import { Modal } from 'bootstrap';

interface CspaResult {
    dob: string;
    priorityDate: string;
    approvalDate: string;
    currentDate: string;
    pendingDuration: string;
    actualAge: string;
    cspaAge: string;
    eligible: boolean;
}

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

/** Formats "YYYY-MM-DD" -> "January 5, 2024" for the ios-trigger display */
function formatDisplayDate(dateStr: string) {
    if (!dateStr) return null;
    const [y, m, d] = dateStr.split('-').map(Number);
    return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export default function cspaAgeCalculator() {

    const [error, setError] = useState('');
    const [dob, setDob] = useState('');
    const [priorityDate, setPriorityDate] = useState('');
    const [approvalDate, setApprovalDate] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    const [result, setResult] = useState<CspaResult | null>(null);

    /**
     * Format YYYY-MM-DD to MM/DD/YYYY
     */
    const formatDate = (date: string) => {
        if (!date) return '';
        const [year, month, day] = date.split('-');
        return `${month}/${day}/${year}`;
    };

    const getDaysDifference = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const difference = end.getTime() - start.getTime();
        return Math.round(difference / (1000 * 60 * 60 * 24));
    };

    const daysToAge = (totalDays: number) => {
        const yearsRemaining = Math.trunc(totalDays / 365);
        const mm = totalDays % 365;
        const monthsRemaining = Math.trunc(mm / 31);
        const daysRemaining = mm % 31;

        return `${yearsRemaining} yrs ${monthsRemaining} months ${daysRemaining} days`;
    };

    const getAgeDifference = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (end < start) {
            return '0 Years Months Days';
        }

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();

        if (days < 0) {
            months--;
            const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
            days += previousMonth;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years} Years ${months} Months ${days} Days`;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        const dobDate = new Date(`${dob}T00:00:00`);
        const priority = new Date(`${priorityDate}T00:00:00`);
        const approval = new Date(`${approvalDate}T00:00:00`);
        const current = new Date(`${currentDate}T00:00:00`);

        if (dobDate >= priority) {
            setError('Date of Birth must be earlier than the Priority Date.');
            return;
        }

        if (priority > approval) {
            setError('Approval Date cannot be earlier than the Priority Date.');
            return;
        }

        if (approval > current) {
            setError('Date when Petition Became Current cannot be earlier than the Approval Date.');
            return;
        }

        const pendingDays = getDaysDifference(priorityDate, approvalDate);
        const actualAgeDays = getDaysDifference(dob, currentDate);
        const cspaDays = actualAgeDays - pendingDays;

        if (cspaDays < 0) {
            setError('Invalid dates. CSPA Age cannot be negative. Please check all dates.');
            return;
        }

        const pendingDuration = getAgeDifference(priorityDate, approvalDate);
        const actualAge = getAgeDifference(dob, currentDate);
        const cspaAge = daysToAge(cspaDays);
        const cspaYears = Math.trunc(cspaDays / 365);
        const eligible = cspaYears < 21;

        setResult({
            dob: formatDate(dob),
            priorityDate: formatDate(priorityDate),
            approvalDate: formatDate(approvalDate),
            currentDate: formatDate(currentDate),
            pendingDuration,
            actualAge,
            cspaAge,
            eligible,
        });

        const modalElement = document.getElementById('cspaResultModal');
        if (modalElement) {
            const modal = new Modal(modalElement);
            modal.show();
        }
    };

    const handleReset = () => {
        setDob('');
        setPriorityDate('');
        setApprovalDate('');
        setCurrentDate('');
        setResult(null);
        setError('');
    };

    /* ===========================================================
       iOS-style wheel date picker
       Mirrors the vanilla JS wheel logic 1:1, but the "Done" button
       writes into React state (setDob/setPriorityDate/etc.) instead
       of mutating a DOM input directly, and the trigger label text
       is rendered from state in JSX rather than patched via textContent.
       =========================================================== */
    useEffect(() => {
        const ITEM_H = 40;
        const startYear = 1930;
        const endYear = new Date().getFullYear() + 5;

        const monthInner = document.getElementById('monthInner');
        const dayInner = document.getElementById('dayInner');
        const yearInner = document.getElementById('yearInner');
        const monthCol = document.getElementById('monthCol');
        const dayCol = document.getElementById('dayCol');
        const yearCol = document.getElementById('yearCol');
        const iosBackdrop = document.getElementById('iosBackdrop');
        const iosSheet = document.getElementById('iosSheet');

        if (!monthInner || !dayInner || !yearInner || !monthCol || !dayCol || !yearCol || !iosBackdrop || !iosSheet) {
            return;
        }

        // Populate months & years once (guard for React StrictMode double-invoke in dev)
        if (monthInner.children.length === 0) {
            MONTHS.forEach((m) => {
                const d = document.createElement('div');
                d.className = 'wheel-item';
                d.textContent = m;
                monthInner.appendChild(d);
            });
        }
        if (yearInner.children.length === 0) {
            for (let y = endYear; y >= startYear; y--) {
                const d = document.createElement('div');
                d.className = 'wheel-item';
                d.textContent = String(y);
                yearInner.appendChild(d);
            }
        }

        function daysInMonth(monthIdx: number, year: number) {
            return new Date(year, monthIdx + 1, 0).getDate();
        }

        function buildDays(count: number) {
            dayInner!.innerHTML = '';
            for (let i = 1; i <= count; i++) {
                const d = document.createElement('div');
                d.className = 'wheel-item';
                d.textContent = String(i);
                dayInner!.appendChild(d);
            }
        }
        buildDays(31);

        function snapIndex(col: HTMLElement) {
            return Math.round(col.scrollTop / ITEM_H);
        }
        function setColIndex(col: HTMLElement, idx: number, smooth = true) {
            col.scrollTo({ top: idx * ITEM_H, behavior: smooth ? 'smooth' : 'auto' });
        }

        function syncDaysToSelection() {
            const mIdx = snapIndex(monthCol!);
            const yIdx = snapIndex(yearCol!);
            const year = endYear - yIdx;
            const prevDay = snapIndex(dayCol!) + 1;
            const maxDays = daysInMonth(mIdx, year);
            buildDays(maxDays);
            setColIndex(dayCol!, Math.min(prevDay, maxDays) - 1, false);
        }

        const scrollTimers: Record<string, ReturnType<typeof setTimeout>> = {};
        const scrollCleanups: (() => void)[] = [];

        function onScrollEnd(col: HTMLElement, key: string, cb: () => void) {
            const handler = () => {
                clearTimeout(scrollTimers[key]);
                scrollTimers[key] = setTimeout(() => {
                    setColIndex(col, snapIndex(col));
                    cb();
                }, 100);
            };
            col.addEventListener('scroll', handler);
            scrollCleanups.push(() => col.removeEventListener('scroll', handler));
        }
        onScrollEnd(monthCol, 'm', syncDaysToSelection);
        onScrollEnd(yearCol, 'y', syncDaysToSelection);
        onScrollEnd(dayCol, 'd', () => {});

        function attachClickSelect(col: HTMLElement, cb: () => void) {
            const handler = (e: Event) => {
                const item = (e.target as HTMLElement).closest('.wheel-item');
                if (!item) return;
                const idx = Array.from(item.parentElement!.children).indexOf(item);
                setColIndex(col, idx);
                setTimeout(cb, 200);
            };
            col.addEventListener('click', handler);
            scrollCleanups.push(() => col.removeEventListener('click', handler));
        }
        attachClickSelect(monthCol, syncDaysToSelection);
        attachClickSelect(dayCol, () => {});
        attachClickSelect(yearCol, syncDaysToSelection);

        let activeFieldId: string | null = null;

        function openSheetFor(fieldId: string) {
            activeFieldId = fieldId;
            const inputEl = document.getElementById(fieldId) as HTMLInputElement | null;
            const triggerEl = document.querySelector(`.ios-trigger[data-target="${fieldId}"]`);

            let initial: Date;
            if (inputEl && inputEl.value) {
                const [y, m, d] = inputEl.value.split('-').map(Number);
                initial = new Date(y, m - 1, d);
            } else {
                initial = new Date();
            }
            const mIdx = initial.getMonth();
            const year = initial.getFullYear();
            const yIdx = Math.min(Math.max(endYear - year, 0), endYear - startYear);

            buildDays(daysInMonth(mIdx, year));
            setColIndex(monthCol!, mIdx, false);
            setColIndex(dayCol!, initial.getDate() - 1, false);
            setColIndex(yearCol!, yIdx, false);

            iosBackdrop!.classList.add('show');
            iosSheet!.classList.add('show');
            triggerEl?.classList.add('active');
            document.body.classList.add('ios-sheet-open');

            requestAnimationFrame(() => {
                triggerEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }

        function closeSheet() {
            iosBackdrop!.classList.remove('show');
            iosSheet!.classList.remove('show');
            document.body.classList.remove('ios-sheet-open');
            document.querySelectorAll('.ios-trigger.active').forEach((el) => el.classList.remove('active'));
            activeFieldId = null;
        }

        const triggerHandlers: [Element, EventListener][] = [];
        document.querySelectorAll('.ios-trigger').forEach((trigger) => {
            const target = (trigger as HTMLElement).dataset.target;
            if (!target) return;
            const handler = () => openSheetFor(target);
            trigger.addEventListener('click', handler);
            triggerHandlers.push([trigger, handler]);
        });

        const cancelBtn = document.getElementById('iosCancelBtn');
        const doneBtn = document.getElementById('iosDoneBtn');

        const cancelHandler = () => closeSheet();
        cancelBtn?.addEventListener('click', cancelHandler);
        iosBackdrop.addEventListener('click', cancelHandler);

        const setterMap: Record<string, (v: string) => void> = {
            dob: setDob,
            priorityDate: setPriorityDate,
            approvalDate: setApprovalDate,
            currentDate: setCurrentDate,
        };

        const doneHandler = () => {
            if (!activeFieldId) { closeSheet(); return; }
            const mIdx = snapIndex(monthCol!);
            const day = snapIndex(dayCol!) + 1;
            const year = endYear - snapIndex(yearCol!);
            const pad = (n: number) => String(n).padStart(2, '0');
            const dateStr = `${year}-${pad(mIdx + 1)}-${pad(day)}`;

            setterMap[activeFieldId]?.(dateStr);
            closeSheet();
        };
        doneBtn?.addEventListener('click', doneHandler);

        return () => {
            scrollCleanups.forEach((fn) => fn());
            triggerHandlers.forEach(([el, h]) => el.removeEventListener('click', h));
            cancelBtn?.removeEventListener('click', cancelHandler);
            iosBackdrop.removeEventListener('click', cancelHandler);
            doneBtn?.removeEventListener('click', doneHandler);
        };
    }, [setDob, setPriorityDate, setApprovalDate, setCurrentDate]);

    /* Desktop-only: open native picker on a real, direct click on the input */
    useEffect(() => {
        const inputs = document.querySelectorAll<HTMLInputElement>('input[type="date"]');
        const handlers: [HTMLInputElement, EventListener][] = [];

        inputs.forEach((input) => {
            const handler = (e: Event) => {
                const me = e as MouseEvent;
                if (me.clientX === 0 && me.clientY === 0) return;
                if (typeof (input as any).showPicker === 'function') {
                    (input as any).showPicker();
                }
            };
            input.addEventListener('click', handler);
            handlers.push([input, handler]);
        });

        return () => {
            handlers.forEach(([el, h]) => el.removeEventListener('click', h));
        };
    }, []);

    return (
        <>
            <section className="common-hero-sec text-center">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">CSPA Age Calculator</h1>
                        <p className="hero-description hero-common-des m-auto">
                            Calculate your child's age under the Child Status Protection Act (CSPA). Enter the required details below
                            to estimate CSPA eligibility.
                        </p>
                    </div>
                </div>
            </section>

            <nav className="breadcrumb cspa-breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <div className="breadcrumb__inner">
                        <a href={`${config?.appUrl}`} className="breadcrumb__item">
                            <span className="breadcrumb__label text-nowrap">F4india</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                        <span className="breadcrumb__current">CSPA (Child age Calculator)</span>
                    </div>
                </div>
            </nav>

            <section className="cspa-section common-padding">
                <div className="container position-relative z-2">
                    <div className="row align-items-start">

                        {/* LEFT CONTENT */}
                        <div className="col-12 col-lg-7 col-xl-7 order-lg-1 order-2">
                            <div className="cspa-section_info-wrapper">

                                <div className="cspa-section_overview-card">
                                    <h2 className="cspa-section_card-title">What is CSPA?</h2>
                                    <div className="cspa-section_card-body">
                                        <p className="cspa-section_text">
                                            The <strong className="cspa-section_text-bold">Child Status Protection Act (CSPA)</strong> protects
                                            children from "aging out" of immigration eligibility when a visa number becomes available after the
                                            child turns 21.
                                        </p>
                                        <p className="cspa-section_text">
                                            Under CSPA, the child's "immigration age" is calculated by subtracting the time the I-130 petition was
                                            pending from their age on the date the visa became available.
                                        </p>
                                    </div>
                                </div>

                                <div className="cspa-section_steps-card">
                                    <h2 className="cspa-section_card-title cspa-section_card-title-steps">How CSPA Age is Calculated</h2>

                                    <div className="cspa-section_steps-list">

                                        <div className="cspa-section_step-item">
                                            <div className="cspa-section_step-badge"><span>1</span></div>
                                            <div className="cspa-section_step-content">
                                                <h3 className="cspa-section_step-title">Determine Date of Birth</h3>
                                                <p className="cspa-section_step-desc">
                                                    Use the child's official date of birth as shown on the birth certificate or passport. This is the
                                                    starting point for calculating the CSPA age.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cspa-section_step-item">
                                            <div className="cspa-section_step-badge"><span>2</span></div>
                                            <div className="cspa-section_step-content">
                                                <h3 className="cspa-section_step-title">Calculate Age on Priority Date</h3>
                                                <p className="cspa-section_step-desc">
                                                    Calculate the child's biological age on the date the immigrant visa petition was filed (Priority
                                                    Date).
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cspa-section_step-item">
                                            <div className="cspa-section_step-badge"><span>3</span></div>
                                            <div className="cspa-section_step-content">
                                                <h3 className="cspa-section_step-title">Subtract Pending Time</h3>
                                                <p className="cspa-section_step-desc">
                                                    Subtract the time the immigrant petition was pending with USCIS (from filing to approval) from the
                                                    child's biological age.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cspa-section_step-item">
                                            <div className="cspa-section_step-badge"><span>4</span></div>
                                            <div className="cspa-section_step-content">
                                                <h3 className="cspa-section_step-title">CSPA Age Result</h3>
                                                <p className="cspa-section_step-desc">
                                                    If the calculated CSPA age is under 21 and all other eligibility requirements are met, the child
                                                    may qualify for CSPA protection and retain eligibility for immigration benefits.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* CALCULATOR */}
                        <div className="col-12 col-lg-5 col-xl-5 order-lg-2 order-1">
                            <div className="cspa-section_calculator-card">

                                <div className="cspa-section_calculator-header">
                                    <img src={`${config.storageUrl}/images/cal.svg`} alt="icon" />
                                    <h2 className="cspa-section_calculator-title">CSPA CALCULATOR</h2>
                                </div>

                                <form id="cspaForm" className="cspa-section_form" onSubmit={handleSubmit}>

                                    {/* DATE OF BIRTH */}
                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Child's Date of Birth <span className="required-field">*</span>
                                        </label>

                                        <div className="date-field">
                                            <input
                                                type="date"
                                                id="dob"
                                                className="form-control native-date"
                                                value={dob}
                                                onChange={(e) => setDob(e.target.value)}
                                                required
                                            />
                                            <span>Date of Birth</span>
                                        </div>

                                        <div className="ios-trigger" data-target="dob">
                                            <span className={`trigger-text ${dob ? '' : 'placeholder'}`}>
                                                {dob ? formatDisplayDate(dob) : 'Date of Birth'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* PRIORITY DATE */}
                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Priority Date <span className="required-field">*</span>
                                        </label>

                                        <div className="date-field">
                                            <input
                                                type="date"
                                                id="priorityDate"
                                                className="form-control native-date"
                                                value={priorityDate}
                                                onChange={(e) => setPriorityDate(e.target.value)}
                                                required
                                            />
                                            <span>Priority Date</span>
                                        </div>

                                        <div className="ios-trigger" data-target="priorityDate">
                                            <span className={`trigger-text ${priorityDate ? '' : 'placeholder'}`}>
                                                {priorityDate ? formatDisplayDate(priorityDate) : 'Priority Date'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* APPROVAL DATE */}
                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Approval Date <span className="required-field">*</span>
                                        </label>

                                        <div className="date-field">
                                            <input
                                                type="date"
                                                id="approvalDate"
                                                className="form-control native-date"
                                                value={approvalDate}
                                                onChange={(e) => setApprovalDate(e.target.value)}
                                                required
                                            />
                                            <span>Approval Date</span>
                                        </div>

                                        <div className="ios-trigger" data-target="approvalDate">
                                            <span className={`trigger-text ${approvalDate ? '' : 'placeholder'}`}>
                                                {approvalDate ? formatDisplayDate(approvalDate) : 'Approval Date'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* PETITION CURRENT DATE */}
                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Date Petition Became Current <span className="required-field">*</span>
                                        </label>

                                        <div className="date-field">
                                            <input
                                                type="date"
                                                id="currentDate"
                                                className="form-control native-date"
                                                value={currentDate}
                                                onChange={(e) => setCurrentDate(e.target.value)}
                                                required
                                            />
                                            <span>Visa Bulletin Date</span>
                                        </div>

                                        <div className="ios-trigger" data-target="currentDate">
                                            <span className={`trigger-text ${currentDate ? '' : 'placeholder'}`}>
                                                {currentDate ? formatDisplayDate(currentDate) : 'Visa Bulletin Date'}
                                            </span>
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="alert alert-danger mt-3 mb-3 w-100">
                                            {error}
                                        </div>
                                    )}

                                    {/* BUTTONS */}
                                    <div className="cspa-section_actions">
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="cspa-section_btn cspa-section_btn-reset"
                                        >
                                            <img src={`${config.storageUrl}/images/reset.svg`} alt="reset" />
                                            <span>Reset</span>
                                        </button>

                                        <button type="submit" className="cspa-section_btn cspa-section_btn-calculate">
                                            <img src={`${config.storageUrl}/images/cal-2.svg`} alt="calculate" />
                                            <span>Calculate CSPA Age</span>
                                        </button>
                                    </div>

                                </form>

                                {/* iOS wheel picker sheet (shared across all 4 date fields) */}
                                <div className="ios-backdrop" id="iosBackdrop"></div>
                                <div className="ios-sheet" id="iosSheet">
                                    <div className="sheet-header">
                                        <button type="button" className="sheet-btn" id="iosCancelBtn">Cancel</button>
                                        <button type="button" className="sheet-btn done" id="iosDoneBtn">Done</button>
                                    </div>
                                    <div className="wheel-picker">
                                        <div className="selection-bar"></div>
                                        <div className="wheel-col day" id="dayCol">
                                            <div className="wheel-col-inner" id="dayInner"></div>
                                        </div>
                                        <div className="wheel-col month" id="monthCol">
                                            <div className="wheel-col-inner" id="monthInner"></div>
                                        </div>
                                        <div className="wheel-col year" id="yearCol">
                                            <div className="wheel-col-inner" id="yearInner"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* RESULT MODAL */}
            <div className="modal fade" id="cspaResultModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content cspa-modal">

                        <div className="cspa-header">
                            <h2>CSPA RESULT</h2>
                            <button type="button" className="cspa-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <div className="cspa-body">
                            {result && (
                                <>
                                    <div className="cspa-table-wrap">
                                        <table className="cspa-table">
                                            <thead>
                                                <tr><th colSpan={2}>CSPA CALCULATION</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr><th>Child's Date of Birth:</th><td>{result.dob}</td></tr>
                                                <tr><th>Petition Filing Date:</th><td>{result.priorityDate}</td></tr>
                                                <tr><th>Petition Approval Date:</th><td>{result.approvalDate}</td></tr>
                                                <tr><th>Petition Pending Duration:</th><td>{result.pendingDuration}</td></tr>
                                                <tr><th>Date when Petition Became Current:</th><td>{result.currentDate}</td></tr>
                                                <tr><th>Actual Age when Visa Became Available:</th><td>{result.actualAge}</td></tr>
                                                <tr><th>CSPA Age:</th><td>{result.cspaAge}</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="cspa-result">
                                        <p>Dear Applicant,</p>
                                        {result.eligible ? (
                                            <p>
                                                According to the calculations you are{' '}
                                                <strong style={{ color: 'green' }}>'ELIGIBLE'</strong>{' '}
                                                for an immigrant visa. Visa Consulate Officer is the final authority who decides on CSPA eligibility.
                                            </p>
                                        ) : (
                                            <p>
                                                According to the calculations you are{' '}
                                                <strong style={{ color: 'red' }}>'NOT ELIGIBLE'</strong>{' '}
                                                for an immigrant visa. Visa Consulate Officer is the final authority who decides on CSPA eligibility.
                                            </p>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="cspa-section_actions cspa-modal-action">
                            <button type="button" className="cspa-section_btn cspa-section_btn-reset" data-bs-dismiss="modal">
                                <span>Close</span>
                            </button>
                            <button
                                type="button"
                                className="cspa-section_btn cspa-section_btn-calculate"
                                data-bs-dismiss="modal"
                                onClick={handleReset}
                            >
                                <img src={`${config.storageUrl}/images/cal-2.svg`} alt="icon" />
                                <span>Calculate Again</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}