import React from 'react';

const services = [
    {
        title: 'Family-Based Immigration',
        text: 'Reuniting families is at the heart of what we do. We assist with family petitions, immigrant visas, Green Cards, adjustment of status, and consular processing for eligible relatives of U.S. citizens and lawful permanent residents.',
        className: 'featured-card',
    },
    {
        title: 'USCIS Petitions',
        text: 'From preparing petitions to responding to Requests for Evidence (RFEs), our legal team provides strategic guidance throughout the USCIS process to help ensure your case is complete, accurate, and well-supported.',
        className: 'featured-card lightcard-bg',
    },
    {
        title: 'NVC & Consular Processing',
        text: 'From preparing petitions to responding to Requests for Evidence (RFEs), our legal team provides strategic guidance throughout the USCIS process to help ensure your case is complete, accurate, and well-supported.',
        className: 'featured-card',
    },
    {
        title: 'Waivers',
        text: "Immigration obstacles don't have to end your journey. We prepare comprehensive waiver applications, including inadmissibility waivers, humanitarian reinstatement requests, and other legal remedies for complex immigration matters.",
        className: 'featured-card',
    },
    {
        title: 'Visa Refusals & Administrative Processing',
        text: 'Our legal team provides strategic guidance for visa refusals, 221(g) cases, administrative processing, inadmissibility findings, and other challenges encountered during the U.S. visa application process.',
        className: 'featured-card lightcard-bg',
    },
    {
        title: 'U.S. Citizenship & Naturalization',
        text: 'Our legal team provides strategic guidance for visa refusals, 221(g) cases, administrative processing, inadmissibility findings, and other challenges encountered during the U.S. visa application process.',
        className: 'featured-card',
    },
];

export default function ServicesSection() {
    return (
        <section className="services-section">
            <div className="container">
                <div className="services-inner-sec">
                    <div className="services-header common-heading">
                        <h2 className="services-title">
                            Immigration Services and Information
                        </h2>
                    </div>

                    <div className="row g-4">
                        {services.map((service) => (
                            <div className="col-12 col-md-6 col-lg-4" key={service.title}>
                                <a href="#" className={`service-card ${service.className}`}>
                                    <h3 className="service-title">{service.title}</h3>
                                    <div className="service-divider" />
                                    <p className="service-text">{service.text}</p>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a href="#" className="services-btn common-btn">
                            <span>View All Services</span>
                            <i className="fa-solid fa-arrow-right" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
