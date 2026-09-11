import FrontendLayout from '@/layouts/FrontendLayout';
import config from '@/config';
// import ReviewSlider from '@/components/Frontend/Home/ReviewSlider';
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';
import { useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import CountryCodePhoneInput from '@/components/CountryCodePhoneInput';

interface PageProps {
    flash: {
        success?: string;
        otp_sent?: boolean;
        otp_email?: string;
    };
}

export default function ContactUs() {

    const { flash } = usePage<PageProps>().props;

    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        clearErrors,
    } = useForm({
        name: '',
        email: '',
        phone: '',
        countryCode: '+91',
        category: '',
        message: '',
    });

    // OTP form
    const {
        data: otpData,
        setData: setOtpData,
        post: postOtp,
        processing: otpProcessing,
        errors: otpErrors,
        reset: resetOtp,
    } = useForm({
        email: '',
        otp: '',
    });

    const [showOtpPopup, setShowOtpPopup] = useState(false);


    const [successMessage, setSuccessMessage] = useState(
        flash.success ?? ''
    );

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




    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Submitting contact form:', data);
        

        post('/contact-us/send-otp', {
            preserveScroll: true,

            onSuccess: () => {
                // Put contact email into OTP form
                setOtpData('email', data.email);

                // Clear old OTP
                setOtpData('otp', '');

                // Open OTP popup
                setShowOtpPopup(true);
            },
        });
    };



   

    const verifyOtp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        postOtp('/contact-us/verify-otp', {
            preserveScroll: true,

            onSuccess: () => {

                // Close popup
                setShowOtpPopup(false);

                // Explicitly clear contact form
                setData('name', '');
                setData('email', '');
                setData('phone', '');
                setData('countryCode', '+91');
                setData('category', '');
                setData('message', '');

                // Clear contact form
                resetOtp();

                // Clear OTP form
                clearErrors();
            },
        });
    };



    return (
        <>
    <section className="hero-section common-hero-sec">
        <div className="container position-relative z-2">
            <div className="row contact-wrapper">

                <div className="col-12 col-lg-7 col-xl-8">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">Contact and Support</h1>
                        <p className="hero-description hero-common-des">
                            Find resources and answers to questions, provide feedback, and learn how to contact us if you need
                            support.
                        </p>
                    </div>
                </div>

                <div className="col-12 col-lg-5 col-xl-4">
                    <div className="hero-info-card">

                        <div className="card-header-row align-items-start">
                            <i>
                                <img src={`${config?.storageUrl}/images/white-check.svg`} alt="img" />
                            </i>
                            <h2 className="card-heading">Get The Right Guidance</h2>
                        </div>

                        <hr className="card-divider" />

                        <div className="card-details-list">
                            <p>U.S. immigration rules can be complex. Get clear, case-specific guidance before making an important decision.</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="services-section">
        <div className="container">

    <div className="services-inner-sec contact-inner" id="contact-us">
        <div className="services-header common-heading">
            <h2 className="services-title ">Feel Free To Contact Us</h2>
        </div>

        <div className="contact-section">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="contact-form">

                            {successMessage && (
                                <div className="alert alert-success">
                                    {successMessage}
                                </div>
                            )}
                            <h2 className="contact-title">
                                Fill out the form below and we will get back to you within one
                                business day.
                            </h2>

                            <form onSubmit={submit}>

                                <div className="row g-3">


                                    <div className="col-md-6">

                                        <label
                                            htmlFor="name"
                                            className="form-label"
                                        >
                                            Full Name <span>*</span>
                                        </label>

                                        <input
                                            type="text"
                                            id="name"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''
                                                }`}
                                            placeholder="John Smith"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                        />

                                        {errors.name && (
                                            <div className="invalid-feedback">
                                                {errors.name}
                                            </div>
                                        )}

                                    </div>



                                    <div className="col-md-6">

                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email Address <span>*</span>
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''
                                                }`}
                                            placeholder="john@example.com"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                        />

                                        {errors.email && (
                                            <div className="invalid-feedback">
                                                {errors.email}
                                            </div>
                                        )}

                                    </div>



                                    <div className="col-md-6">

                                        <label
                                            htmlFor="phone"
                                            className="form-label"
                                        >
                                            Phone Number
                                        </label>

                                        <CountryCodePhoneInput
                                            phone={data.phone}
                                            onPhoneChange={(value) => setData('phone', value)}
                                            onCountryChange={(country) => setData('countryCode', country.dial)}
                                            error={errors.phone}
                                            defaultIso="in"
                                        />

                                        {errors.phone && (
                                            <div className="invalid-feedback d-block">
                                                {errors.phone}
                                            </div>
                                        )}

                                    </div>



                                    <div className="col-md-6">

                                        <label
                                            htmlFor="category"
                                            className="form-label"
                                        >
                                            Categories <span>*</span>
                                        </label>

                                        <select
                                            id="category"
                                            className={`form-select ${errors.category ? 'is-invalid' : ''
                                                }`}
                                            value={data.category}
                                            onChange={(e) =>
                                                setData('category', e.target.value)
                                            }
                                        >

                                            <option value="" disabled>
                                                Select Category
                                            </option>

                                            <option value="Family Based">
                                                Family Based
                                            </option>

                                            <option value="Employment Based">
                                                Employment Based
                                            </option>

                                            <option value="Student Visa">
                                                Student Visa
                                            </option>

                                            <option value="Citizenship">
                                                Citizenship
                                            </option>

                                            <option value="Other">
                                                Other
                                            </option>

                                        </select>

                                        {errors.category && (
                                            <div className="invalid-feedback">
                                                {errors.category}
                                            </div>
                                        )}

                                    </div>



                                    <div className="col-12">

                                        <label
                                            htmlFor="message"
                                            className="form-label"
                                        >
                                            Message <span>*</span>
                                        </label>

                                        <textarea
                                            id="message"
                                            className={`form-control ${errors.message ? 'is-invalid' : ''
                                                }`}
                                            rows={5}
                                            placeholder="Please describe your immigration situation and what you need help with..."
                                            value={data.message}
                                            onChange={(e) =>
                                                setData('message', e.target.value)
                                            }
                                        />

                                        {errors.message && (
                                            <div className="invalid-feedback">
                                                {errors.message}
                                            </div>
                                        )}

                                    </div>

                                </div>



                                <div className="text-end mt-lg-4 mt-3">

                                    <button
                                        type="submit"
                                        className="contact-butn common-btn"
                                        disabled={processing}
                                    >

                                        <span>
                                            {processing
                                                ? 'Sending OTP...'
                                                : 'Send Message'}
                                        </span>

                                        <i className="fa-solid fa-arrow-right"></i>

                                    </button>

                                </div>

                            </form>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="contact-info">
                            <div className="info-card">
                                <a className="info-icon"
                                    href="https://www.google.com/maps/search/?api=1&query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062">
                                    <img src={`${config?.storageUrl}/images/address-2.svg`} alt="img" />
                                </a>
                                <a className="info-content"
                                    href="https://www.google.com/maps/search/?api=1&query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062">
                                    <h3>Our Office</h3>

                                    <p>727, 7th Floor, CP67, Unity Mall, Sector 67, Imperial Tower, Moahli, PB 160062</p>
                                </a>
                            </div>
                            <div className="info-card">
                                <a className="info-icon" href="tel:+916283507748">
                                    <img src={`${config?.storageUrl}/images/phone-2.svg`} alt="img" />
                                </a>
                                <a className="info-content" href="tel:+916283507748">
                                    <h3>Phone Number</h3>
                                    <p>+91 6283507748</p>
                                </a>
                            </div>
                            <div className="info-card">
                                <a className="info-icon" href="mailto:info@f4india.com">
                                    <img src={`${config?.storageUrl}/images/email-2.svg`} alt="img" />
                                </a>
                                <a className="info-content" href="mailto:info@f4india.com">
                                    <h3>Email Address</h3>
                                    <p>info@f4india.com</p>
                                </a>
                            </div>
                            <div className="info-card">
                                <a className="info-icon"
                                    href="https://www.google.com/maps/search/?api=1&query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062">
                                    <img src={`${config?.storageUrl}/images/time-2.svg`} alt="img" />
                                </a>
                                <a className="info-content"
                                    href="https://www.google.com/maps/search/?api=1&query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062">
                                    <h3>Office Hours</h3>

                                    <p>Mon – Fri | 10:30 AM – 5:00 PM (IST)</p>
                                </a>
                            </div>
                            <div className="whatsapp-card">
                                <h3>WhatsApp Consultation</h3>
                                <p>
                                    Prefer to chat?<br />
                                    Reach us on WhatsApp for quick questions.
                                </p>
                                <a href="https://wa.me/916283507748" className="whatsapp-btn">
                                    <i>
                                        <img src={`${config?.storageUrl}/images/chat.svg`} alt="img" />
                                    </i>
                                    <span>Chat on WhatsApp</span>
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
                        width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
        </div>
    </section>




    {showOtpPopup && (

        <div
            className="otp-overlay"
            onClick={() => setShowOtpPopup(false)}
        >

            <div
                className="otp-popup"
                onClick={(e) => e.stopPropagation()}
            >

                {/* CLOSE */}

                <button
                    type="button"
                    className="otp-close"
                    onClick={() =>
                        setShowOtpPopup(false)
                    }
                >
                    ×
                </button>


                {/* ICON */}

                <div className="otp-icon">

                    <i className="fa-solid fa-envelope"></i>

                </div>


                <h2>
                    Verify Your Email
                </h2>


                <p>
                    We have sent a 6-digit OTP to
                </p>


                <strong>
                    {data.email}
                </strong>


                {/* OTP FORM */}

                <form onSubmit={verifyOtp}>

                    <div className="mb-3 mt-4">

                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            placeholder="Enter 6-digit OTP"
                            className={`form-control text-center ${otpErrors.otp
                                ? 'is-invalid'
                                : ''
                                }`}
                            value={otpData.otp}
                            onChange={(e) => {

                                const value =
                                    e.target.value.replace(
                                        /\D/g,
                                        ''
                                    );

                                setOtpData(
                                    'otp',
                                    value
                                );

                            }}
                        />


                        {/* OTP ERROR */}

                        {otpErrors.otp && (

                            <div className="invalid-feedback">

                                {otpErrors.otp}

                            </div>

                        )}

                    </div>


                    {/* VERIFY BUTTON */}

                    <button
                        type="submit"
                        className="common-btn w-100"
                        disabled={
                            otpProcessing ||
                            otpData.otp.length !== 6
                        }
                    >

                        {otpProcessing
                            ? 'Verifying...'
                            : 'Verify OTP'}

                    </button>

                </form>


                <p className="otp-expire">
                    OTP is valid for 10 minutes.
                </p>

            </div>

        </div>

    )}



    <ConsultationCTA />
</>
    );
}