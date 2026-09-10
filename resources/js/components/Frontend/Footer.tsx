import config from '@/config';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function Footer() {
    const { showButton, scrollToTop } = useScrollToTop(200);
    return (

        <>
            <footer className="gov-footer">

                <div className="footer-top">
                    <div className="container">

                        <div className="accordion row" id="footerAccordion">

                            {/* Column 1 */}
                            <div className="col-lg-3 col-md-6 accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#footerOne" aria-expanded="true" aria-controls="footerOne">
                                        Immigration Services
                                    </button>
                                </h2>
                                <div id="footerOne" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                                    <div className="accordion-body">
                                        <ul className="footer-links">
                                            <li><a href="/services-detail#familybased-services">Family Immigration & Green Cards</a></li>
                                            <li><a href="/services-detail#petitions-applications-services">USCIS Petitions & Applications</a></li>
                                            <li><a href="/services-detail#consular-processing-services">NVC & Consular Processing</a></li>
                                            <li><a href="/services-detail#consular-processing-services">Adjustment of Status</a></li>
                                            <li><a href="/services-detail#waivers-services">Humanitarian Reinstatement / Petitioner died</a></li>
                                            <li><a href="/services-detail#waivers-services">Immigration Waivers</a></li>
                                            <li><a href="/services-detail#citizenship-services">Visa Refusals, 221(g) & Processing</a></li>
                                            <li><a href="/services-detail#visa-refusals-services">Citizenship & Naturalization</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="col-lg-3 col-md-6 accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#footerTwo" aria-expanded="false" aria-controls="footerTwo">
                                        How Can We Help You?
                                    </button>
                                </h2>
                                <div id="footerTwo" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                                    <div className="accordion-body">
                                        <ul className="footer-links">
                                            <li><a href="https://greencardpetitions.com/services/immediate-relative-petitions" target="_blank" rel="noopener noreferrer">I want to sponsor my spouse</a></li>
                                            <li><a href="https://greencardpetitions.com/services/immediate-relative-petitions" target="_blank" rel="noopener noreferrer">I want to sponsor my parents</a></li>
                                            <li><a href="https://greencardpetitions.com/services/f4-visa-petition-for-(brother-and-sister-of-us-citizen)" target="_blank" rel="noopener noreferrer">I want to sponsor my siblings</a></li>
                                            <li><a href="https://greencardpetitions.com/services/child-status-protection-act1" target="_blank" rel="noopener noreferrer">My child is aging out — CSPA</a></li>
                                            <li><a href="https://greencardpetitions.com/application-has-refused-under-act" target="_blank" rel="noopener noreferrer">I received a 221(g) refusal</a></li>
                                            <li><a href="https://greencardpetitions.com/immigration-news/articles/unraveling-the-reasons-behind-administrative-processing-after-a-us-visa-interview/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">My visa is under Administrative Processing</a></li>
                                            <li><a href="https://greencardpetitions.com/services/misrepresentation-or-fraud-waiver?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">I need an I-601 / I-601A Waiver</a></li>
                                            <li><a href="https://greencardpetitions.com/services/humanitarian-reinstatement" target="_blank" rel="noopener noreferrer">My petitioner has passed away</a></li>
                                            <li><a href="https://greencardpetitions.com/services/counsellor-processing" target="_blank" rel="noopener noreferrer">I need help with NVC</a></li>
                                            <li><a href="https://greencardpetitions.com/check_case_status" target="_blank" rel="noopener noreferrer">I received an RFE from USCIS</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="col-lg-3 col-md-6 accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#footerThree" aria-expanded="false" aria-controls="footerThree">
                                        About F4 India
                                    </button>
                                </h2>
                                <div id="footerThree" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                                    <div className="accordion-body">
                                        <ul className="footer-links">
                                            <li><a href="/about">About Us</a></li>
                                            <li><a href="/services">Our Services</a></li>
                                            <li><a href={`${config.appUrl}/visa-bulletin`}>Visa Bulletin</a></li>
                                            <li><a href="/recent-approvals">Recent Approvals</a></li>
                                            <li><a href="javascript:void(0)">Client Reviews</a></li>
                                            <li><a href="/#home-about-sec">Success Stories</a></li>
                                            <li><a href="/blog">Immigration Blog</a></li>
                                            <li><a href="/#home-videos-sec">Immigration Videos</a></li>
                                            <li><a href="/contact">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 4 */}
                            <div className="col-lg-3 col-md-6 accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#footerFour" aria-expanded="false" aria-controls="footerFour">
                                        Get in Touch
                                    </button>
                                </h2>
                                <div id="footerFour" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                                    <div className="accordion-body">
                                        <ul className="footer-contact">
                                            <li>
                                                <img src={`${config.storageUrl}/images/phone.svg`} alt="phone" />
                                                <a href="tel:+916283507748">+91 62835 07748</a>
                                            </li>
                                            <li>
                                                <img src={`${config.storageUrl}/images/email.svg`} alt="email" />
                                                <a href="mailto:info@f4india.com">info@f4india.com</a>
                                            </li>
                                            <li>
                                                <img src={`${config.storageUrl}/images/address.svg`} alt="address" />
                                                <a href="https://www.google.com/maps/search/?api=1&amp;query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062"
                                                    target="_blank" rel="noopener noreferrer">727, 7th Floor, CP67, Unity Mall, Sector 67, Imperial Tower, Mohali, PB 160062</a>
                                            </li>
                                            <li>
                                                <img src={`${config.storageUrl}/images/info.svg`} alt="alert" />
                                                <a href="https://www.google.com/maps/search/?api=1&amp;query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062"
                                                    target="_blank" rel="noopener noreferrer"> Mon – Fri | 10:30 AM – 5:00 PM (IST)</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="footer-disclaimer">
                            For additional information and resources visit our affiliated website,{' '}
                            <a href="https://greencardpetitions.com/" target="_blank" rel="noopener noreferrer">greencardpetitions.com</a>
                        </div>

                        <hr />

                        <div className="footer-middle">
                            <a href={config.appUrl} className="brand-logo">
                                <img src={`${config.storageUrl}/images/F4-Logo-White.png`} alt="Logo" className="logo-image" />
                                <span className="logo-text">We Understand Immigration Better</span>
                            </a>

                            <div className="footer-social">
                                <h6>Follow Us</h6>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/f4indiaconsultants/" className="social-icon facebook" aria-label="Facebook"
                                        target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://twitter.com/india_f4" className="social-icon twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a href="https://www.instagram.com/f4india/" className="social-icon instagram" aria-label="Instagram"
                                        target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCOgjhwFEXL1CtpkAEPbtF7Q" className="social-icon youtube"
                                        aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                    {/* LinkedIn intentionally hidden — commented out in source */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <ul className="bottom-links">
                                    <li>
                                        <a href="https://greencardpetitions.com/privacy_disclaimer#disclaimer" target="_blank" rel="noopener noreferrer">
                                            Copyright and Disclaimer
                                            <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <ul className="bottom-links">
                                    <li>
                                        <a href="https://greencardpetitions.com/privacy_disclaimer" target="_blank" rel="noopener noreferrer">
                                            Terms of Service
                                            <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <ul className="bottom-links">
                                    <li className="mb-0">
                                        <a href="https://greencardpetitions.com/privacy_disclaimer" target="_blank" rel="noopener noreferrer">
                                            Privacy Policy
                                            <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

            <a className="whatsapp-fab" href="https://wa.me/916283507748" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"> <img src={`${config.storageUrl}/images/whatsapp.svg`} alt="Whatsapp Icon" /></a>
            
             <button
                id="scrollTopBtn"
                title="Back to top"
                type="button"
                className={showButton ? 'show' : ''}
                onClick={scrollToTop}
            >
                <i className="fa-solid fa-arrow-up"></i>
            </button>
        </>
    );
}