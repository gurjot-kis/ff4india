import config from "@/config";
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';

export default function about() {
    return (
        <>
            <section className="common-hero-sec text-center visa-bulletin-hero">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">About Us</h1>
                        <p className="hero-des hero-common-des m-auto">
                            Established in 2008, F4 INDIA has grown into a trusted name in U.S. immigration law. Our growth is the result of informed decisions, client trust, and a commitment to delivering the right solutions. Today, we proudly serve clients worldwide with reliable, transparent, and result-driven U.S. immigration services — all from our office in Mohali, India.
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
                        <span className="breadcrumb__current">About us</span>
                    </div>
                </div>
            </nav>

            <section className="immigration-about common-padding">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="aboutpage-content">
                                <div className="common-heading">
                                    <h2 className="about-title">F4 India Overview</h2>
                                </div>

                                <p>At <a href={`${config.appUrl}/`}>F4 India Immigration</a>, we help individuals and families navigate the U.S.
                                    immigration process with
                                    clear guidance, careful preparation, and personal attention. We understand that immigration is not simply
                                    about completing forms or submitting documents. For our clients, it often means being reunited with a
                                    spouse, parents, children, siblings, or other loved ones and building a future together in the United
                                    States. </p>

                                <p>Our work is primarily focused on <a href={`${config.appUrl}/services-detail#familybased-services`}>family-based U.S. immigration.</a> We assist
                                    clients through
                                    different
                                    stages of the immigration process, from filing petitions with USCIS to National Visa Center processing and
                                    immigrant visa interviews. We also handle matters involving DS-260 applications, Affidavit of Support
                                    requirements, CSPA, humanitarian reinstatement, waivers, 221(g) responses, consular processing, and other
                                    related immigration matters. </p>



                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image-wrapper">

                                <img src={`${config.storageUrl}/images/about-3.png`} alt="U.S. Immigration Passport" className="img-fluid about-image" />

                                <div className="experience-badge">
                                    <strong>18+</strong>
                                    <span>Years of Experience</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="aboutpage-content ">

                                <p>Over the years, we have handled cases with many different circumstances. Some are straightforward, while
                                    others involve complicated family histories, previous refusals, missing documents, financial concerns, or
                                    other issues that require additional attention. This experience has taught us that every case is
                                    different, and understanding the individual circumstances is an important part of preparing it properly.
                                </p>
                                <p>We believe in keeping our communication with clients simple and honest. Immigration procedures can be
                                    complicated, so we take the time to explain what is required, identify potential concerns, and keep our
                                    clients informed about the important steps in their case. We do not believe in making unrealistic
                                    promises. Instead, we focus on doing the work carefully and helping our clients understand their options.
                                </p>

                                <p>At the end of the day, every case represents more than a receipt number or a file. It represents people
                                    who are waiting to be together. <b>That is why we take our work seriously, and that is why we are proud to
                                        help families through their U.S. immigration journey</b></p>

                                <p>If you would like to know more about us and the work we do, we invite you to explore our website and
                                    learn more about the <a href={`${config.appUrl}/services`}> immigration services we provide.</a>
                                    You can also visit our <a href={`${config.appUrl}/recent-approval`}>Approvals</a> page to see some of our achievements
                                    and cases we have
                                    successfully helped with. And if you would like to hear directly from the people we have worked with,
                                    visit our <a href={`https://www.youtube.com/channel/UCOgjhwFEXL1CtpkAEPbtF7Q"`} target="_blank">YouTube channel </a>to see what our clients have to say about their
                                    experience with us. </p>

                                <p><b>Welcome to F4 India Immigration. We are here to help you take the next step. </b></p>


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