import config from "@/config";
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';


export default function Services() {
    return (
        <>
            <section className="common-hero-sec text-center visa-bulletin-hero">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">Immigration Services and Information</h1>
                        <p className="hero-des hero-common-des m-auto">
                            F4 India is a long-established immigration law firm with an international reputation. We specialize in all
                            aspects of U.S. Immigration law, with extensive experience in family-based, Citizenship and humanitarian
                            immigration matters.
                        </p>
                    </div>
                </div>
            </section>

            <nav className="breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <div className="breadcrumb__inner">

                        <a href={`${config.appUrl}`} className="breadcrumb__item">
                            <span className="breadcrumb__label text-nowrap">F4india</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                        <span className="breadcrumb__current">Services</span>
                    </div>
                </div>
            </nav>


            <section className="services-wrapper common-padding">
                <div className="container">
                    <div className="service-filter">

                        <ul className="nav custom-tabs" id="serviceTabs" role="tablist">

                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button"
                                    role="tab" aria-controls="all" aria-selected="true">
                                    All
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="immigrant-tab" data-bs-toggle="tab" data-bs-target="#immigrant" type="button"
                                    role="tab" aria-controls="immigrant" aria-selected="false">
                                    Immigrant Visa
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="non-immigrant-tab" data-bs-toggle="tab" data-bs-target="#non-immigrant"
                                    type="button" role="tab" aria-controls="non-immigrant" aria-selected="false">
                                    Visa Refusals 221G
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="citizenship-tab" data-bs-toggle="tab" data-bs-target="#citizenship"
                                    type="button" role="tab" aria-controls="citizenship" aria-selected="false">
                                    Citizenship
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="waiver-tab" data-bs-toggle="tab" data-bs-target="#waiver" type="button"
                                    role="tab" aria-controls="waiver" aria-selected="false">
                                    Waiver
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="processing-tab" data-bs-toggle="tab" data-bs-target="#processing" type="button"
                                    role="tab" aria-controls="processing" aria-selected="false">
                                    Application Processing
                                </button>
                            </li>

                        </ul>

                    </div>

                    <div className="tab-content" id="serviceTabsContent">

                        <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                            <div className="row g-4">

                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#familybased-services" className="service-card featured-card">
                                        <h3 className="service-title">Family Immigration &amp; Green Cards</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Helping families with spouse, parent, child, sibling and fiancé(e)
                                            immigration, family preference categories, Green Cards and Adjustment of Status.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#petitions-applications-services"
                                        className="service-card featured-card lightcard-bg">
                                        <h3 className="service-title">USCIS Petitions &amp; Applications</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Helping individuals and families prepare and file immigration
                                            petitions and applications with USCIS, including responses to requests and notices.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#consular-processing-services" className="service-card featured-card">
                                        <h3 className="service-title">NVC &amp; Consular Processing</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Assistance with DS-260, Affidavit of Support, civil documents,
                                            NVC processing, CEAC submissions and immigrant visa interview preparation.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#waivers-services" className="service-card featured-card">
                                        <h3 className="service-title">Humanitarian Reinstatement &amp; Waivers</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Assistance with reinstatement of revoked family petitions after
                                            the death of the petitioner, along with immigration waivers for grounds of inadmissibility.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#waivers-services" className="service-card featured-card lightcard-bg">
                                        <h3 className="service-title">Citizenship &amp; Naturalization</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Helping Green Card holders with naturalization, N-400
                                            applications, citizenship through parents, N-600 applications and other citizenship matters.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#citizenship-services" className="service-card featured-card">
                                        <h3 className="service-title">Visa Refusals, 221(g) &amp; Processing</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Assistance with 221(g) refusals, administrative processing,
                                            additional-document requests and visa cases involving INA §212 inadmissibility.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="tab-pane fade" id="immigrant" role="tabpanel" aria-labelledby="immigrant-tab">
                            <div className="row g-4">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#familybased-services" className="service-card featured-card">
                                        <h3 className="service-title">Family Immigration &amp; Green Cards</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Helping families with spouse, parent, child, sibling and fiancé(e)
                                            immigration, family preference categories, Green Cards and Adjustment of Status.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#petitions-applications-services" className="service-card featured-card lightcard-bg">
                                        <h3 className="service-title">USCIS Petitions &amp; Applications</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Helping individuals and families prepare and file immigration
                                            petitions and applications with USCIS, including responses to requests and notices.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#consular-processing-services" className="service-card featured-card">
                                        <h3 className="service-title">NVC &amp; Consular Processing</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Assistance with DS-260, Affidavit of Support, civil documents,
                                            NVC processing, CEAC submissions and immigrant visa interview preparation.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="non-immigrant" role="tabpanel" aria-labelledby="non-immigrant-tab">
                            <div className="row g-4">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#citizenship-services" className="service-card featured-card">
                                        <h3 className="service-title">Visa Refusals, 221(g) &amp; Processing</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Assistance with 221(g) refusals, administrative processing,
                                            additional-document requests and visa cases involving INA §212 inadmissibility.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="citizenship" role="tabpanel" aria-labelledby="citizenship-tab">
                            <div className="row g-4">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#waivers-services" className="service-card featured-card lightcard-bg">
                                        <h3 className="service-title">Citizenship &amp; Naturalization</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Helping Green Card holders with naturalization, N-400
                                            applications, citizenship through parents, N-600 applications and other citizenship matters.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="waiver" role="tabpanel" aria-labelledby="waiver-tab">
                            <div className="row g-4">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#waivers-services" className="service-card featured-card">
                                        <h3 className="service-title">Humanitarian Reinstatement &amp; Waivers</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Assistance with reinstatement of revoked family petitions after
                                            the death of the petitioner, along with immigration waivers for grounds of inadmissibility.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="processing" role="tabpanel" aria-labelledby="processing-tab">
                            <div className="row g-4">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#petitions-applications-services" className="service-card featured-card lightcard-bg">
                                        <h3 className="service-title">USCIS Petitions &amp; Applications</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Helping individuals and families prepare and file immigration
                                            petitions and applications with USCIS, including responses to requests and notices.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4">
                                    <a href="services-detail#consular-processing-services" className="service-card featured-card">
                                        <h3 className="service-title">NVC &amp; Consular Processing</h3>
                                        <div className="service-divider"></div>
                                        <p className="service-text">
                                            Assistance with DS-260, Affidavit of Support, civil documents,
                                            NVC processing, CEAC submissions and immigrant visa interview preparation.
                                        </p>
                                        <span className="read-more-btn">Read More <i className="fa-solid fa-arrow-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <div className="bg-light-grey">
                <ConsultationCTA />
            </div>
        </>
    )
}