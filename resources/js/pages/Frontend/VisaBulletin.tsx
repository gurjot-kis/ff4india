import FrontendLayout from '@/layouts/FrontendLayout';
import config from '@/config';
import ReviewSlider from '@/components/Frontend/Home/ReviewSlider';
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';
import ContactUs from '@/components/Frontend/Home/ContactUs';

interface VisaBulletinApplication {
    id: number;
    session: string;
}

interface VisaBulletinProps {
    visaBulletinApplication: VisaBulletinApplication[] | null; 
    currentSession: Record<string, any> | null;
    nextSession: Record<string, any> | null;
}

export default function VisaBulletin({visaBulletinApplication, currentSession, nextSession}: VisaBulletinProps ) {

    console.log(visaBulletinApplication);
    const [currentmonth, currentyear] = currentSession?.split(' ') ?? ['', ''];

    const [nextmonth, nextyear] = nextSession?.split(' ') ?? ['', ''];

    return (
        <>

        {/* {visaBulletinApplication && visaBulletinApplication.map((item) => (

            <div key={item.id}> <a href={`${config.appUrl}/visa-bulletin-detail/${item.session}`}>Visa Bulletin for {item.session}</a></div>
        ))} */}

            <section className="common-hero-sec text-center visa-bulletin-hero">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">Visa-Bulletin</h1>
                        <p className="hero-des hero-common-des m-auto">
                            The U.S. Department of Immigration has no higher priority than the safety and security of Americans. Our
                            Bureau of Consular Affairs provides information, referrals, and public awareness about U.S
                        </p>
                    </div>
                </div>
            </section>


            <section className="visa-bulletin-section">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 order-2 order-lg-1">
                            <div className="bulletin-sidebar">
                                <a href="https://www.uscis.gov/citizenship/civic-assimilation/settling-in-the-us" className="sidebar-card"
                                    target="_blank">
                                    <div className="sidebar-icon">
                                        <img src={`${config.storageUrl}/images/immigration.png`} alt="icon" />
                                    </div>
                                    <span>
                                        A GUIDE FOR NEW IMMIGRANTS
                                    </span>
                                </a>

                                <a href="cspa-age-calculator.html" className="sidebar-card">
                                    <div className="sidebar-icon">
                                        <img src={`${config.storageUrl}/images/calc.png`} alt="icon" />
                                    </div>
                                    <span>
                                        CSPA ELIGIBILITY CALCULATOR
                                    </span>
                                </a>

                                <ContactUs />

                                
                            </div>
                        </div>

                        <div className="col-lg-8 order-1 order-lg-2">

                            <div className="bulletin-topbar">
                                <h2>
                                    The Visa Bulletin
                                </h2>

                                <div className="share-page">
                                    <span>Share this page:</span>

                                    <a href="#" aria-label="Print">
                                        <i className="fa-solid fa-print"></i>
                                    </a>

                                    <a href="#" aria-label="Email">
                                        <i className="fa-solid fa-envelope"></i>
                                    </a>

                                    <a href="#" aria-label="Facebook">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>

                                    <a href="#" aria-label="X">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                </div>

                            </div>

                            <div className="row bulletin-row">

                                <div className="col-md-6">
                                    <div className="bulletin-column">
                                        <h2>
                                            Current Visa Bulletin
                                        </h2>
                                        <a href={`${config.appUrl}/visa-bulletin-detail/${currentSession}`}>
                                            <div className="month-card">
                                                <div className="calendar-icon">
                                                    <i className="fa-solid fa-calendar"></i>
                                                </div>
                                                <div className="month-text">
                                                    <span>{currentmonth}</span>
                                                    <strong>{currentyear}</strong>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="bulletin-column">
                                        <h2>
                                            Upcoming Visa Bulletin
                                        </h2>
                                        <a href="#">
                                            <div className="month-card">
                                                <div className="calendar-icon">
                                                    <i className="fa-solid fa-calendar"></i>
                                                </div>
                                                <div className="month-text">
                                                    <span className="text-decoration-none">{nextmonth}</span>
                                                    <strong className="text-decoration-none">{nextyear}</strong>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bulletin-note">
                                <div className="note-icon">
                                    <i className="fa-regular fa-circle-question"></i>
                                </div>
                                <div className="note-content">
                                    <strong>NOTE:</strong>
                                    The Dates Given below for Filing of Applications
                                    are Dependent on the Availability of Numbers in
                                    the Relevant Preference Category. The Department
                                    of State uses numerical limitations established
                                    by the Immigration and Nationality Act (INA) to
                                    determine whether immigrant visa numbers are
                                    available.

                                    <a href="#" className="text-decoration-underline">
                                        Instructions for Changing Chargeability,
                                        for Applicants Waiting a Visa in the US.
                                    </a>

                                </div>

                            </div>

                            <div className="accordion visa-faq" id="visaBulletinFaq">

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingVisaBulletins">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseVisaBulletins" aria-expanded="true" aria-controls="collapseVisaBulletins">
                                            <i className="fa-regular fa-file-lines"></i>
                                            <span>Fiscal Year 2026 Visa Bulletins</span>
                                        </button>
                                    </h2>

                                    <div id="collapseVisaBulletins" className="accordion-collapse collapse show"
                                        aria-labelledby="headingVisaBulletins">

                                        <div className="accordion-body">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <ul className="visa-links">
                                                        <li><a href="#">Visa Bulletin for January 2026</a></li>
                                                        <li><a href="#">Visa Bulletin for February 2026</a></li>
                                                        <li><a href="#">Visa Bulletin for March 2026</a></li>
                                                        <li><a href="#">Visa Bulletin for April 2026</a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-6">
                                                    <ul className="visa-links">

                                                        <li><a href="#">Visa Bulletin for May 2026</a></li>
                                                        <li><a href="#">Visa Bulletin for June 2026</a></li>
                                                        <li><a href="#">Visa Bulletin for July 2026</a></li>
                                                        <li><a href="#">Visa Bulletin for August 2026</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingActionItems">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseActionItems" aria-expanded="false" aria-controls="collapseActionItems">
                                            <i className="fa-solid fa-scale-balanced"></i>
                                            <span>Comprehensive List of Visa Action Items</span>
                                        </button>
                                    </h2>

                                    <div id="collapseActionItems" className="accordion-collapse collapse show"
                                        aria-labelledby="headingActionItems">

                                        <div className="accordion-body">
                                            <p>The lists below are updated annually. Please refer to the Visa Bulletins above for final action
                                                dates
                                                established during the current fiscal year.
                                                Please refer to the Visa Bulletins above for specific Employment Fourth (E4) Preference final action
                                                dates for El Salvador, Guatemala, and Honduras (beginning with the May 2016 Visa Bulletin).</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFamilyItems">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFamilyItems" aria-expanded="false" aria-controls="collapseFamilyItems">
                                            <i className="fa-solid fa-location-dot"></i>
                                            <span>Family Items88888</span>
                                        </button>
                                    </h2>
                                    <div id="collapseFamilyItems" className="accordion-collapse collapse show"
                                        aria-labelledby="headingFamilyItems">

                                        <div className="accordion-body">
                                            <ul className="visa-links">
                                                <li>
                                                    <a href={`${config.storageUrl}/VisaBulletin/family-preference-cut-off-dates/Cut-off_Dates_Worldwide_Online_FY23.pdf`} target="_blank" rel="noopener noreferrer" className="pdf_link">
                                                    
                                                    Worldwide Family Preference Final Action Dates (FY1992-2023)
                                                    <span className="far fa-file-pdf pdf_link"></span>
                                                    
                                                    </a>
                                                </li>
                                                <li><a href={`${config.storageUrl}/VisaBulletin/family-preference-cut-off-dates/Cut-off_Dates_China_Online_FY23.pdf`}  target="_blank" rel="noopener noreferrer"
                                                    className="pdf_link">China Family Preference Final Action Dates
                                                    (FY1992-2023) <span className="far fa-file-pdf pdf_link"></span></a></li>
                                                <li><a href={`${config.storageUrl}/VisaBulletin/family-preference-cut-off-dates/Cut-off_Dates_India_Online_FY23.pdf`}  target="_blank" rel="noopener noreferrer"
                                                    className="pdf_link">India Family Preference Final Action Dates
                                                    (FY1992-2023) <span className="far fa-file-pdf pdf_link"></span></a></li>
                                                <li><a href={`${config.storageUrl}/VisaBulletin/family-preference-cut-off-dates/Cut-off_Dates_Mexico_Online_FY23.pdf`}  target="_blank" rel="noopener noreferrer"
                                                    className="pdf_link">Mexico Family Preference Final Action Dates
                                                    (FY1992-2023) <span className="far fa-file-pdf pdf_link"></span></a></li>
                                                <li><a href={`${config.storageUrl}/VisaBulletin/family-preference-cut-off-dates/Cut-off_Dates_Philippines_Online_FY23.pdf`}
                                                     target="_blank" rel="noopener noreferrer" className="pdf_link">Philippines Family Preference Final Action
                                                    Dates (FY1992-2023) <span className="far fa-file-pdf pdf_link"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEmploymentItems">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseEmploymentItems" aria-expanded="false"
                                            aria-controls="collapseEmploymentItems">
                                            <i className="fa-solid fa-users-gear"></i>
                                            <span>Employment Preferences</span>
                                        </button>
                                    </h2>

                                    <div id="collapseEmploymentItems" className="accordion-collapse collapse show"
                                        aria-labelledby="headingEmploymentItems">

                                        <div className="accordion-body">
                                            <p>This information is updated annually. Please refer to the Visa Bulletin below for information
                                                involving
                                                cutoff dates and chargeability by country.</p>
                                            <ul className="visa-links">
                                                <li><a href={`${config.storageUrl}/VisaBulletin/employment-cut-off-dates/Cut-off_Dates_Worldwide_Online_FY23.pdf`}  target="_blank" rel="noopener noreferrer"
                                                    className="pdf_link">Worldwide Employment Preference Final Action Dates
                                                    (FY1992-2023) <span className="far fa-file-pdf pdf_link"></span></a></li>
                                                <li><a href={`${config.storageUrl}/VisaBulletin/employment-cut-off-dates/Cut-off_Dates_China_Online_FY23.pdf`}  target="_blank" rel="noopener noreferrer"
                                                    className="pdf_link">China Employment Preference Final Action Dates
                                                    (FY1992-2023) <span className="far fa-file-pdf pdf_link"></span></a></li>
                                                <li><a href={`${config.storageUrl}/VisaBulletin/employment-cut-off-dates/Cut-off_Dates_India_Online_FY23.pdf`}  target="_blank" rel="noopener noreferrer"
                                                    className="pdf_link">India Employment Preference Final Action Dates
                                                    (FY1992-2023) <span className="far fa-file-pdf pdf_link"></span></a></li>
                                                <li><a href={`${config.storageUrl}/VisaBulletin/employment-cut-off-dates/Cut-off_Dates_Mexico_Online_FY23.pdf`}  target="_blank" rel="noopener noreferrer"
                                                    className="pdf_link">Mexico Employment Preference Final Action Dates
                                                    (FY1992-2023) <span className="far fa-file-pdf pdf_link"></span></a></li>
                                                <li><a href={`${config.storageUrl}/VisaBulletin/employment-cut-off-dates/Cut-off_Dates_Philippines_Online_FY23.pdf`}  target="_blank" rel="noopener noreferrer"
                                                    className="pdf_link">Philippines Employment Preference Final Action Dates
                                                    (FY1992-2023) <span className="far fa-file-pdf pdf_link"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </section>



           
            <ReviewSlider />
            <ConsultationCTA />
        </>
    );
}