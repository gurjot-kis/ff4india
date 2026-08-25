import React from 'react';

export default function ConsultationCTA() {
    return (
        <section className="cta-sec common-padding">
            <div className="container">
                <div className="cta-inner">
                    <div className="cta-badge">
                        <img src="/storage/images/call-icon.svg" alt="Call" />
                        <span>Free 30-Minute Consultation</span>
                    </div>

                    <div className="cta-heading common-heading">
                        <h2>Let's Discuss Your Immigration Case</h2>
                    </div>

                    <div className="cta-actions">
                        <a href="#" className="common-primary-btn">
                            <span>Schedule a Consultation</span>
                            <i className="fa-solid fa-arrow-right" />
                        </a>

                        <a href="tel:+916283507748" className="common-secondary-btn">
                            <img src="/storage/images/call-icon.svg" alt="Call" />
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
