import config from '@/config';
export default function Footer() {
    return (
  
        <>   
            <footer className="gov-footer">

                <div className="footer-top">
                    <div className="container">

                        <div className="accordion row" id="footerAccordion">

                            {/* Column 1  */}
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
                                            <li><a href="">Family-Based Immigration</a></li>
                                            <li><a href="">Green Card Petitions</a></li>
                                            <li><a href="">USCIS Petitions (I-130)</a></li>
                                            <li><a href="">NVC Processing</a></li>
                                            <li><a href="">Consular Processing</a></li>
                                            <li><a href="">U.S. Citizenship & Naturalization</a></li>
                                            <li><a href="">Waivers</a></li>
                                            <li><a href="">Humanitarian Reinstatement</a></li>
                                            <li><a href="">Visa Refusals & 221(g)</a></li>
                                            <li><a href="">Administrative Processing</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2  */}
                            <div className="col-lg-3 col-md-6 accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#footerTwo" aria-expanded="false" aria-controls="footerTwo">
                                        Resources & Tools
                                    </button>
                                </h2>
                                <div id="footerTwo" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
                                    <div className="accordion-body">
                                        <ul className="footer-links">
                                            <li><a href={`${config.appUrl}/visa-bulletin`}>Visa Bulletin</a></li>
                                            <li><a href="">CSPA Calculator</a></li>
                                            <li><a href="">Immigration Blogs</a></li>
                                            <li><a href="">Immigration FAQs</a></li>
                                            <li><a href="">Client Success Stories</a></li>
                                            <li><a href="">Video Library</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3  */}
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
                                            <li><a href="">About Us</a></li>
                                            <li><a href="">Meet Our Team</a></li>
                                            <li><a href="">Why Choose F4 India</a></li>
                                            <li><a href="">Contact Us</a></li>
                                            <li><a href="">Book a Consultation</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


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
                                                        target="_blank">727, 7th Floor, CP67, Unity Mall, Sector 67, Imperial Tower, Mohali, PB 160062</a>
                                            </li>
                                            <li>
                                                <img src={`${config.storageUrl}/images/info.svg`} alt="alert" />
                                                <a href="https://www.google.com/maps/search/?api=1&amp;query=F4+India+Immigration+Law+Firm,+727,+7th+Floor,+Imperial+Tower,+CP.67,+Sector+67,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160062"
                                                    target="_blank"> Mon – Sat | 10:00 AM – 6:00 PM (IST)</a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="footer-disclaimer">
                            F4 India provides external links solely for our readers' information and convenience.
                            <a href="">Disclaimer Details</a>
                        </div>

                        <hr/>

                            <div className="footer-middle">
                                <a href={config.appUrl} className="brand-logo">
                                    <img src={`${config.storageUrl}/images/F4-Logo-Blue.png`} alt="Logo" className="logo-image"  />
                                        <span className="logo-text">We Understand Immigration Better</span>
                                </a>
                   
                                <div className="footer-social">
                                    <h6>Follow Us</h6>
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/f4indiaconsultants/" className="social-icon facebook" aria-label="Facebook"
                                            target="_blank">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="https://twitter.com/india_f4" className="social-icon twitter" aria-label="Twitter" target="_blank">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                        <a href="https://www.instagram.com/f4india/" className="social-icon instagram" aria-label="Instagram"
                                            target="_blank">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCOgjhwFEXL1CtpkAEPbtF7Q" className="social-icon youtube"
                                            aria-label="YouTube" target="_blank">
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/samar-sandhu-716a99174" className="social-icon linkedin"
                                            aria-label="LinkedIn" target="_blank">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>

                                    </div>
                                </div>
                            </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="official-site">
                            An official website of the <a href="https://f4india.com" target="_blank">f4india.com</a>
                            <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                        </div>
                        <hr/>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <ul className="bottom-links">
                                        <li>
                                            <a href="" target="_blank">
                                                About F4 India
                                                <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                                            </a>
                                        </li>
                               
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <ul className="bottom-links">
                                        <li>
                                            <a href="">
                                                Copyright and Disclaimer
                                                <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                                            </a>
                                        </li>
                            
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <ul className="bottom-links">
                                        <li>
                                            <a href="">
                                                Terms of Service
                                                <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                                            </a>
                                        </li>
                              
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <ul className="bottom-links">
                                        
                                        <li>
                                            <a href="">
                                                Privacy Policy
                                                <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                                <div className="gov-links">
                                    <p>Looking for U.S. government information and services?</p>
                                    <a href="https://www.usa.gov/" target="_blank">
                                        USA.gov
                                        <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                                    </a>
                                    <a href="https://www.usa.gov/es/" target="_blank">
                                        USA.gov/espanol
                                        <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                                    </a>
                                    <a href="https://www.gsa.gov/website-information/accessibility-statement?_gl=1*1nik4kc*_ga*MzA0MDE3MTM0LjE3MDUwOTE0NjA.*_ga_HBYXWFP794*MTcyMDUzMDQzNS4xMDguMS4xNzIwNTMwNDM3LjAuMC4w]https://www.usa.gov/"
                                        target="_blank">
                                        GSA.gov
                                        <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                                    </a>
                                </div>
                            </div>
                    </div>
                 
            </footer>

             <a className="whatsapp-fab" href="https://wa.me/916283507748" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp"> <img src={`${config.storageUrl}/images/whatsapp.svg`} alt="Whatsapp Icon" /></a>
         </> 
    );
}