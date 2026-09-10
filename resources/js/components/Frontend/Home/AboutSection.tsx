import React from 'react';

interface FamilyImage {
    image: string;
    review: string;
    description: string;
    priority_date: string;
}

interface HomeEdit {
    left_heading: string;
    left_description: string;
}

interface AboutSectionProps {
    familyimage: FamilyImage | null;
    HomeEdit: HomeEdit | null;
}

export default function AboutSection({ familyimage, HomeEdit, }: AboutSectionProps) {
    return (

        <section className="about-sec common-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-content">

                            {HomeEdit && (
                                <>
                                    <div className="common-heading">
                                        <h2>{HomeEdit.left_heading}</h2>
                                    </div>

                                
                                   {HomeEdit.left_description
                                    .split(/\r?\n\r?\n/)
                                    .map((paragraph, index) => (
                                        <p key={index}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </>
                            )}

                            <div className="about-buttons d-none d-lg-flex">
                                <a href="#" className="common-primary-btn">
                                    <span>About Our Firm</span>
                                    <i className="fa-solid fa-arrow-right" />
                                </a>
                                <a href="#" className="common-secondary-btn">
                                    <span>More Success Stories</span>
                                    <i className="fa-solid fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="success-card">
                            <h2 className="success-title">
                                Good News Worth Celebrating
                            </h2>

                            {familyimage && (
                                <>

                                <div className="success-image-wrapper">
                                    <img
                                        src={`/storage/${familyimage.image}`} alt="Immigration Success Story" className="success-image" />
                                
                                    <div className="case-details">
                                        <div className="case-item">
                                            <div className="case-icon">
                                                <img src="/storage/images/visa.svg" alt="Visa" />
                                            </div>
                                            <div>
                                                <span>VISA CATEGORY</span>
                                                <strong>{familyimage.description}</strong>
                                            </div>
                                        </div>

                                        <div className="case-item">
                                            <div className="case-icon">
                                                <img src="/storage/images/case.svg" alt="Case" />
                                            </div>
                                            <div>
                                                <span>CASE APPROVED ON</span>
                                                <strong>{familyimage.priority_date &&
                                                    new Date(familyimage.priority_date).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric',
                                                    })
                                                }</strong>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>

                                <div className="success-quote">
                                    <span className="quote-mark quote-left">
                                        <img src="/storage/images/quote.svg" alt="Quote" />
                                    </span>
                                    <p>{familyimage.review}</p>
                                    <span className="quote-mark quote-right">
                                        <img src="/storage/images/quote-2.svg" alt="Quote" />
                                    </span>
                                </div>

                                </>
                            )}



                        </div>

                        <div className="about-buttons d-flex d-lg-none">
                            <a href="/about" className="common-primary-btn">
                                <span>About Our Firm</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                            <a href="/blog" className="common-secondary-btn">
                                <span>More Success Stories</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
