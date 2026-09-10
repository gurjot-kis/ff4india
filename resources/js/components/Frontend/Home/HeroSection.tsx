import React from 'react';
import config from '@/config';
// import '../../../../../resources/css/frontend/style.css'; 

export default function HeroSection() {
    return (

        <section className="hero-section common-hero-sec">
            <div className="container position-relative z-2">
                <div className="row">
                    <div className="col-12 col-lg-7 col-xl-8">
                        <div className="hero-content">
                            <h1 className="hero-title hero-common-title">
                                Comprehensive U.S. Immigration Representation
                            </h1>

                            <p className="hero-description hero-common-des home-hero-des">
                                From <span>USCIS</span> to the{' '}
                                <span>National Visa Center (NVC)</span> and{' '}
                                <span>U.S. Embassies & Consulates worldwide,</span>{' '}
                                we provide comprehensive legal representation through
                                every stage of the U.S. immigration process—delivering
                                trusted guidance, strategic solutions, and personalized
                                support from start to finish.
                            </p>

                            <a href="https://greencardpetitions.com/about-us/appointment" className="featured-btn common-btn" target="_blank">
                                <span>Book Consultation</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 col-xl-4">
                        <div className="hero-info-card">
                            <div className="card-header-row">
                                <h2 className="card-heading">Contact Our Legal Team</h2>
                            </div>

                            <div className="hotline-number">
                                <a href="tel:+916283507748">+91 62835 07748</a>
                            </div>

                            <hr className="card-divider" />

                            <div className="card-details-list">
                                <div className="detail-item">
                                    <img src={`${config.storageUrl}/images/email.svg`} alt="email" className="item-icon" />
                                    <a href="mailto:info@f4india.com" className="detail-text">
                                        info@f4india.com
                                    </a>
                                </div>

                                <div className="detail-item">
                                    <img src={`${config.storageUrl}/images/address.svg`} alt="address" className="item-icon" />
                                    <div className="detail-text">
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            727, 7th Floor, CP67, Unity Mall, Sector 67,
                                            Imperial Tower, Mohali, PB 160062
                                        </a>
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <img src={`${config.storageUrl}/images/info.svg`} alt="hours" className="item-icon" />
                                    <div className="detail-text">
                                        Mon – Fri | 10:30 AM – 5:00 PM (IST)
                                    </div>
                                </div>

                                <div className="detail-item">
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/f4indiaconsultants/" target="_blank" rel="noopener noreferrer" className="social-icon facebook text-white" aria-label="Facebook">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                        <a href="https://twitter.com/india_f4" target="_blank" rel="noopener noreferrer" className="social-icon twitter text-white" aria-label="Twitter">
                                            <i className="fa-brands fa-x-twitter" />
                                        </a>
                                        <a href="https://www.instagram.com/f4india/" target="_blank" rel="noopener noreferrer" className="social-icon instagram text-white" aria-label="Instagram">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCOgjhwFEXL1CtpkAEPbtF7Q" target="_blank" rel="noopener noreferrer" className="social-icon youtube text-white" aria-label="YouTube">
                                            <i className="fa-brands fa-youtube" />
                                        </a>
                                        {/* <a href="https://www.linkedin.com/in/samar-sandhu-716a99174" target="_blank" rel="noopener noreferrer" className="social-icon linkedin text-white" aria-label="LinkedIn">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
