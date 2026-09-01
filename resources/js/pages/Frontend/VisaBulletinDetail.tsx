import FrontendLayout from '@/layouts/FrontendLayout';
import config from '@/config';
import ReviewSlider from '@/components/Frontend/Home/ReviewSlider';
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';
import ContactUs from '@/components/Frontend/Home/ContactUs';


interface VisaBulletinDetailProps {
    visaBulletinApplication: Record<string, any> | null;
    visaBulletinPreference: Record<string, any> | null;
    nextSession: string | null;
}

export default function VisaBulletinDetail({ visaBulletinApplication, visaBulletinPreference, nextSession, }: VisaBulletinDetailProps) {

    //console.log('Application:', visaBulletinApplication);
    //console.log('Preference:', visaBulletinPreference);

    return (
        <>
            <section className="common-hero-sec text-center visa-bulletin-hero">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">Current Visa Bulletin - {visaBulletinApplication?.session}</h1>
                        <p className="hero-des hero-common-des m-auto">
                            The U.S. Department of Immigration has no higher priority than the safety and security of Americans. Our
                            Bureau of Consular Affairs provides information, referrals, and public awareness about U.S
                        </p>
                    </div>
                </div>
            </section>

            <nav className="breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <div className="breadcrumb__inner">

                        <a href={`${config?.appUrl}`} className="breadcrumb__item">
                            <span className="breadcrumb__label text-nowrap">F4india</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                        <a href={`${config?.appUrl}/visa-bulletin`} className="breadcrumb__item">
                            <span className="breadcrumb__label text-nowrap">Visa-Bulletin</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                        <span className="breadcrumb__current">Current Visa Bulletin - {visaBulletinApplication?.session}</span>
                    </div>
                </div>
            </nav>


            <section className="visa-bulletin-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 order-2 order-lg-1">
                            <div className="bulletin-sidebar">

                                <div className="updates-card bulletin-nav-card">
                                    <div className="updates-header">
                                        <i className="fa-solid fa-table-list"></i>
                                        <span>The Visa Bulletin</span>
                                    </div>
                                    <ul className="bulletin-nav-list">
                                        <li><a href="#" className="active">Current Visa Bulletin - {visaBulletinApplication?.session}</a></li>
                                        <li><a href="#">Upcoming Visa Bulletin - {nextSession}</a></li>
                                        <li><a href="https://www.uscis.gov/citizenship/civic-assimilation/settling-in-the-us" target="_blank">A
                                            Guide for New Immigrants</a></li>
                                    </ul>
                                </div>


                                <ContactUs />

                            </div>
                        </div>

                        <div className="col-lg-8 order-1 order-lg-2">

                            <div className="bulletin-topbar">
                                <h2>Current Visa Bulletin - {visaBulletinApplication?.session}</h2>

                                <div className="share-page">
                                    <span>Share this page:</span>
                                    <a href="#" aria-label="Print"><i className="fa-solid fa-print"></i></a>
                                    <a href="#" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
                                    <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
                                </div>
                            </div>

                            <div className="bulletin-banner">
                                <img src={`${config.storageUrl}/images/visa-bulletin.png`} alt="Visa Bulletin" />
                            </div>

                            <h3 className="bulletin-section-title">Final Action Dates For Family-Sponsored Preference Cases</h3>
                            <div className="cspa-table-wrap">
                                <table className="cspa-table bulletin-table">
                                    <thead>
                                        <tr>
                                            <th>FAMILY SPONSORED</th>
                                            <th>CHINA</th>
                                            <th>INDIA</th>
                                            <th className="d-none d-md-table-cell">MEXICO</th>
                                            <th className="d-none d-md-table-cell">PHILIPPINES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>F1</th>
                                            <td>{visaBulletinApplication?.visa_f1_china}</td>
                                            <td>{visaBulletinApplication?.visa_f1_india}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinApplication?.visa_f1_mexico}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinApplication?.visa_f1_philippines}</td>
                                        </tr>
                                        <tr>
                                            <th>F2A</th>
                                            <td>{visaBulletinApplication?.visa_f2a_china}</td>
                                            <td>{visaBulletinApplication?.visa_f2a_india}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinApplication?.visa_f2a_mexico}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinApplication?.visa_f2a_philippines}</td>
                                        </tr>
                                        <tr>
                                            <th>F2B</th>
                                            <td>{visaBulletinApplication?.visa_f2b_china}</td>
                                            <td>{visaBulletinApplication?.visa_f2b_india}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinApplication?.visa_f2b_mexico}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinApplication?.visa_f2b_philippines}</td>
                                        </tr>
                                        <tr>
                                            <th>F3</th>
                                            <td>{visaBulletinApplication?.visa_f3_china}</td>
                                            <td>{visaBulletinApplication?.visa_f3_india}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinApplication?.visa_f3_mexico}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinApplication?.visa_f3_philippines}</td>
                                        </tr>
                                        <tr>
                                            <th>F4</th>
                                            <td>{visaBulletinApplication?.visa_f4_china}</td>
                                            <td>{visaBulletinApplication?.visa_f4_india}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinApplication?.visa_f4_mexico}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinApplication?.visa_f4_philippines}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="bulletin-section-title">Dates For Filing Family-sponsored Visa Applications</h3>
                            <div className="cspa-table-wrap">
                                <table className="cspa-table bulletin-table">
                                    <thead>
                                        <tr>
                                            <th>FAMILY SPONSORED</th>
                                            <th>CHINA</th>
                                            <th>INDIA</th>
                                            <th className="d-none d-md-table-cell">MEXICO</th>
                                            <th className="d-none d-md-table-cell">PHILIPPINES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>F1</th>
                                            <td>{visaBulletinPreference?.pref_f1_china}</td>
                                            <td>{visaBulletinPreference?.pref_f1_india}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinPreference?.pref_f1_mexico}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinPreference?.pref_f1_philippines}</td>
                                        </tr>
                                        <tr>
                                            <th>F2A</th>
                                            <td>{visaBulletinPreference?.pref_f2a_china}</td>
                                            <td>{visaBulletinPreference?.pref_f2a_india}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinPreference?.pref_f2a_mexico}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinPreference?.pref_f2a_philippines}</td>
                                        </tr>
                                        <tr>
                                            <th>F2B</th>
                                            <td>{visaBulletinPreference?.pref_f2b_china}</td>
                                            <td>{visaBulletinPreference?.pref_f2b_india}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinPreference?.pref_f2b_mexico}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinPreference?.pref_f2b_philippines}</td>
                                        </tr>
                                        <tr>
                                            <th>F3</th>
                                            <td>{visaBulletinPreference?.pref_f3_china}</td>
                                            <td>{visaBulletinPreference?.pref_f3_india}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinPreference?.pref_f3_mexico}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinPreference?.pref_f3_philippines}</td>
                                        </tr>
                                        <tr>
                                            <th>F4</th>
                                            <td>{visaBulletinPreference?.pref_f4_china}</td>
                                            <td>{visaBulletinPreference?.pref_f4_india}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinPreference?.pref_f4_mexico}</td>
                                            <td className="d-none d-md-table-cell">{visaBulletinPreference?.pref_f4_philippines}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="family-items">
                                <div className="family-items-header">
                                    <i className="fa-regular fa-circle-question"></i>
                                    <span>See more information on the changes here</span>
                                </div>
                                <div className="family-items-body">
                                    <p>USCIS Announces Revised Procedures for Determining Visa Availability for Applicants Waiting to File
                                        for Adjustment of Status.</p>
                                    <p>Archived Visa Bulletins: Online versions of the Visa Bulletin are for informational purposes only
                                        and every effort has been made to ensure their accuracy. Any questions regarding a cut-off date for a
                                        specific month can often be confirmed by consulting an official copy of the Visa Bulletin.</p>
                                </div>
                            </div>

                            <div className="family-items">
                                <div className="family-items-header">
                                    <i className="fa-solid fa-scale-balanced"></i>
                                    <span>Comprehensive Lists of Final Action Dates</span>
                                </div>
                                <div className="family-items-body">
                                    <p>The lists below are updated annually. Please refer to the Visa Bulletins above for final action
                                        dates established during the current fiscal year. Please refer to the Visa Bulletins above for
                                        specific Employment Fourth (E4) Preference final action dates for El Salvador, Guatemala, and
                                        Honduras (beginning with the May 2016 Visa Bulletin).</p>
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