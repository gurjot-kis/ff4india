import FrontendLayout from '@/layouts/FrontendLayout';
import config from '@/config';
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';
import { useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void;
            execute: (
                siteKey: string,
                options: { action: string }
            ) => Promise<string>;
        };
    }
}

interface PageProps {
    flash: {
        success?: string;
        error?: string;
    };
}

type FilingStatus = 'already_filed' | 'new_file';

export default function AskNvc() {
    const { flash } = usePage<PageProps>().props;

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
    } = useForm({
        // Legacy contact fields
        name: '',
        email: '',
        phone: '',
        countryCode: '+91',
        category: 'NVC Inquiry',
        message: '',

        // NVC fields
        filingStatus: 'already_filed' as FilingStatus,
        caseNumber: '',
        principalName: '',
        dob: '',
        petitionerName: '',
        inquirer: '',
        visaCategory: [] as string[],
        aorName: '',
        aorLawOffice: '',
        inquirerName: '',
        comments: '',
        files: [] as File[],

        // Google reCAPTCHA
        recaptcha_token: '',
    });

    const [successMessage, setSuccessMessage] = useState(
        flash.success ?? ''
    );

    const [generalError, setGeneralError] = useState(
        flash.error ?? ''
    );

    const [attachmentInputKey, setAttachmentInputKey] = useState(0);

    const MAX_FILES = 5;

    const handleFilesChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFiles = Array.from(e.target.files ?? []);

        if (!selectedFiles.length) {
            return;
        }

        const remainingSlots = MAX_FILES - data.files.length;

        if (remainingSlots <= 0) {
            alert(`You can attach a maximum of ${MAX_FILES} files.`);
            e.target.value = '';
            return;
        }

        if (selectedFiles.length > remainingSlots) {
            alert(
                `You can attach a maximum of ${MAX_FILES} files. Only the first ${remainingSlots} selected file(s) will be added.`
            );
        }

        const filesToAdd = selectedFiles.slice(0, remainingSlots);

        setData('files', [
            ...data.files,
            ...filesToAdd,
        ]);

        // Reset the input so the same file can be selected again.
        e.target.value = '';
    };

    const removeFile = (index: number) => {
        const updatedFiles = data.files.filter(
            (_, fileIndex) => fileIndex !== index
        );

        setData('files', updatedFiles);
    };

    /*
    |--------------------------------------------------------------------------
    | Load Google reCAPTCHA v3
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

        if (!siteKey) {
            console.error(
                'VITE_RECAPTCHA_SITE_KEY is not configured.'
            );
            return;
        }

        const existingScript = document.querySelector(
            'script[data-recaptcha-script="true"]'
        );

        if (existingScript) {
            return;
        }

        const script = document.createElement('script');

        script.src =
            `https://www.google.com/recaptcha/api.js?render=${siteKey}`;

        script.async = true;
        script.defer = true;
        script.setAttribute(
            'data-recaptcha-script',
            'true'
        );

        document.head.appendChild(script);

        return () => {
            // Do not remove the script.
            // Other pages/components may also use reCAPTCHA.
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | Success Message
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (!flash.success) {
            return;
        }

        setSuccessMessage(flash.success);

        const timer = setTimeout(() => {
            setSuccessMessage('');
        }, 5000);

        return () => clearTimeout(timer);
    }, [flash.success]);

    /*
    |--------------------------------------------------------------------------
    | Error Message
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (!flash.error) {
            return;
        }

        setGeneralError(flash.error);

        const timer = setTimeout(() => {
            setGeneralError('');
        }, 8000);

        return () => clearTimeout(timer);
    }, [flash.error]);

    /*
    |--------------------------------------------------------------------------
    | Submit NVC Inquiry
    |--------------------------------------------------------------------------
    */


    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

        if (!siteKey) {
            console.error(
                'VITE_RECAPTCHA_SITE_KEY is missing.'
            );

            return;
        }

        if (!window.grecaptcha) {
            console.error(
                'Google reCAPTCHA has not loaded yet.'
            );

            return;
        }

        window.grecaptcha.ready(async () => {
            try {
                /*
                 * Generate reCAPTCHA v3 token.
                 */
                const token = await window.grecaptcha.execute(
                    siteKey,
                    {
                        action: 'nvc_inquiry',
                    }
                );

                /*
                 * Add reCAPTCHA token to the Inertia form.
                 */
                setData('recaptcha_token', token);

                /*
                 * Submit form using Inertia.
                 *
                 * forceFormData: true is required because
                 * multiple files are being uploaded.
                 */
                post('inquiries', {
                    preserveScroll: true,
                    forceFormData: true,

                    onSuccess: () => {
                        setGeneralError('');

                        reset();

                        setData('filingStatus', 'already_filed');
                        setData('visaCategory', []);
                        setData('files', []);

                        setAttachmentInputKey((prev) => prev + 1);

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    },

                    onError: (errors) => {
                        console.error(
                            'Inquiry submission errors:',
                            errors
                        );

                        setGeneralError(
                            errors.general ??
                            'Please correct the highlighted fields and try again.'
                        );

                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    },
                });
            } catch (error) {
                console.error(
                    'reCAPTCHA verification error:',
                    error
                );

                setGeneralError(
                    'Security verification failed. Please refresh the page and try again.'
                );

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        });
    };

    /*
    |--------------------------------------------------------------------------
    | Reset Form
    |--------------------------------------------------------------------------
    */

    const resetForm = () => {
        reset();

        setData(
            'filingStatus',
            'already_filed'
        );

        setData(
            'visaCategory',
            []
        );

        setData('files', []);

        // Reset the native file input.
        setAttachmentInputKey((prev) => prev + 1);
    };

    /*
    |--------------------------------------------------------------------------
    | Toggle Visa Category
    |--------------------------------------------------------------------------
    */

    const toggleVisaCategory = (
        category: string,
        checked: boolean
    ) => {
        const updatedCategories = checked
            ? [
                ...data.visaCategory,
                category,
            ]
            : data.visaCategory.filter(
                (item) => item !== category
            );

        setData(
            'visaCategory',
            updatedCategories
        );
    };

    return (
        <>

            <section className="hero-section common-hero-sec">
                <div className="container position-relative z-2">

                    <div className="row contact-wrapper">

                        <div className="col-12 col-lg-7 col-xl-8">

                            <div className="hero-content">

                                <h1 className="hero-title hero-common-title">
                                    Contact and Support
                                </h1>

                                <p className="hero-description hero-common-des">
                                    Find resources and answers to questions,
                                    provide feedback, and learn how to contact
                                    us if you need support.
                                </p>

                            </div>

                        </div>

                        <div className="col-12 col-lg-5 col-xl-4">

                            <div className="hero-info-card">

                                <div className="card-header-row align-items-start">

                                    <i>
                                        <img
                                            src={`${config?.storageUrl}/images/white-check.svg`}
                                            alt="Check"
                                        />
                                    </i>

                                    <h2 className="card-heading">
                                        Get The Right Guidance
                                    </h2>

                                </div>

                                <hr className="card-divider" />

                                <div className="card-details-list">

                                    <p>
                                        U.S. immigration rules can be complex.
                                        Get clear, case-specific guidance before
                                        making an important decision.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            <section className="services-section">

                <div className="container">

                    <div
                        className="services-inner-sec contact-inner"
                        id="contact-us"
                    >

                        <div className="services-header common-heading">

                            <h2 className="services-title">
                                Feel Free To Contact Us
                            </h2>

                        </div>

                        <div className="contact-section">

                            <div className="container">

                                <div className="row g-4">


                                    <div className="col-lg-8">

                                        <div className="contact-form">

                                            {successMessage && (
                                                <div
                                                    className="alert alert-success alert-dismissible fade show"
                                                    role="alert"
                                                >
                                                    <strong>Success!</strong>{' '}
                                                    {successMessage}

                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        aria-label="Close"
                                                        onClick={() =>
                                                            setSuccessMessage('')
                                                        }
                                                    />
                                                </div>
                                            )}

                                            {generalError && (
                                                <div
                                                    className="alert alert-danger alert-dismissible fade show"
                                                    role="alert"
                                                >
                                                    <strong>Error!</strong>{' '}
                                                    {generalError}

                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        aria-label="Close"
                                                        onClick={() =>
                                                            setGeneralError('')
                                                        }
                                                    />
                                                </div>
                                            )}

                                            <h2 className="contact-title">
                                                NVC Public Inquiry Form
                                            </h2>

                                            <p className="nvc-intro-text">
                                                Please complete the form below to
                                                submit your inquiry. Make sure the
                                                information matches the applicant's
                                                passport and case records.
                                            </p>


                                            <div className="nvc-information">

                                                <h3>
                                                    Inquiry Response Time
                                                </h3>

                                                <p>
                                                    We ask that you make a
                                                    subsequent inquiry only if you
                                                    do not receive a response within
                                                    our published timeframes.
                                                </p>

                                                <p>
                                                    <strong>
                                                        If you submitted an inquiry
                                                        between July 14, 2026 and
                                                        July 24, 2026, and have not
                                                        yet received a response,
                                                    </strong>{' '}
                                                    please resubmit your inquiry.
                                                    We apologize for any
                                                    inconvenience this may have
                                                    caused and appreciate your
                                                    understanding.
                                                </p>


                                                <h3>
                                                    Interviews
                                                </h3>

                                                <p>
                                                    <strong>
                                                        The U.S. Embassy or Consulate
                                                        tells NVC which dates they
                                                        are holding interviews. NVC
                                                        fills these appointments on
                                                        a first-in, first-out basis
                                                        and cannot predict when an
                                                        interview will be scheduled.
                                                    </strong>
                                                </p>

                                                <p>
                                                    Once complete, your case will
                                                    remain at NVC until an
                                                    appointment is scheduled, at
                                                    which time it will be sent to
                                                    the appropriate U.S. Embassy or
                                                    Consulate.
                                                </p>


                                                <h3>
                                                    Case Status
                                                </h3>

                                                <p>
                                                    For the most up-to-date case
                                                    status, please log into the{' '}

                                                    <a
                                                        href="https://ceac.state.gov/iv"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Consular Electronic
                                                        Application Center (CEAC)
                                                    </a>.
                                                </p>


                                                <h3>
                                                    Last Contact Date
                                                </h3>

                                                <p>
                                                    To update the last contact
                                                    date for cases actively
                                                    processing at NVC, please
                                                    continue to pay fees and submit
                                                    the required documents through
                                                    the{' '}

                                                    <a
                                                        href="https://ceac.state.gov/iv"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Consular Electronic
                                                        Application Center (CEAC)
                                                    </a>.
                                                </p>


                                                <hr />

                                                <p>
                                                    <strong>
                                                        Note:
                                                    </strong>{' '}
                                                    Responses to inquiries through
                                                    the NVC Public Inquiry form
                                                    will come from{' '}

                                                    <a href="mailto:TSGSystem@tsg.state.gov">
                                                        TSGSystem@tsg.state.gov
                                                    </a>.

                                                    Please do not send inquiries
                                                    directly to that address.
                                                </p>


                                                <p>
                                                    <strong>
                                                        Date of Birth formatting:
                                                    </strong>{' '}
                                                    The date of birth must be
                                                    submitted in{' '}

                                                    <strong>
                                                        dd/Month/yyyy
                                                    </strong>{' '}

                                                    format.

                                                    Example:
                                                    01/June/1990.
                                                </p>

                                            </div>



                                            <form
                                                onSubmit={submit}
                                                encType="multipart/form-data"
                                            >

                                                <div className="row g-3">



                                                    <div className="col-12">

                                                        <label className="form-label mb-2">
                                                            Case Filing Status{' '}
                                                            <span>*</span>
                                                        </label>

                                                        <div
                                                            className="nvc-filing-options"
                                                            role="radiogroup"
                                                            aria-label="Case Filing Status"
                                                        >

                                                            {/* ALREADY FILED */}

                                                            <label
                                                                className={`nvc-filing-option ${data.filingStatus ===
                                                                    'already_filed'
                                                                    ? 'active'
                                                                    : ''
                                                                    }`}
                                                            >

                                                                <input
                                                                    type="radio"
                                                                    name="filingStatus"
                                                                    value="already_filed"
                                                                    checked={
                                                                        data.filingStatus ===
                                                                        'already_filed'
                                                                    }
                                                                    onChange={() =>
                                                                        setData(
                                                                            'filingStatus',
                                                                            'already_filed'
                                                                        )
                                                                    }
                                                                />

                                                                <span
                                                                    className="nvc-filing-check"
                                                                    aria-hidden="true"
                                                                />

                                                                <span className="nvc-filing-text">
                                                                    Already filed
                                                                </span>

                                                            </label>


                                                            {/* NEW FILE */}

                                                            <label
                                                                className={`nvc-filing-option ${data.filingStatus ===
                                                                    'new_file'
                                                                    ? 'active'
                                                                    : ''
                                                                    }`}
                                                            >

                                                                <input
                                                                    type="radio"
                                                                    name="filingStatus"
                                                                    value="new_file"
                                                                    checked={
                                                                        data.filingStatus ===
                                                                        'new_file'
                                                                    }
                                                                    onChange={() => {

                                                                        setData(
                                                                            'filingStatus',
                                                                            'new_file'
                                                                        );

                                                                        setData(
                                                                            'caseNumber',
                                                                            ''
                                                                        );

                                                                    }}
                                                                />

                                                                <span
                                                                    className="nvc-filing-check"
                                                                    aria-hidden="true"
                                                                />

                                                                <span className="nvc-filing-text">
                                                                    New file
                                                                </span>

                                                            </label>

                                                        </div>

                                                        {errors.filingStatus && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.filingStatus}
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* =========================
                                                            CASE NUMBER
                                                        ========================= */}

                                                    <div className="col-12">

                                                        <label
                                                            htmlFor="caseNumber"
                                                            className="form-label"
                                                        >
                                                            NVC Case Number or USCIS
                                                            Receipt Number

                                                            {data.filingStatus ===
                                                                'already_filed' && (
                                                                    <span> *</span>
                                                                )}

                                                        </label>

                                                        <p className="nvc-field-help">
                                                            This will be three letters
                                                            followed by ten numbers.
                                                            For example:
                                                            ABC2014123456
                                                        </p>

                                                        <input
                                                            type="text"
                                                            id="caseNumber"
                                                            name="caseNumber"
                                                            maxLength={13}
                                                            className={`form-control ${errors.caseNumber
                                                                ? 'is-invalid'
                                                                : ''
                                                                } ${data.filingStatus ===
                                                                    'new_file'
                                                                    ? 'nvc-readonly-field'
                                                                    : ''
                                                                }`}
                                                            placeholder={
                                                                data.filingStatus ===
                                                                    'new_file'
                                                                    ? 'Not required for a new file'
                                                                    : 'ABC2014123456'
                                                            }
                                                            value={data.caseNumber}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'caseNumber',
                                                                    e.target.value
                                                                )
                                                            }
                                                            readOnly={
                                                                data.filingStatus ===
                                                                'new_file'
                                                            }
                                                            required={
                                                                data.filingStatus ===
                                                                'already_filed'
                                                            }
                                                        />

                                                        {errors.caseNumber && (
                                                            <div className="invalid-feedback">
                                                                {errors.caseNumber}
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* =========================
                                                            PRINCIPAL APPLICANT
                                                        ========================= */}

                                                    <div className="col-md-6">

                                                        <label
                                                            htmlFor="principalName"
                                                            className="form-label"
                                                        >
                                                            Principal Applicant's
                                                            Full Name{' '}
                                                            <span>*</span>
                                                        </label>

                                                        <p className="nvc-field-help">
                                                            Enter the name exactly as
                                                            it appears on the
                                                            applicant's passport.
                                                        </p>

                                                        <input
                                                            type="text"
                                                            id="principalName"
                                                            name="principalName"
                                                            maxLength={50}
                                                            className={`form-control ${errors.principalName
                                                                ? 'is-invalid'
                                                                : ''
                                                                }`}
                                                            placeholder="Full Name"
                                                            value={data.principalName}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'principalName',
                                                                    e.target.value
                                                                )
                                                            }
                                                            required
                                                        />

                                                        {errors.principalName && (
                                                            <div className="invalid-feedback">
                                                                {errors.principalName}
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* =========================
                                                            DOB
                                                        ========================= */}

                                                    <div className="col-md-6">

                                                        <label
                                                            htmlFor="dob"
                                                            className="form-label"
                                                        >
                                                            Principal Applicant's
                                                            Date of Birth{' '}
                                                            <span>*</span>
                                                        </label>

                                                        <p className="nvc-field-help">
                                                            Format:
                                                            dd/Month/yyyy.
                                                            Example:
                                                            01/June/1990.
                                                        </p>

                                                        <input
                                                            type="date"
                                                            id="dob"
                                                            name="dob"
                                                            className={`form-control ${errors.dob
                                                                ? 'is-invalid'
                                                                : ''
                                                                }`}
                                                            placeholder="01/June/1990"
                                                            value={data.dob}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'dob',
                                                                    e.target.value
                                                                )
                                                            }
                                                            required
                                                        />

                                                        {errors.dob && (
                                                            <div className="invalid-feedback">
                                                                {errors.dob}
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* =========================
                                                            PETITIONER
                                                        ========================= */}

                                                    <div className="col-md-6">

                                                        <label
                                                            htmlFor="petitionerName"
                                                            className="form-label"
                                                        >
                                                            Petitioner's Full Name{' '}
                                                            <span>*</span>
                                                        </label>

                                                        <p className="nvc-field-help">
                                                            Enter the name as it
                                                            appears on the
                                                            petitioner's passport.
                                                        </p>

                                                        <input
                                                            type="text"
                                                            id="petitionerName"
                                                            name="petitionerName"
                                                            maxLength={50}
                                                            className={`form-control ${errors.petitionerName
                                                                ? 'is-invalid'
                                                                : ''
                                                                }`}
                                                            placeholder="Full Name"
                                                            value={
                                                                data.petitionerName
                                                            }
                                                            onChange={(e) =>
                                                                setData(
                                                                    'petitionerName',
                                                                    e.target.value
                                                                )
                                                            }
                                                            required
                                                        />

                                                        {errors.petitionerName && (
                                                            <div className="invalid-feedback">
                                                                {errors.petitionerName}
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* =========================
                                                            WHO ARE YOU
                                                        ========================= */}

                                                    <div className="col-md-6">

                                                        <label
                                                            htmlFor="inquirer"
                                                            className="form-label"
                                                        >
                                                            Who are you?{' '}
                                                            <span>*</span>
                                                        </label>

                                                        <select
                                                            id="inquirer"
                                                            name="inquirer"
                                                            className={`form-select ${errors.inquirer
                                                                ? 'is-invalid'
                                                                : ''
                                                                }`}
                                                            value={data.inquirer}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'inquirer',
                                                                    e.target.value
                                                                )
                                                            }
                                                            required
                                                        >

                                                            <option value="">
                                                                Select an Identity...
                                                            </option>

                                                            <option value="Petitioner">
                                                                Petitioner
                                                            </option>

                                                            <option value="Principal Applicant">
                                                                Principal Applicant
                                                            </option>

                                                            <option value="Derivative Applicant">
                                                                Derivative Applicant
                                                            </option>



                                                        </select>

                                                        {errors.inquirer && (
                                                            <div className="invalid-feedback">
                                                                {errors.inquirer}
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* =========================
                                                            VISA CATEGORY
                                                        ========================= */}

                                                    <div className="col-12">

                                                        <label className="form-label">
                                                            Category{' '}
                                                            <span>*</span>
                                                        </label>

                                                        <div className="nvc-category-options">

                                                            {[
                                                                'F1',
                                                                'F2A',
                                                                'F2B',
                                                                'F3',
                                                                'F4',
                                                            ].map((category) => (

                                                                <label
                                                                    key={category}
                                                                    className={`nvc-category-option ${data.visaCategory.includes(
                                                                        category
                                                                    )
                                                                        ? 'active'
                                                                        : ''
                                                                        }`}
                                                                >

                                                                    <input
                                                                        type="checkbox"
                                                                        name="visaCategory[]"
                                                                        value={category}
                                                                        checked={data.visaCategory.includes(
                                                                            category
                                                                        )}
                                                                        onChange={(e) =>
                                                                            toggleVisaCategory(
                                                                                category,
                                                                                e.target.checked
                                                                            )
                                                                        }
                                                                    />

                                                                    <span
                                                                        className="nvc-category-check"
                                                                        aria-hidden="true"
                                                                    />

                                                                    <span className="nvc-category-text">
                                                                        {category}
                                                                    </span>

                                                                </label>

                                                            ))}

                                                        </div>

                                                        {errors.visaCategory && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.visaCategory}
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* =========================
                                                            ATTORNEY FIELDS
                                                        ========================= */}

                                                    {data.inquirer ===
                                                        'Attorney of Record' && (
                                                            <>

                                                                <div className="col-md-6">

                                                                    <label
                                                                        htmlFor="aorName"
                                                                        className="form-label"
                                                                    >
                                                                        Attorney of
                                                                        Record's Full
                                                                        Name{' '}
                                                                        <span>*</span>
                                                                    </label>

                                                                    <input
                                                                        type="text"
                                                                        id="aorName"
                                                                        name="aorName"
                                                                        maxLength={100}
                                                                        className={`form-control ${errors.aorName
                                                                            ? 'is-invalid'
                                                                            : ''
                                                                            }`}
                                                                        value={
                                                                            data.aorName
                                                                        }
                                                                        onChange={(e) =>
                                                                            setData(
                                                                                'aorName',
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                        required
                                                                    />

                                                                    {errors.aorName && (
                                                                        <div className="invalid-feedback">
                                                                            {errors.aorName}
                                                                        </div>
                                                                    )}

                                                                </div>


                                                                <div className="col-md-6">

                                                                    <label
                                                                        htmlFor="aorLawOffice"
                                                                        className="form-label"
                                                                    >
                                                                        Organization /
                                                                        Law Office{' '}
                                                                        <span>*</span>
                                                                    </label>

                                                                    <textarea
                                                                        id="aorLawOffice"
                                                                        name="aorLawOffice"
                                                                        className={`form-control ${errors.aorLawOffice
                                                                            ? 'is-invalid'
                                                                            : ''
                                                                            }`}
                                                                        rows={3}
                                                                        value={
                                                                            data.aorLawOffice
                                                                        }
                                                                        onChange={(e) =>
                                                                            setData(
                                                                                'aorLawOffice',
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                        required
                                                                    />

                                                                    {errors.aorLawOffice && (
                                                                        <div className="invalid-feedback">
                                                                            {errors.aorLawOffice}
                                                                        </div>
                                                                    )}

                                                                </div>

                                                            </>
                                                        )}


                                                    {/* =========================
                                                            OTHER INQUIRER
                                                        ========================= */}

                                                    {data.inquirer === 'Other' && (
                                                        <div className="col-md-6">

                                                            <label
                                                                htmlFor="inquirerName"
                                                                className="form-label"
                                                            >
                                                                Your Full Name{' '}
                                                                <span>*</span>
                                                            </label>

                                                            <input
                                                                type="text"
                                                                id="inquirerName"
                                                                name="inquirerName"
                                                                maxLength={50}
                                                                className={`form-control ${errors.inquirerName
                                                                    ? 'is-invalid'
                                                                    : ''
                                                                    }`}
                                                                value={
                                                                    data.inquirerName
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        'inquirerName',
                                                                        e.target.value
                                                                    )
                                                                }
                                                                required
                                                            />

                                                            {errors.inquirerName && (
                                                                <div className="invalid-feedback">
                                                                    {errors.inquirerName}
                                                                </div>
                                                            )}

                                                        </div>
                                                    )}


                                                    {/* =========================
                                                            EMAIL
                                                        ========================= */}

                                                    <div className="col-12">

                                                        <label
                                                            htmlFor="nvcEmail"
                                                            className="form-label"
                                                        >
                                                            Your Email Address{' '}
                                                            <span>*</span>
                                                        </label>

                                                        <input
                                                            type="email"
                                                            id="nvcEmail"
                                                            name="email"
                                                            className={`form-control ${errors.email
                                                                ? 'is-invalid'
                                                                : ''
                                                                }`}
                                                            placeholder="example@domain.com"
                                                            maxLength={50}
                                                            value={data.email}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'email',
                                                                    e.target.value
                                                                )
                                                            }
                                                            required
                                                        />

                                                        {errors.email && (
                                                            <div className="invalid-feedback">
                                                                {errors.email}
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* =========================
                                                            EMAIL NOTE
                                                        ========================= */}

                                                    <div className="col-12">

                                                        <div className="nvc-important-note">

                                                            <strong>
                                                                Important!
                                                            </strong>{' '}
                                                            Please double-check
                                                            your email address.
                                                            We can't write back
                                                            to you without it!

                                                        </div>

                                                    </div>


                                                    {/* =========================
                                                            COMMENTS
                                                        ========================= */}

                                                    <div className="col-12">

                                                        <label
                                                            htmlFor="comments"
                                                            className="form-label"
                                                        >
                                                            Enter Your Inquiry
                                                            Below{' '}
                                                            <span>*</span>
                                                        </label>

                                                        <textarea
                                                            id="comments"
                                                            name="comments"
                                                            rows={7}
                                                            className={`form-control ${errors.comments
                                                                ? 'is-invalid'
                                                                : ''
                                                                }`}
                                                            placeholder="Enter your question or inquiry..."
                                                            value={data.comments}
                                                            onChange={(e) =>
                                                                setData(
                                                                    'comments',
                                                                    e.target.value
                                                                )
                                                            }
                                                            required
                                                        />

                                                        {errors.comments && (
                                                            <div className="invalid-feedback">
                                                                {errors.comments}
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* =========================
                                                            ATTACHMENTS
                                                        ========================= */}

                                                    <div className="col-12">

                                                        <label
                                                            htmlFor="nvc-files"
                                                            className="form-label"
                                                        >
                                                            Attachments
                                                        </label>

                                                        <p className="nvc-field-help">
                                                            You can attach up to 5 files.
                                                            Allowed formats: DOC, DOCX, XLS,
                                                            XLSX, TXT, RTF, PDF, GIF and JPG.
                                                        </p>

                                                        <input
                                                            key={attachmentInputKey}
                                                            id="nvc-files"
                                                            name="files[]"
                                                            type="file"
                                                            multiple
                                                            className={`form-control ${errors.files
                                                                ? 'is-invalid'
                                                                : ''
                                                                }`}
                                                            accept=".doc,.docx,.xls,.xlsx,.txt,.rtf,.pdf,.gif,.jpg,.jpeg"
                                                            disabled={
                                                                data.files.length >= MAX_FILES ||
                                                                processing
                                                            }
                                                            onChange={handleFilesChange}
                                                        />

                                                        {errors.files && (
                                                            <div className="invalid-feedback d-block">
                                                                {errors.files}
                                                            </div>
                                                        )}

                                                        {/* Individual file validation errors */}
                                                        {Object.entries(errors)
                                                            .filter(([key]) => key.startsWith('files.'))
                                                            .map(([key, error]) => (
                                                                <div
                                                                    key={key}
                                                                    className="invalid-feedback d-block"
                                                                >
                                                                    {error}
                                                                </div>
                                                            ))}

                                                        {/* Selected files */}
                                                        {data.files.length > 0 && (
                                                            <div className="nvc-attachments-list">
                                                                {data.files.map((file, index) => (
                                                                    <div
                                                                        className="nvc-attachment-item"
                                                                        key={`${file.name}-${file.lastModified}-${index}`}
                                                                    >
                                                                        <div className="nvc-attachment-info">
                                                                            <i className="fa-solid fa-paperclip"></i>

                                                                            <span className="nvc-attachment-name">
                                                                                {file.name}
                                                                            </span>

                                                                            <span className="nvc-attachment-size">
                                                                                ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                                                            </span>
                                                                        </div>

                                                                        <button
                                                                            type="button"
                                                                            className="nvc-remove-file"
                                                                            onClick={() => removeFile(index)}
                                                                            disabled={processing}
                                                                            aria-label={`Remove ${file.name}`}
                                                                        >
                                                                            <i className="fa-solid fa-xmark"></i>
                                                                        </button>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {/* Add More Files */}
                                                        {data.files.length < MAX_FILES && (
                                                            <button
                                                                type="button"
                                                                className="nvc-add-files"
                                                                onClick={() => {
                                                                    const input = document.getElementById(
                                                                        'nvc-files'
                                                                    ) as HTMLInputElement | null;

                                                                    input?.click();
                                                                }}
                                                                disabled={processing}
                                                            >
                                                                <i className="fa-solid fa-plus"></i>
                                                                Add More Files
                                                            </button>
                                                        )}

                                                        <div className="nvc-attachment-count">
                                                            {data.files.length} / {MAX_FILES} files selected
                                                        </div>

                                                    </div>

                                                </div>


                                                {/* =========================
                                                        reCAPTCHA NOTICE
                                                    ========================= */}

                                                <div className="nvc-recaptcha-notice">

                                                    This site is protected by
                                                    reCAPTCHA and the Google{' '}
                                                    <a
                                                        href="https://policies.google.com/privacy"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Privacy Policy
                                                    </a>{' '}
                                                    and{' '}
                                                    <a
                                                        href="https://policies.google.com/terms"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Terms of Service
                                                    </a>{' '}
                                                    apply.

                                                </div>


                                                {/* =========================
                                                        BUTTONS
                                                    ========================= */}

                                                <div className="text-end mt-lg-4 mt-3">

                                                    <button
                                                        type="button"
                                                        className="btn btn-light me-2"
                                                        onClick={resetForm}
                                                        disabled={processing}
                                                    >
                                                        Reset
                                                    </button>

                                                    <button
                                                        type="submit"
                                                        className="contact-butn common-btn"
                                                        disabled={processing}
                                                    >

                                                        <span>
                                                            {processing
                                                                ? 'Submitting...'
                                                                : 'Submit Inquiry'}
                                                        </span>

                                                        <i className="fa-solid fa-arrow-right"></i>

                                                    </button>

                                                </div>

                                            </form>

                                        </div>

                                    </div>


                                    {/* =========================
                                            CONTACT INFORMATION
                                        ========================= */}

                                    <div className="col-lg-4">

                                        <div className="contact-info">

                                            {/* OFFICE */}

                                            <div className="info-card">

                                                <a
                                                    className="info-icon"
                                                    href="https://www.google.com/maps/search/?api=1&query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >

                                                    <img
                                                        src={`${config?.storageUrl}/images/address-2.svg`}
                                                        alt="Address"
                                                    />

                                                </a>

                                                <a
                                                    className="info-content"
                                                    href="https://www.google.com/maps/search/?api=1&query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >

                                                    <h3>
                                                        Our Office
                                                    </h3>

                                                    <p>
                                                        727, 7th Floor, CP67,
                                                        Unity Mall, Sector 67,
                                                        Imperial Tower, Mohali,
                                                        PB 160062
                                                    </p>

                                                </a>

                                            </div>


                                            {/* PHONE */}

                                            <div className="info-card">

                                                <a
                                                    className="info-icon"
                                                    href="tel:+916283507748"
                                                >

                                                    <img
                                                        src={`${config?.storageUrl}/images/phone-2.svg`}
                                                        alt="Phone"
                                                    />

                                                </a>

                                                <a
                                                    className="info-content"
                                                    href="tel:+916283507748"
                                                >

                                                    <h3>
                                                        Phone Number
                                                    </h3>

                                                    <p>
                                                        +91 6283507748
                                                    </p>

                                                </a>

                                            </div>


                                            {/* EMAIL */}

                                            <div className="info-card">

                                                <a
                                                    className="info-icon"
                                                    href="mailto:info@f4india.com"
                                                >

                                                    <img
                                                        src={`${config?.storageUrl}/images/email-2.svg`}
                                                        alt="Email"
                                                    />

                                                </a>

                                                <a
                                                    className="info-content"
                                                    href="mailto:info@f4india.com"
                                                >

                                                    <h3>
                                                        Email Address
                                                    </h3>

                                                    <p>
                                                        info@f4india.com
                                                    </p>

                                                </a>

                                            </div>


                                            {/* OFFICE HOURS */}

                                            <div className="info-card">

                                                <a
                                                    className="info-icon"
                                                    href="https://www.google.com/maps/search/?api=1&query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >

                                                    <img
                                                        src={`${config?.storageUrl}/images/time-2.svg`}
                                                        alt="Office Hours"
                                                    />

                                                </a>

                                                <div className="info-content">

                                                    <h3>
                                                        Office Hours
                                                    </h3>

                                                    <p>
                                                        Mon – Fri | 10:30 AM –
                                                        5:00 PM (IST)
                                                    </p>

                                                </div>

                                            </div>


                                            {/* WHATSAPP */}

                                            <div className="whatsapp-card">

                                                <h3>
                                                    WhatsApp Consultation
                                                </h3>

                                                <p>
                                                    Prefer to chat?
                                                    <br />
                                                    Reach us on WhatsApp for
                                                    quick questions.
                                                </p>

                                                <a
                                                    href="https://wa.me/916283507748"
                                                    className="whatsapp-btn"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >

                                                    <i>

                                                        <img
                                                            src={`${config?.storageUrl}/images/chat.svg`}
                                                            alt="WhatsApp"
                                                        />

                                                    </i>

                                                    <span>
                                                        Chat on WhatsApp
                                                    </span>

                                                </a>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            <section className="common-padding pb-0">

                <div className="container-fluid p-0">

                    <div className="col-12">

                        <div className="map-wrapper">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27445.722058478277!2d76.7000576!3d30.69828665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef0fde5f66a1%3A0xac8774357f1ef191!2sF4%20India%20Immigration%20Law%20Firm!5e0!3m2!1sen!2sin!4v1787200372488!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="F4 India Immigration Law Firm Location"
                            />

                        </div>

                    </div>

                </div>

            </section>



            <style>{`

                    .nvc-intro-text {
                        color: #667085;
                        font-size: 14px;
                        line-height: 1.6;
                        margin-bottom: 20px;
                    }

                    .nvc-information {
                        background: #f8fafc;
                        border: 1px solid #e4e7ec;
                        border-radius: 6px;
                        padding: 20px;
                        margin-bottom: 28px;
                        color: #475467;
                        font-size: 13px;
                        line-height: 1.65;
                    }

                    .nvc-information h3 {
                        color: #17355f;
                        font-size: 16px;
                        font-weight: 600;
                        margin: 18px 0 7px;
                    }

                    .nvc-information h3:first-child {
                        margin-top: 0;
                    }

                    .nvc-information p {
                        margin-bottom: 12px;
                    }

                    .nvc-information hr {
                        border: 0;
                        border-top: 1px solid #dfe3e8;
                        margin: 20px 0;
                    }

                    .nvc-information a {
                        color: #087fc1;
                        text-decoration: underline;
                    }

                    .nvc-field-help {
                        color: #667085;
                        font-size: 12px;
                        line-height: 1.5;
                        margin: -2px 0 7px;
                    }

                    .nvc-important-note {
                        background: #fff8e6;
                        border-left: 3px solid #f2a900;
                        color: #667085;
                        font-size: 13px;
                        line-height: 1.5;
                        padding: 10px 12px;
                    }

                    .nvc-important-note strong {
                        color: #8a5a00;
                    }

                    .nvc-category-options {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .nvc-category-option {
                        position: relative;
                        display: inline-flex;
                        align-items: center;
                        gap: 9px;
                        min-width: 82px;
                        padding: 10px 14px;
                        margin: 0;
                        border: 1px solid #d0d5dd;
                        border-radius: 6px;
                        background: #fff;
                        color: #344054;
                        font-size: 14px;
                        font-weight: 500;
                        cursor: pointer;
                        transition: all .2s ease;
                    }

                    .nvc-category-option:hover {
                        border-color: #168ac5;
                        background: #f8fbfd;
                    }

                    .nvc-category-option.active {
                        border-color: #168ac5;
                        background: #f0f9fd;
                        color: #17355f;
                    }

                    .nvc-category-option input[type="checkbox"] {
                        position: absolute;
                        opacity: 0;
                        pointer-events: none;
                    }

                    .nvc-category-check {
                        width: 18px;
                        height: 18px;
                        min-width: 18px;
                        border: 1.5px solid #98a2b3;
                        border-radius: 4px;
                        background: #fff;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        transition: all .2s ease;
                    }

                    .nvc-category-option.active .nvc-category-check {
                        background: #168ac5;
                        border-color: #168ac5;
                    }

                    .nvc-category-option.active .nvc-category-check::after {
                        content: '';
                        width: 8px;
                        height: 4px;
                        border-left: 2px solid #fff;
                        border-bottom: 2px solid #fff;
                        transform: rotate(-45deg);
                        margin-top: -2px;
                    }

                    .nvc-category-text {
                        line-height: 1;
                    }


                    .nvc-attachments-list {
                        margin-top: 12px;
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                    }

                    .nvc-attachment-item {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 12px;
                        padding: 10px 12px;
                        border: 1px solid #d0d5dd;
                        border-radius: 6px;
                        background: #f8fafc;
                    }

                    .nvc-attachment-info {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        min-width: 0;
                    }

                    .nvc-attachment-info i {
                        color: #168ac5;
                        flex-shrink: 0;
                    }

                    .nvc-attachment-name {
                        color: #344054;
                        font-size: 14px;
                        font-weight: 500;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .nvc-attachment-size {
                        color: #667085;
                        font-size: 12px;
                        white-space: nowrap;
                    }

                    .nvc-remove-file {
                        border: 0;
                        background: transparent;
                        color: #d92d20;
                        cursor: pointer;
                        padding: 4px 7px;
                        flex-shrink: 0;
                    }

                    .nvc-remove-file:hover {
                        color: #b42318;
                    }

                    .nvc-remove-file:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .nvc-add-files {
                        display: inline-flex;
                        align-items: center;
                        gap: 7px;
                        margin-top: 10px;
                        padding: 8px 14px;
                        border: 1px solid #168ac5;
                        border-radius: 5px;
                        background: #168ac5;
                        color: #fff;
                        font-size: 13px;
                        font-weight: 500;
                        cursor: pointer;
                    }

                    .nvc-add-files:hover {
                        opacity: 0.9;
                    }

                    .nvc-add-files:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .nvc-attachment-count {
                        margin-top: 7px;
                        color: #667085;
                        font-size: 12px;
                    }

                    .nvc-recaptcha-notice {
                        margin-top: 18px;
                        color: #667085;
                        font-size: 11px;
                        line-height: 1.5;
                    }

                    .nvc-recaptcha-notice a {
                        color: #087fc1;
                        text-decoration: underline;
                    }

                    @media (min-width: 992px) {

                        .contact-info {
                            position: sticky;
                            top: 100px;
                        }

                    }

                    @media (max-width: 767px) {

                        .nvc-information {
                            padding: 15px;
                        }

                        .nvc-recaptcha-notice {
                            font-size: 10px;
                        }

                    }

                `}</style>


            <ConsultationCTA />

        </>
    );
}