import React from 'react';
import config from "@/config";

export default function ConsultationCTA() {
    return (
        <section className="cta-sec common-padding">
            <div className="container">
                <div className="cta-inner">
                    <div className="cta-badge">
                        <img src={`${config.storageUrl}/images/call-icon.svg`} alt="Call" />
                        <span>Book Your Consultation Today</span>
                    </div>

                    <div className="cta-heading common-heading">
                        <h2>Let's Discuss Your Immigration Case</h2>
                    </div>

                    <div className="cta-actions">
                        <a href="https://greencardpetitions.com/about-us/appointment" className="common-primary-btn" target="_blank">
                            <span>Schedule a Consultation</span>
                            <i className="fa-solid fa-arrow-right" />
                        </a>

                        <a href="tel:+916283507748" className="common-secondary-btn">
                            <img src={`${config.storageUrl}/images/call-icon.svg`} alt="Call" />
                            <span>Call +91-6283507748</span>
                        </a>
                    </div>

                    <p className="cta-subtext">
                        Whether you're filing a new petition, responding to a visa refusal,
                        or navigating the USCIS, NVC, or U.S. Consular process, our
                        experienced legal team is here to guide you every step of the way.
                    </p>
                </div>
            </div>
        </section>
    );
}
