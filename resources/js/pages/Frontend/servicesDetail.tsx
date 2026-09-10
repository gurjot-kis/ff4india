import FrontendLayout from '@/layouts/FrontendLayout';
import config from '@/config';
import ContactUs from '@/components/Frontend/Home/ContactUs';
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';


export default function ServicesDetail() {
    return (

        <>
            {/* HERO SECTION */}
            <section className="common-hero-sec text-center blog-hero">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">
                            Services We Provide
                        </h1>

                        <p className="hero-description hero-common-des m-auto">
                            At F4 India Immigration , we assist individuals and families with different stages of the U.S. immigration process. Our work includes family immigration, USCIS petitions, NVC and consular processing, Adjustment of Status, immigration waivers, visa refusals and administrative processing, as well as citizenship and naturalization matters. Every case is different, so we look at the circumstances of the applicant before determining the appropriate process and requirements.
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

                            <article className="services-detail-content">

                                {/* FAMILY BASED SERVICES */}
                                <div id="familybased-services" className="scroll-margin-top">
                                    <h3 className="mt-0">Family Immigration & Green Cards</h3>
                                    <p>
                                        Family is at the heart of many immigration cases. We assist U.S.
                                        citizens and lawful permanent residents with bringing eligible
                                        family members to the United States, whether the family member
                                        is living abroad or already in the United States.
                                    </p>
                                    <p>
                                        Our family immigration services cover{" "}
                                        <strong>Immediate Relative categories,</strong> including{" "}
                                        <strong>
                                            IR-1/CR-1 for spouses, IR-2/CR-2 for children, and IR-5 for
                                            parents of U.S. citizens
                                        </strong>{" "}
                                        as well as{" "}
                                        <strong>
                                            Family Preference categories F-1, F-2A, F-2B, F-3 and F-4.
                                        </strong>{" "}
                                        We also assist with family-related{" "}
                                        <strong>K-1 fiancé(e), K-2, K-3 and K-4</strong> cases.
                                    </p>
                                    <p>
                                        For family members already in the United States, we assist
                                        with qualifying <strong>Adjustment of Status</strong> cases,
                                        including I-130 and I-485 filings, and related applications
                                        such as Employment Authorization and Advance Parole where
                                        applicable.
                                    </p>
                                    <p>
                                        We also handle family cases involving{" "}
                                        <strong>
                                            CSPA and age-out concerns, derivative beneficiaries, changes
                                            in marital status, petitioner death, humanitarian
                                            reinstatement, and other circumstances
                                        </strong>{" "}
                                        that may affect a family-based case.
                                    </p>
                                </div>

                                {/* PETITIONS & APPLICATIONS */}
                                <div id="petitions-applications-services" className="scroll-margin-top">
                                    <h3>USCIS Petitions & Applications</h3>
                                    <p>
                                        Many immigration cases begin with a petition or application
                                        filed with{" "}
                                        <strong>U.S. Citizenship and Immigration Services (USCIS).</strong>{" "}
                                        We help prepare and manage USCIS filings for different types of
                                        immigration cases, including{" "}
                                        <strong>
                                            family, fiancé(e), employment, investor, special immigrant
                                            and other qualifying petitions.
                                        </strong>
                                    </p>
                                    <p>
                                        Our services include assistance with forms such as{" "}
                                        <strong>
                                            I-130, I-131, I-129F, I-140, I-360, I-526/I-526E, I-751 and
                                            other applicable USCIS petitions and filings.
                                        </strong>
                                    </p>
                                    <p>
                                        We also assist when USCIS requests additional information.
                                        This may include Requests for Evidence (RFE), notices,
                                        corrections, additional-document{" "}
                                        <strong>requests and other petition-related matters.</strong> We
                                        review what USCIS is asking for and help organize a response
                                        that addresses the specific issue.
                                    </p>
                                </div>

                                {/* CONSULAR PROCESSING */}
                                <div id="consular-processing-services" className="scroll-margin-top">
                                    <h3>NVC & Consular Processing</h3>
                                    <p>
                                        After an immigrant petition is approved, many applicants living
                                        outside the United States move to the{" "}
                                        <strong>National Visa Center (NVC)</strong> stage before their
                                        immigrant visa interview. We assist clients throughout this
                                        part of the process.
                                    </p>
                                    <p>
                                        Our services include{" "}
                                        <strong>
                                            DS-260 applications, Affidavit of Support and financial
                                            documentation, joint-sponsor cases, civil documents, CEAC
                                            submissions, NVC document requests, document qualification,
                                            case follow-up, and immigrant visa interview preparation.
                                        </strong>
                                    </p>
                                    <p>
                                        We also help clients understand what documents they need to
                                        take to their interview and how to respond when the NVC or
                                        U.S. Embassy requests additional information.
                                    </p>
                                </div>

                                {/* WAIVERS */}
                                <div id="waivers-services" className="scroll-margin-top">
                                    <h3>Humanitarian Reinstatement & Waivers</h3>
                                    <p>
                                        When a petitioner dies after a family-based petition has been
                                        approved, the petition may be revoked because of the
                                        petitioner's death. In certain circumstances, USCIS may allow
                                        the approved petition to be{" "}
                                        <strong>reinstated for humanitarian reasons,</strong> giving the
                                        beneficiary an opportunity to continue the immigration process.
                                        We assist families with these cases by reviewing the petition
                                        history, the circumstances surrounding the petitioner's death,
                                        and the supporting evidence needed to request humanitarian
                                        reinstatement.
                                    </p>
                                    <p>
                                        We also assist with <strong>immigration waivers</strong> when an
                                        applicant is found inadmissible to the United States. Depending
                                        on the circumstances, this may include issues involving{" "}
                                        <strong>
                                            unlawful presence, fraud or willful misrepresentation,
                                            certain criminal grounds, health-related grounds, and other
                                            qualifying grounds of inadmissibility.
                                        </strong>{" "}
                                        We review the specific immigration issue and help determine
                                        which waiver process may apply, including{" "}
                                        <strong>I-601 and I-601A</strong> waiver cases where applicable.
                                    </p>
                                </div>

                                {/* VISA REFUSALS */}
                                <div id="visa-refusals-services" className="scroll-margin-top">
                                    <h3>Visa Refusals, 221(g) & Administrative Processing</h3>
                                    <p>
                                        A visa refusal does not always mean that the immigration
                                        process is over. The appropriate next step depends on the
                                        reason for the refusal and the information provided by the
                                        U.S. Embassy or Consulate.
                                    </p>
                                    <p>
                                        We assist with{" "}
                                        <strong>
                                            221(g) refusals, administrative processing,
                                            additional-document requests, visa refusal reviews, and
                                            cases involving inadmissibility under INA §212.
                                        </strong>
                                    </p>
                                    <p>
                                        Depending on the circumstances, a case may involve grounds such
                                        as{" "}
                                        <strong>
                                            INA §212(a)(1) health-related grounds, §212(a)(2) certain
                                            criminal grounds, §212(a)(4) public charge, §212(a)(6)(C)(i)
                                            fraud or willful misrepresentation, §212(a)(6)(E) certain
                                            alien-smuggling grounds, §212(a)(9)(B) unlawful presence,
                                            §212(a)(9)(C) certain unlawful reentry situations, and other
                                            applicable INA §212 grounds.
                                        </strong>
                                    </p>
                                    <p>
                                        A <strong>221(g)</strong> refusal may involve missing documents,
                                        additional information, or administrative processing. We review
                                        the refusal notice and the history of the case to understand
                                        what the Consulate is requesting and what action may be
                                        appropriate.
                                    </p>
                                </div>

                                {/* CITIZENSHIP */}
                                <div id="citizenship-services" className="scroll-margin-top">
                                    <h3>Citizenship & Naturalization</h3>
                                    <p>
                                        For Green Card holders who are ready to take the next step, we
                                        assist with{" "}
                                        <strong>U.S. citizenship and naturalization matters.</strong>
                                    </p>
                                    <p>
                                        Our services include{" "}
                                        <strong>
                                            Form N-400 naturalization applications, eligibility review,
                                            continuous residence and physical-presence issues,
                                            travel-history review, citizenship through parents, Form
                                            N-600 applications, and other citizenship-related matters.
                                        </strong>
                                    </p>
                                    <p>
                                        Before filing, we review the applicant's immigration and travel
                                        history and consider the requirements that apply to the
                                        particular basis for naturalization.
                                    </p>
                                </div>

                                {/* OUR APPROACH */}
                                <div id="approach-services" className="scroll-margin-top">
                                    <h3>Our Approach</h3>
                                    <p>
                                        Immigration procedures can be complicated, especially when a
                                        case involves a long history, previous applications, a visa
                                        refusal, inadmissibility, missing documentation, or other
                                        unusual circumstances.
                                    </p>
                                    <p>
                                        We believe in first understanding the case and then explaining
                                        what needs to be done. Our goal is to keep the process as clear
                                        as possible, identify potential issues, and help our clients
                                        prepare the required documents and applications properly.
                                    </p>
                                    <p>
                                        If you are unsure which immigration service applies to your
                                        situation,{" "}
                                        <strong>
                                            contact F4 India Immigration and tell us about your case. We
                                            will help you understand the process and the next steps.
                                        </strong>
                                    </p>
                                </div>

                            </article>
                        </div>


                        {/* ================================
                                RIGHT SIDEBAR
                            ================================= */}
                        <div className="col-lg-4">
                            <div className="bulletin-sidebar service-sidebar h-100">
                                <div className="updates-card">

                                    <div className="updates-header">
                                        <i class="fa-brands fa-intercom"></i>
                                        <span>
                                            All Services</span>
                                    </div>

                                    <div className="updates-body">

                                        <ul className="updates-list">

                                            <li>
                                                <a
                                                    href={`${config.appUrl}/services-detail#familybased-services`}
                                                >
                                                    Family-Based Immigration
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={`${config.appUrl}/services-detail#familybased-services`}
                                                >
                                                    Green Card Petitions
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={`${config.appUrl}/services-detail#petitions-applications-services`}
                                                >
                                                    USCIS Petitions (I-130)
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={`${config.appUrl}/services-detail#consular-processing-services`}
                                                >
                                                    NVC Processing
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={`${config.appUrl}/services-detail#consular-processing-services`}
                                                >
                                                    Consular Processing
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={`${config.appUrl}/services-detail#citizenship-services`}
                                                >
                                                    U.S. Citizenship &
                                                    Naturalization
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={`${config.appUrl}/services-detail#waivers-services`}
                                                >
                                                    Waivers
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={`${config.appUrl}/services-detail#waivers-services`}
                                                >
                                                    Humanitarian Reinstatement
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={`${config.appUrl}/services-detail#visa-refusals-services`}
                                                >
                                                    Visa Refusals & 221(g)
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href={`${config.appUrl}/services-detail#visa-refusals-services`}
                                                >
                                                    Administrative Processing
                                                </a>
                                            </li>

                                        </ul>

                                    </div>

                                </div>
                                <ContactUs />
                            </div>


                        </div>

                    </div>
                </div>
            </section>

            <div className="bg-light-grey">
                <ConsultationCTA />
            </div>
        </>

    );
}