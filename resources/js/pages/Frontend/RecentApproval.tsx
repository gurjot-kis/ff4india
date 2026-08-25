import FrontendLayout from '@/layouts/FrontendLayout';
import config from '@/config';
import ReviewSlider from '@/components/Frontend/Home/ReviewSlider';
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';
import React from 'react';

interface RecentApproval {
    id: number;
    name: string;
    image: string | null;
    approval_date: string;
    visa_category: string;
    status: boolean;
}

interface Pagination<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

interface Filters {
    year: string | null;
}

interface RecentApprovalProps {
    recentApprovals: Pagination<RecentApproval> | null;
    filters: Filters;
}

export default function RecentApproval({ recentApprovals,filters, }: RecentApprovalProps) {

    console.log(recentApprovals);

    return (
        <>

            <section className="common-hero-sec text-center">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">Our Recent Immigration Case Approvals</h1>
                        <p className="hero-des hero-common-des m-auto">
                            Explore real client success stories and case approvals that offer confidence and guidance for your immigration
                            journey. Our clients' trust and appreciation continue to inspire us to deliver exceptional results every day.
                        </p>
                    </div>
                </div>
            </section>

            <section className="recent-cases recent-cases-wrapper common-padding bg-white">
                <div className="container">
                    <div className="visa-filter-section">
                        <div className="row align-items-center g-3">
                            <div className="col-12 col-md-5 col-lg-5">
                                <div className="input-group visa-filter-search">
                                </div>
                            </div>
                            <div className="col-12 col-md-7 col-lg-7">
                                <div className="d-flex flex-wrap justify-content-md-end align-items-center visa-filter-controls">
                                    <span className="visa-filter-label">
                                        Sort by:
                                    </span>

                                    <select className="form-select visa-filter-select visa-filter-year"
                                        value={filters.year ?? ''}
                                        onChange={(e) => {
                                            const year = e.target.value;

                                            window.location.href = year
                                                ? `${window.location.pathname}?year=${year}`
                                                : window.location.pathname;
                                        }}
                                    >
                                        <option value="">Year</option>

                                        {Array.from(
                                            { length: new Date().getFullYear() - 2023 + 1 },
                                            (_, index) => new Date().getFullYear() - index
                                        ).map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-xxl-5 g-4">

                    {recentApprovals?.data?.length > 0 ? (
                        recentApprovals && recentApprovals.data.map((item) => (

                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <a className="case-card" href="javascript:void(0)">
                                    <div className="case-image">
                                        <img src={`${config?.storageUrl}/${item?.image}`} alt={item?.name} />
                                    </div>

                                    <div className="case-content">
                                        <div className="case-meta">
                                            <span className="case-category">{item.visa_category}</span>
                                            <span className="case-date">
                                                <i className="fa-regular fa-calendar"></i>
                                                {new Date(item.approval_date).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                        </div>
                                        <h3>{item.name}</h3>
                                        <p>U.S. Immigrant Visa (Green Card)</p>
                                    </div>
                                </a>
                            </div>

                        ))
                        ) : (
                            <div className="col-12">
                                <div className="text-center py-5">
                                    <h3>No records found</h3>
                                    <p>
                                        No immigration case approvals were found for the selected year.
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>


                    {recentApprovals && recentApprovals.last_page > 1 && (
    <div className="case-pagination">
        <nav className="unique-pagination-wrapper" aria-label="Page navigation">
            <ul className="pagination unique-pagination mb-0">

                {/* First */}
                <li className={`page-item ${recentApprovals.current_page === 1 ? 'disabled' : ''}`}>
                    <a
                        className="page-link unique-page-link"
                        href={`${recentApprovals.path}?page=1${filters.year ? `&year=${filters.year}` : ''}`}
                        aria-label="First"
                    >
                        <i className="fa-solid fa-angles-left"></i>
                    </a>
                </li>

                {/* Previous */}
                <li className={`page-item ${!recentApprovals.prev_page_url ? 'disabled' : ''}`}>
                    <a
                        className="page-link unique-page-link"
                        href={recentApprovals.prev_page_url ?? '#'}
                        aria-label="Previous"
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </a>
                </li>

                {/* Page numbers */}
                {Array.from(
                    { length: recentApprovals.last_page },
                    (_, index) => index + 1
                )
                    .filter((page) => {
                        const current = recentApprovals.current_page;
                        const last = recentApprovals.last_page;

                        return (
                            page === 1 ||
                            page === last ||
                            Math.abs(page - current) <= 1
                        );
                    })
                    .map((page, index, pages) => {
                        const previousPage = pages[index - 1];

                        return (
                            <React.Fragment key={page}>
                                {previousPage && page - previousPage > 1 && (
                                    <li className="page-item">
                                        <span className="page-link unique-page-link unique-page-dots">
                                            ...
                                        </span>
                                    </li>
                                )}

                                <li
                                    className={`page-item ${
                                        recentApprovals.current_page === page
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    <a
                                        className="page-link unique-page-link"
                                        href={`${recentApprovals.path}?page=${page}${filters.year ? `&year=${filters.year}` : ''}`}
                                    >
                                        {page}
                                    </a>
                                </li>
                            </React.Fragment>
                        );
                    })}

                {/* Next */}
                <li className={`page-item ${!recentApprovals.next_page_url ? 'disabled' : ''}`}>
                    <a
                        className="page-link unique-page-link"
                        href={recentApprovals.next_page_url ?? '#'}
                        aria-label="Next"
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </a>
                </li>

                {/* Last */}
                <li className={`page-item ${
                    recentApprovals.current_page === recentApprovals.last_page
                        ? 'disabled'
                        : ''
                }`}>
                    <a
                        className="page-link unique-page-link"
                        href={`${recentApprovals.path}?page=${recentApprovals.last_page}${filters.year ? `&year=${filters.year}` : ''}`}
                        aria-label="Last"
                    >
                        <i className="fa-solid fa-angles-right"></i>
                    </a>
                </li>

            </ul>
        </nav>
    </div>
)}

                    {/* <div className="case-pagination">
                        <nav className="unique-pagination-wrapper" aria-label="Page navigation">
                            <ul className="pagination unique-pagination mb-0">

                                <li className="page-item">
                                    <a className="page-link unique-page-link" href="#" aria-label="First">
                                        <i className="fa-solid fa-angles-left"></i>
                                    </a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link unique-page-link" href="#" aria-label="Previous">
                                        <i className="fa-solid fa-angle-left"></i>
                                    </a>
                                </li>

                                <li className="page-item active">
                                    <a className="page-link unique-page-link" href="#">1</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link unique-page-link" href="#">2</a>
                                </li>


                                <li className="page-item">
                                    <span className="page-link unique-page-link unique-page-dots">...</span>
                                </li>

                                <li className="page-item">
                                    <a className="page-link unique-page-link" href="#">10</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link unique-page-link" href="#" aria-label="Next">
                                        <i className="fa-solid fa-angle-right"></i>
                                    </a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link unique-page-link" href="#" aria-label="Last">
                                        <i className="fa-solid fa-angles-right"></i>
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div> */}

                </div>
            </section>

            <ReviewSlider />
            <ConsultationCTA />
        </>
    );
}