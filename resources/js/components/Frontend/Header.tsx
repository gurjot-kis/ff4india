import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import config from '@/config';

interface EmergencyBroadcast {
    id: number;
    description: string;
}

interface SharedProps extends Record<string, unknown> {
    emergencyBroadcasts: EmergencyBroadcast | null;
}

export default function Header() {

    const { url } = usePage();

    const { emergencyBroadcasts } = usePage<SharedProps>().props;

    return (
        <>

            {/* Notice */}
            <div className="top-notice-wrapper">
                <div className="notice-accent-bar"></div>
                <div className="notice-badge-container">
                    <div className="notice-badge">
                        <img src="/storage/images/notice.svg" alt="Notice" />NOTICE
                    </div>
                </div>

                <div className="marquee-container">
                    <div className="marquee-content">

                        {emergencyBroadcasts && (
                            <>
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        className="notice-item"
                                        key={index}
                                    >
                                        <span className="diamond-icon">◆</span>
                                        {emergencyBroadcasts.description}
                                    </span>
                                ))}
                            </>
                        )}


                    </div>
                </div>
            </div>


            {/* Main Header */}
            <header className="site-header">

                <div className="main-header">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <a href={config.appUrl} className="brand-logo">
                                <img src={`${config.storageUrl}/images/F4-Logo-Blue.png`} alt="Logo" className="logo-image" />
                                <span className="logo-text">We Understand Immigration Better</span>
                            </a>

                            <div className="d-none d-lg-flex align-items-center">
                                <div className="header-search-box">
                                    <input type="text" placeholder="Search..." />
                                    <button className="search-btn" aria-label="Search">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="mobile-header-actions d-lg-none">
                                <button id="mobileSearchBtn" className="mobile-action-btn" aria-label="Toggle Search">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                                <button id="mobileMenuOpenBtn" className="mobileMenuOpenBtn mobile-action-btn"
                                    aria-label="Open Navigation Menu">
                                    <i className="fa-solid fa-bars menu-icon"></i>
                                    <i className="fa-solid fa-xmark close-icon"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="mobileSearchDropdown" className="mobile-search-dropdown d-lg-none">
                    <div className="mobile-search-input-group">
                        <input type="text" placeholder="Search..." />
                        <button type="submit" aria-label="Execute Search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>

                <nav id="unifiedNavbar" className="navbar-main">
                    <div className="container single-nav-wrapper">
                        <h3 className="d-lg-none">Popular Links</h3>
                        <ul className="single-nav-list">
                            <li className="single-nav-item">
                                <a href={config.appUrl} className={`single-nav-link ${url === '/' ? 'active' : ''}`}>Home</a>
                            </li>
                            <li className="single-nav-item">
                                <a href={`${config.appUrl}/about`} className={`single-nav-link ${url === '/about' ? 'active' : ''}`}>About US</a>
                            </li>

                            <li className="single-nav-item">
                                <div className="single-nav-link parent-link-wrap">
                                    <a href={`${config.appUrl}/services`} className="parent-link-text">Services</a>
                                    <button className="submenu-toggle-btn parent-link" type="button" aria-label="Toggle Services submenu">
                                        <i className="fa-solid fa-chevron-right d-lg-none"></i>
                                        <i className="fa-solid fa-chevron-down d-none d-lg-inline"></i>
                                    </button>
                                </div>
                                <ul className="single-submenu">
                                    <li>
                                        <button className="submenu-back-btn">
                                            <i className="fa-solid fa-chevron-left"></i>
                                            <span>Main Menu</span>
                                        </button>
                                    </li>
                                    <li><a href={`${config.appUrl}/services#familybased-services`}>Family Immigration & Green Cards</a></li>
                                    <li><a href={`${config.appUrl}/services#petitions-applications-services`}>USCIS Petitions & Applications</a></li>
                                    <li><a href={`${config.appUrl}/services#consular-processing-services`}>NVC & Consular Processing</a></li>
                                    <li><a href={`${config.appUrl}/services#waivers-services`}>Humanitarian Reinstatement & Waivers</a></li>
                                    <li><a href={`${config.appUrl}/services#visa-refusals-services`}>Citizenship & Naturalization</a></li>
                                    <li><a href={`${config.appUrl}/services#citizenship-services`}>Visa Refusals, 221(g) & Processing</a></li>
                                </ul>
                            </li>

                            <li className="single-nav-item">
                                <a href={`${config.appUrl}/cspa-age-calculator`} className={`single-nav-link ${url === '/cspa-age-calculator' ? 'active' : ''}`}>CSPA Calculator</a>
                            </li>
                            <li className="single-nav-item">
                                <a href={`${config.appUrl}/recent-approval`} className={`single-nav-link ${url === '/recent-approval' ? 'active' : ''}`}>Recent Approvals</a>
                            </li>
                            <li className="single-nav-item">
                                <a href={`${config.appUrl}/blog`} className={`single-nav-link ${url.startsWith('/blog') ? 'active' : ''}`}>Blogs</a>
                            </li>
                            <li className="single-nav-item">
                                <a href={`${config.appUrl}/contact`} className={`single-nav-link ${url === '/contact' ? 'active' : ''}`}>Contact Us</a>
                            </li>
                        </ul>
                        <h3 className="d-lg-none">Stay Connected</h3>
                        <div className="social-icons-row d-lg-none">
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
                </nav>

            </header>
        </>


    );
}