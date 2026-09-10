import config from "@/config";
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';
import React from 'react';

interface Blog {
    category_id: string;
    title: string;
    slug: string;
    featured_image: string;
    description: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    status: number;
    publish_date: string;
    created_at: string;
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

interface BlogProps {
    blogs: Pagination<Blog> | null;
    filters: Filters;
}


export default function Blog({ blogs, filters, }: BlogProps) {

    console.log(blogs);

    return (
        <>
            <section className="common-hero-sec text-center blogs-hero-sec">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">U.S. Immigration Insights & Updates</h1>
                        <p className="hero-des hero-common-des m-auto ">
                            Explore inspiring client success stories, recent case approvals, and real immigration journeys that reflect our commitment to achieving successful outcomes.
                        </p>
                        <div className="blog-search-container">
                            <div className="blog-search-input-wrap">
                                <i className="fa-solid fa-magnifying-glass blog-search-icon d-sm-inline-block d-none"></i>
                                <input type="text" className="blog-search-input" placeholder="Search blogs by title, keyword or topic..." />
                            </div>
                            <button type="button" className="blog-search-btn"><i
                                className="fa-solid fa-magnifying-glass blog-search-icon d-sm-none text-white"></i><span
                                    className="d-sm-inline-block d-none">Search</span></button>
                        </div>
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
                        <span className="breadcrumb__current">Immigration Blogs</span>
                    </div>
                </div>
            </nav>

            <div className="blogs-list common-padding">
                <div className="container">
                    <div className="row g-4 justify-content-center">

                        {blogs?.data?.length > 0 ? (

                            blogs && blogs.data.map((item) => (

                                <div className="col-12 col-md-6 col-lg-4">
                                    <article className="blog-card">
                                        <a className="blog-card-image-wrap" href={`${config.appUrl}/blog/${item.slug}`}>
                                            <img className="blog-card-image" src={`${config.storageUrl}/${item.featured_image}`}
                                                alt="Reinstatement of revoked family-based petition" />
                                        </a>
                                        <a className="blog-card-body" href={`${config.appUrl}/blog/${item.slug}`}>
                                            <div className="blog-card-date">
                                                <i className="fa-regular fa-calendar me-1 me-1"></i>
                                                <span>
                                                    {new Date(item.created_at).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric',
                                                    })}
                                                </span>
                                            </div>
                                            <h3 className="blog-card-title">{item.title}</h3>
                                            <div
                                                className="blog-card-excerpt"
                                                dangerouslySetInnerHTML={{
                                                    __html: item.description,
                                                }}
                                            />
                                            <div className="blog-card-footer">
                                                <button type="submit" className="contact-butn common-btn blog-btn">
                                                    <span>Read More</span>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </button>
                                            </div>
                                        </a>
                                    </article>
                                </div>

                            ))
                        ) : (
                            <div className="col-12">
                                <div className="text-center py-5">
                                    <h3>No blog found</h3>
                                    <p>
                                        No immigration case approvals were found for the selected year.
                                    </p>
                                </div>
                            </div>

                        )}






                    </div>


                    {blogs && blogs.last_page > 1 && (
                        <div className="case-pagination">
                            <nav className="unique-pagination-wrapper" aria-label="Page navigation">
                                <ul className="pagination unique-pagination mb-0">

                                    {/* First */}
                                    <li className={`page-item ${blogs.current_page === 1 ? 'disabled' : ''}`}>
                                        <a
                                            className="page-link unique-page-link"
                                            href={`${blogs.path}?page=1${filters.year ? `&year=${filters.year}` : ''}`}
                                            aria-label="First"
                                        >
                                            <i className="fa-solid fa-angles-left"></i>
                                        </a>
                                    </li>

                                    {/* Previous */}
                                    <li className={`page-item ${!blogs.prev_page_url ? 'disabled' : ''}`}>
                                        <a
                                            className="page-link unique-page-link"
                                            href={blogs.prev_page_url ?? '#'}
                                            aria-label="Previous"
                                        >
                                            <i className="fa-solid fa-angle-left"></i>
                                        </a>
                                    </li>

                                    {/* Page numbers */}
                                    {Array.from(
                                        { length: blogs.last_page },
                                        (_, index) => index + 1
                                    )
                                        .filter((page) => {
                                            const current = blogs.current_page;
                                            const last = blogs.last_page;

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
                                                        className={`page-item ${blogs.current_page === page
                                                            ? 'active'
                                                            : ''
                                                            }`}
                                                    >
                                                        <a
                                                            className="page-link unique-page-link"
                                                            href={`${blogs.path}?page=${page}${filters.year ? `&year=${filters.year}` : ''}`}
                                                        >
                                                            {page}
                                                        </a>
                                                    </li>
                                                </React.Fragment>
                                            );
                                        })}

                                    {/* Next */}
                                    <li className={`page-item ${!blogs.next_page_url ? 'disabled' : ''}`}>
                                        <a
                                            className="page-link unique-page-link"
                                            href={blogs.next_page_url ?? '#'}
                                            aria-label="Next"
                                        >
                                            <i className="fa-solid fa-angle-right"></i>
                                        </a>
                                    </li>

                                    {/* Last */}
                                    <li className={`page-item ${blogs.current_page === blogs.last_page
                                        ? 'disabled'
                                        : ''
                                        }`}>
                                        <a
                                            className="page-link unique-page-link"
                                            href={`${blogs.path}?page=${blogs.last_page}${filters.year ? `&year=${filters.year}` : ''}`}
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
            </div>

            <section class="bg-light-grey">
                <ConsultationCTA />
            </section>

        </>
    )
}