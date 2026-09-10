import React from 'react';

const services = [
    {
        title: 'Family Immigration & Green Cards',
        text: 'Helping families with spouse, parent, child, sibling and fiancé(e) immigration, family preference categories, Green Cards and Adjustment of Status.',
        href: 'services-detail#familybased-services',
        className: 'featured-card',
    },
    {
        title: 'USCIS Petitions & Applications',
        text: 'Helping individuals and families prepare and file immigration petitions and applications with USCIS, including responses to requests and notices.',
        href: 'services-detail#petitions-applications-services',
        className: 'featured-card lightcard-bg',
    },
    {
        title: 'NVC & Consular Processing',
        text: 'Assistance with DS-260, Affidavit of Support, civil documents, NVC processing, CEAC submissions and immigrant visa interview preparation.',
        href: 'services-detail#consular-processing-services',
        className: 'featured-card',
    },
    {
        title: 'Humanitarian Reinstatement & Waivers',
        text: 'Assistance with reinstatement of revoked family petitions after the death of the petitioner, along with immigration waivers for grounds of inadmissibility.',
        href: 'services-detail#waivers-services',
        className: 'featured-card',
    },
    {
        title: 'Citizenship & Naturalization',
        text: 'Helping Green Card holders with naturalization, N-400 applications, citizenship through parents, N-600 applications and other citizenship matters.',
        href: 'services-detail#visa-refusals-services',
        className: 'featured-card lightcard-bg',
    },
    {
        title: 'Visa Refusals, 221(g) & Processing',
        text: 'Assistance with 221(g) refusals, administrative processing, additional-document requests and visa cases involving INA §212 inadmissibility.',
        href: 'services-detail#citizenship-services',
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
                                <a href={service.href} className={`service-card ${service.className}`}>
                                    <h3 className="service-title">{service.title}</h3>
                                    <div className="service-divider" />
                                    <p className="service-text">{service.text}</p>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a href="/services" className="services-btn common-btn">
                            <span>View All Services</span>
                            <i className="fa-solid fa-arrow-right" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
