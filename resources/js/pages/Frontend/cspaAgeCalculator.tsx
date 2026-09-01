import { useState } from 'react';
import FrontendLayout from '@/layouts/FrontendLayout';
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

    /**
     * Difference in days
     */
    const getDaysDifference = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        const difference = end.getTime() - start.getTime();

        return Math.round(difference / (1000 * 60 * 60 * 24));
    };

    /**
     * Convert number of days into Years Months Days
     * This follows the logic of your old PHP calculator.
     */
    // const daysToAge = (totalDays: number) => {
    //     const years = Math.floor(totalDays / 365);

    //     const remainingDaysAfterYears = totalDays % 365;

    //     const months = Math.floor(remainingDaysAfterYears / 31);

    //     const days = remainingDaysAfterYears % 31;

    //     return `${years} Years ${months} Months ${days} Days`;
    // };

    const daysToAge = (totalDays: number) => {
        
        const yearsRemaining = Math.trunc(totalDays / 365);
        const mm = totalDays % 365;
        const monthsRemaining = Math.trunc(mm / 31);
        const daysRemaining = mm % 31;

        return `${yearsRemaining} yrs ${monthsRemaining} months ${daysRemaining} days`;
    };

    /**
     * More accurate date difference for display
     */
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

            const previousMonth = new Date(
                end.getFullYear(),
                end.getMonth(),
                0
            ).getDate();

            days += previousMonth;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years} Years ${months} Months ${days} Days`;
    };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     if (!dob || !priorityDate || !approvalDate || !currentDate) {
    //         return;
    //     }

       
    //     const cutoffDate = new Date('2002-08-06');
    //     const approval = new Date(approvalDate);

    //     if (approval <= cutoffDate) {
    //         setResult({
    //             dob: formatDate(dob),
    //             priorityDate: formatDate(priorityDate),
    //             approvalDate: formatDate(approvalDate),
    //             currentDate: formatDate(currentDate),
    //             pendingDuration: 'N/A',
    //             actualAge: 'N/A',
    //             cspaAge: 'N/A',
    //             eligible: false,
    //         });

    //         return;
    //     }

        
    //     const pendingDays = getDaysDifference(
    //         priorityDate,
    //         approvalDate
    //     );

    //     const pendingDuration = getAgeDifference(
    //         priorityDate,
    //         approvalDate
    //     );

        
    //     const actualAgeDays = getDaysDifference(
    //         dob,
    //         currentDate
    //     );

    //     const actualAge = getAgeDifference(
    //         dob,
    //         currentDate
    //     );

        
    //     const cspaDays = actualAgeDays - pendingDays;

    //     const cspaAge = daysToAge(cspaDays);

    //     const cspaYears = Math.floor(cspaDays / 365);

    //     const eligible = cspaYears < 21;

    //     setResult({
    //         dob: formatDate(dob),
    //         priorityDate: formatDate(priorityDate),
    //         approvalDate: formatDate(approvalDate),
    //         currentDate: formatDate(currentDate),
    //         pendingDuration,
    //         actualAge,
    //         cspaAge,
    //         eligible,
    //     });
    // };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError('');

        // if (!dob || !priorityDate || !approvalDate || !currentDate) {
        //     setError('Please fill in all required fields.');
        //     return;
        // }

        const dobDate = new Date(`${dob}T00:00:00`);
        const priority = new Date(`${priorityDate}T00:00:00`);
        const approval = new Date(`${approvalDate}T00:00:00`);
        const current = new Date(`${currentDate}T00:00:00`);

        // Date of Birth must be before Priority Date
        if (dobDate >= priority) {
            setError('Date of Birth must be earlier than the Priority Date.');
            return;
        }

        // Priority Date must be before Approval Date
        if (priority > approval) {
            setError('Approval Date cannot be earlier than the Priority Date.');
            return;
        }

        // Approval Date should be before or equal to Current Date
        if (approval > current) {
            setError(
                'Date when Petition Became Current cannot be earlier than the Approval Date.'
            );
            return;
        }

        const pendingDays = getDaysDifference(
            priorityDate,
            approvalDate
        );

        const actualAgeDays = getDaysDifference(
            dob,
            currentDate
        );

        const cspaDays = actualAgeDays - pendingDays;

        // Prevent negative CSPA age
        if (cspaDays < 0) {
            setError(
                'Invalid dates. CSPA Age cannot be negative. Please check all dates.'
            );
            return;
        }

        const pendingDuration = getAgeDifference(
            priorityDate,
            approvalDate
        );

        const actualAge = getAgeDifference(
            dob,
            currentDate
        );

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
    };

    return (
        <>
            <section className="common-hero-sec text-center">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">CSPA Age Calculator</h1>
                        <p className="hero-description hero-common-des m-auto">
                        Calculate your child's age under the Child Status Protection Act (CSPA). Enter the required details below
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
                  <div className="cspa-section_step-badge">
                    <span>1</span>
                  </div>
                  <div className="cspa-section_step-content">
                    <h3 className="cspa-section_step-title">Determine Date of Birth</h3>
                    <p className="cspa-section_step-desc">
                      Use the child's official date of birth as shown on the birth certificate or passport. This is the
                      starting point for calculating the CSPA age.
                    </p>
                  </div>
                </div>
                <div className="cspa-section_step-item">
                  <div className="cspa-section_step-badge">
                    <span>2</span>
                  </div>
                  <div className="cspa-section_step-content">
                    <h3 className="cspa-section_step-title">Calculate Age on Priority Date</h3>
                    <p className="cspa-section_step-desc">
                      Calculate the child's biological age on the date the immigrant visa petition was filed (Priority
                      Date).
                    </p>
                  </div>
                </div>
                <div className="cspa-section_step-item">
                  <div className="cspa-section_step-badge">
                    <span>3</span>
                  </div>
                  <div className="cspa-section_step-content">
                    <h3 className="cspa-section_step-title">Subtract Pending Time</h3>
                    <p className="cspa-section_step-desc">
                      Subtract the time the immigrant petition was pending with USCIS (from filing to approval) from the
                      child's biological age.
                    </p>
                  </div>
                </div>
                <div className="cspa-section_step-item">
                  <div className="cspa-section_step-badge">
                    <span>4</span>
                  </div>
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
                                    <img
                                        src={`${config.storageUrl}/images/cal.svg`}
                                        alt="icon"
                                    />

                                    <h2 className="cspa-section_calculator-title">
                                        CSPA CALCULATOR
                                    </h2>
                                </div>

                                <form
                                    id="cspaForm"
                                    className="cspa-section_form"
                                    onSubmit={handleSubmit}
                                >

                                    {/* DATE OF BIRTH */}
                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Child's Date of Birth
                                            <span className="required-field">*</span>
                                        </label>

                                        <div className="date-field">
                                            <input
                                                type="date"
                                                id="dob"
                                                className="form-control native-date"
                                                value={dob}
                                                onChange={(e) =>
                                                    setDob(e.target.value)
                                                }
                                                required
                                            />

                                            <span>Date of Birth</span>
                                        </div>
                                    </div>

                                    {/* PRIORITY DATE */}
                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Priority Date
                                            <span className="required-field">*</span>
                                        </label>

                                        <div className="date-field">
                                            <input
                                                type="date"
                                                id="priorityDate"
                                                className="form-control native-date"
                                                value={priorityDate}
                                                onChange={(e) =>
                                                    setPriorityDate(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <span>Priority Date</span>
                                        </div>
                                    </div>

                                    {/* APPROVAL DATE */}
                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Approval Date
                                            <span className="required-field">*</span>
                                        </label>

                                        <div className="date-field">
                                            <input
                                                type="date"
                                                id="approvalDate"
                                                className="form-control native-date"
                                                value={approvalDate}
                                                onChange={(e) =>
                                                    setApprovalDate(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <span>Approval Date</span>
                                        </div>
                                    </div>

                                    {/* PETITION CURRENT DATE */}
                                    <div className="f4-form-group cspa-date-field">
                                        <label className="f4-form-group-label">
                                            Date Petition Became Current
                                            <span className="required-field">*</span>
                                        </label>

                                        <div className="date-field">
                                            <input
                                                type="date"
                                                id="currentDate"
                                                className="form-control native-date"
                                                value={currentDate}
                                                onChange={(e) =>
                                                    setCurrentDate(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <span>Visa Bulletin Date</span>
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
                                            <img
                                                src={`${config.storageUrl}/images/reset.svg`}
                                                alt="reset"
                                            />

                                            <span>Reset</span>
                                        </button>

                                        <button
                                            type="submit"
                                            className="cspa-section_btn cspa-section_btn-calculate"
                                        >
                                            <img
                                                src={`${config.storageUrl}/images/cal-2.svg`}
                                                alt="calculate"
                                            />

                                            <span>Calculate CSPA Age</span>
                                        </button>

                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* RESULT MODAL */}

            <div
                className="modal fade"
                id="cspaResultModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-md">

                    <div className="modal-content cspa-modal">

                        <div className="cspa-header">

                            <h2>CSPA RESULT</h2>

                            <button
                                type="button"
                                className="cspa-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>

                        </div>

                        <div className="cspa-body">

                            {result && (
                                <>
                                    <div className="cspa-table-wrap">

                                        <table className="cspa-table">

                                            <thead>
                                                <tr>
                                                    <th colSpan={2}>
                                                        CSPA CALCULATION
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr>
                                                    <th>
                                                        Child's Date of Birth:
                                                    </th>

                                                    <td>
                                                        {result.dob}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        Petition Filing Date:
                                                    </th>

                                                    <td>
                                                        {result.priorityDate}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        Petition Approval Date:
                                                    </th>

                                                    <td>
                                                        {result.approvalDate}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        Petition Pending Duration:
                                                    </th>

                                                    <td>
                                                        {result.pendingDuration}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        Date when Petition Became Current:
                                                    </th>

                                                    <td>
                                                        {result.currentDate}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        Actual Age when Visa Became Available:
                                                    </th>

                                                    <td>
                                                        {result.actualAge}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>
                                                        CSPA Age:
                                                    </th>

                                                    <td>
                                                        {result.cspaAge}
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>

                                    </div>

                                    <div className="cspa-result">

                                        <p>Dear Applicant,</p>

                                        {result.eligible ? (
                                            <p>
                                                According to the calculations
                                                you are{' '}

                                                <strong
                                                    style={{
                                                        color: 'green',
                                                    }}
                                                >
                                                    'ELIGIBLE'
                                                </strong>{' '}

                                                for an immigrant visa. Visa
                                                Consulate Officer is the final
                                                authority who decides on CSPA
                                                eligibility.
                                            </p>
                                        ) : (
                                            <p>
                                                According to the calculations
                                                you are{' '}

                                                <strong
                                                    style={{
                                                        color: 'red',
                                                    }}
                                                >
                                                    'NOT ELIGIBLE'
                                                </strong>{' '}

                                                for an immigrant visa. Visa
                                                Consulate Officer is the final
                                                authority who decides on CSPA
                                                eligibility.
                                            </p>
                                        )}

                                    </div>
                                </>
                            )}

                        </div>

                        <div className="cspa-section_actions cspa-modal-action">

                            <button
                                type="button"
                                className="cspa-section_btn cspa-section_btn-reset"
                                data-bs-dismiss="modal"
                            >
                                <span>Close</span>
                            </button>

                            <button
                                type="button"
                                className="cspa-section_btn cspa-section_btn-calculate"
                                data-bs-dismiss="modal"
                            >
                                <img
                                    src={`${config.storageUrl}/images/cal-2.svg`}
                                    alt="icon"
                                />

                                <span>Calculate Again</span>
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </>

    );
}