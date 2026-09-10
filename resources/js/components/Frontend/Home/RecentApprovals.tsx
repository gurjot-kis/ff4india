import React from 'react';

interface RecentApproval {
    id: number;
    name: string;
    image: string;
    approval_date: string;
    visa_category: string;
    status: boolean;
}

interface RecentApprovalsProps {
    recentApprovals: {
        data: RecentApproval[];
        current_page: number;
        last_page: number;
        total: number;
    };
}



export default function RecentApprovals({ recentApprovals, }: RecentApprovalsProps) {
    return (
        <section className="recent-cases common-padding">
            <div className="container">
                <div className="recent-cases-header">
                    <div className="common-heading mb-0">
                        <h2>Making Immigration Dreams a Reality</h2>
                    </div>

                    <a href="/recent-approval" className="view-all-btn d-none d-lg-flex">
                        <span>View All</span>
                        <i className="fa-solid fa-arrow-right" />
                    </a>
                </div>

                <div className="row g-xxl-5 g-4">
                    {recentApprovals.data.map((approval) => (
                        <div
                            className="col-lg-4 col-md-6"
                            key={approval.id}
                        >
                            <a className="case-card" href="#">

                                <div className="case-image">
                                    <img
                                        src={`${import.meta.env.VITE_IMAGE_URL}${approval.image}`}
                                        alt={approval.name}
                                    />
                                </div>

                                <div className="case-content">

                                    <div className="case-meta">

                                        <span className="case-category">
                                            {approval.visa_category}
                                        </span>



                                        <span className="case-date">
                                            <i className="fa-regular fa-calendar" />

                                            {new Date(
                                                approval.approval_date
                                            ).toLocaleDateString(
                                                'en-US',
                                                {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                }
                                            )}
                                        </span>

                                    </div>


                                    <h3>{approval.name}</h3>
                                    {/* <p>
                                        {approval.visa_category}
                                    </p> */}

                                </div>

                            </a>
                        </div>
                    ))}
                </div>
                <div class="text-center">
                    <a href="/recent-approval" class="m-view-all common-btn d-inline-flex d-lg-none" target="_blank">
                        <span>View All</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </div>


            </div>
        </section>
    );
}
