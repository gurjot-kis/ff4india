import { useForm, usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export default function ContactUs() {

    const { flash } = usePage().props as {
        flash: {
            success?: string;
            error?: string;
        };
    };

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
        message: '',
    });

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


    const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

 
        post('/contact-us/send-otp-slider', {
            preserveScroll: true,

            onSuccess: () => {
                setOtpData('email', data.email);
                setOtpData('otp', '');
                setShowOtpPopup(true);
            },

            onError: (errors) => {
                console.log('OTP SEND ERRORS:', errors);
            },

            onFinish: () => {
                console.log('OTP SEND FINISHED');
            },

        });
    };

    const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        postOtp('/contact-us/verify-otp-slider', {
            preserveScroll: true,

            onSuccess: () => {     

                setShowOtpPopup(false);
                setData('name', '');
                setData('email', '');
                setData('phone', '');
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
            <div className="contact-card updates-card">
                <div className="updates-header">
                    <i className="fa-regular fa-message"></i>
                    <span>CONTACT US</span>
                </div>

                 {successMessage && (
    <div className="alert alert-success">
        {successMessage}
    </div>
)}

                <div className="contact-body">
                    <form onSubmit={handleContactSubmit}>

                        {/* NAME */}
                        <div className="from-group">
                            <input
                                type="text"
                                className={`form-control ${
                                    errors.name ? 'is-invalid' : ''
                                }`}
                                placeholder="Your Name"
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

                        {/* EMAIL */}
                        <div className="from-group">
                            <input
                                type="email"
                                className={`form-control ${
                                    errors.email ? 'is-invalid' : ''
                                }`}
                                placeholder="Email Address"
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

                        {/* PHONE */}
                        <div className="from-group">
                            <input
                                type="tel"
                                className={`form-control ${
                                    errors.phone ? 'is-invalid' : ''
                                }`}
                                placeholder="Phone Number (optional)"
                                value={data.phone}
                                onChange={(e) =>
                                    setData('phone', e.target.value)
                                }
                            />

                            {errors.phone && (
                                <div className="invalid-feedback">
                                    {errors.phone}
                                </div>
                            )}
                        </div>

                        {/* MESSAGE */}
                        <div className="from-group">
                            <textarea
                                className={`form-control ${
                                    errors.message ? 'is-invalid' : ''
                                }`}
                                rows={3}
                                placeholder="Your immigration question..."
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

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="common-btn contact-btn"
                            disabled={processing}
                        >
                            <span>
                                {processing
                                    ? 'Sending OTP...'
                                    : 'Contact Us Now'}
                            </span>

                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* OTP POPUP */}
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
                            onClick={() => setShowOtpPopup(false)}
                        >
                            ×
                        </button>

                        {/* ICON */}
                        <div className="otp-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>

                        <h2>Verify Your Email</h2>

                        <p>
                            We have sent a 6-digit OTP to
                        </p>

                        <strong>{data.email}</strong>

                        {/* OTP FORM */}
                        <form onSubmit={handleOtpSubmit}>
                            <div className="mb-3 mt-4">
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={6}
                                    className={`form-control text-center ${
                                        otpErrors.otp
                                            ? 'is-invalid'
                                            : ''
                                    }`}
                                    placeholder="Enter 6-digit OTP"
                                    value={otpData.otp}
                                    onChange={(e) => {
                                        const value =
                                            e.target.value.replace(
                                                /\D/g,
                                                ''
                                            );

                                        setOtpData('otp', value);
                                    }}
                                />

                                {otpErrors.otp && (
                                    <div className="invalid-feedback">
                                        {otpErrors.otp}
                                    </div>
                                )}
                            </div>

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
        </>
    );
}