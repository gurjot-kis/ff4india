import FrontendLayout from '@/layouts/FrontendLayout';
import config from '@/config';

export default function ServicesDetail() {
    return (

<>
                {/* HERO SECTION */}
                <section className="common-hero-sec text-center">
                    <div className="container position-relative z-2">
                        <div className="hero-content">
                            <h1 className="hero-title hero-common-title">
                                Our Services
                            </h1>

                            <p className="hero-description hero-common-des m-auto">
                                Comprehensive immigration services to help families
                                navigate the U.S. immigration process.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="services-detail-section common-padding">
                    <div className="container">
                        <div className="row">

                            {/* ================================
                                LEFT CONTENT
                            ================================= */}
                            <div className="col-lg-8">

                                {/* FAMILY BASED SERVICES */}
                                <div
                                    id="familybased-services"
                                    className="services-detail-content scroll-margin-top"
                                >
                                    <h2>Family-Based Immigration</h2>

                                    <p>
                                        We help families navigate the U.S.
                                        immigration process and prepare the
                                        necessary petitions and applications.
                                    </p>
                                </div>


                                {/* PETITIONS & APPLICATIONS */}
                                <div
                                    id="petitions-applications-services"
                                    className="services-detail-content scroll-margin-top"
                                >
                                    <h2>Petitions & Applications</h2>

                                    <p>
                                        Assistance with USCIS petitions,
                                        including family-based immigration
                                        petitions and related applications.
                                    </p>
                                </div>


                                {/* CONSULAR PROCESSING */}
                                <div
                                    id="consular-processing-services"
                                    className="services-detail-content scroll-margin-top"
                                >
                                    <h2>Consular Processing</h2>

                                    <p>
                                        Guidance through the National Visa Center
                                        process and consular processing for
                                        immigrant visas.
                                    </p>
                                </div>


                                {/* WAIVERS */}
                                <div
                                    id="waivers-services"
                                    className="services-detail-content scroll-margin-top"
                                >
                                    <h2>Waivers & Humanitarian Reinstatement</h2>

                                    <p>
                                        Assistance with immigration waivers and
                                        humanitarian reinstatement cases.
                                    </p>
                                </div>


                                {/* VISA REFUSALS */}
                                <div
                                    id="visa-refusals-services"
                                    className="services-detail-content scroll-margin-top"
                                >
                                    <h2>Visa Refusals & Administrative Processing</h2>

                                    <p>
                                        Guidance for visa refusals, 221(g)
                                        notices, and administrative processing.
                                    </p>
                                </div>


                                {/* CITIZENSHIP */}
                                <div
                                    id="citizenship-services"
                                    className="services-detail-content scroll-margin-top"
                                >
                                    <h2>U.S. Citizenship & Naturalization</h2>

                                    <p>
                                        Assistance with U.S. citizenship and
                                        naturalization applications.
                                    </p>
                                </div>

                            </div>


                            {/* ================================
                                RIGHT SIDEBAR
                            ================================= */}
                            <div className="col-lg-4">
                                <div className="services-sidebar">

                                    <div className="updates-card">

                                        <div className="updates-header">
                                            <span>OUR SERVICES</span>
                                        </div>

                                        <div className="updates-body">

                                            <ul className="updates-list">

                                                <li>
                                                    <a
                                                        href={`${config.appUrl}/services#familybased-services`}
                                                    >
                                                        Family-Based Immigration
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href={`${config.appUrl}/services#familybased-services`}
                                                    >
                                                        Green Card Petitions
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href={`${config.appUrl}/services#petitions-applications-services`}
                                                    >
                                                        USCIS Petitions (I-130)
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href={`${config.appUrl}/services#consular-processing-services`}
                                                    >
                                                        NVC Processing
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href={`${config.appUrl}/services#consular-processing-services`}
                                                    >
                                                        Consular Processing
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href={`${config.appUrl}/services#citizenship-services`}
                                                    >
                                                        U.S. Citizenship &
                                                        Naturalization
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href={`${config.appUrl}/services#waivers-services`}
                                                    >
                                                        Waivers
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href={`${config.appUrl}/services#waivers-services`}
                                                    >
                                                        Humanitarian Reinstatement
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href={`${config.appUrl}/services#visa-refusals-services`}
                                                    >
                                                        Visa Refusals & 221(g)
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        href={`${config.appUrl}/services#visa-refusals-services`}
                                                    >
                                                        Administrative Processing
                                                    </a>
                                                </li>

                                            </ul>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>

    );
}