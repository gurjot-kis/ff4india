import config from "@/config";
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';

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

interface BlogProps {
    blogs: Pagination<Blog> | null;
}


export default function Blog({ blogs,}: BlogProps) {

    console.log(blogs);
    
    return (
        <>
            <section className="common-hero-sec text-center blogs-hero-sec">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">Our Latest Immigration Success Stories</h1>
                        <p className="hero-des hero-common-des m-auto ">
                            Explore inspiring client success stories, recent case approvals, and real immigration journeys that reflect
                            our commitment to achieving successful outcomes.
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
                    <div className="row g-4">

                        <div className="col-12 col-md-6 col-lg-4">
                            <article className="blog-card">
                                <a className="blog-card-image-wrap" href={`${config.appUrl}/blog`}>
                                    <img className="blog-card-image" src={`${config.storageUrl}/images/blog-1.png`}
                                        alt="Reinstatement of revoked family-based petition" />
                                </a>
                                <a className="blog-card-body" href={`${config.appUrl}/blog`}>
                                    <div className="blog-card-date">
                                        <i className="fa-regular fa-calendar me-1 me-1"></i>
                                        <span>July 15, 2026</span>
                                    </div>
                                    <h3 className="blog-card-title">Reinstatement of revoked family-based Petition to the approval of Immigrant
                                        Visa
                                    </h3>
                                    <p className="blog-card-excerpt">Today's success story revolves around the reinstatement of a revoked
                                        family-based petition, leading to the approval of an immigrant visa</p>
                                    <div className="blog-card-footer">
                                        <button type="submit" className="contact-butn common-btn blog-btn">
                                            <span>Read More</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </a>
                            </article>
                        </div>




                    </div>
                    <div className="case-pagination">
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
                    </div>

                </div>
            </div>


            <ConsultationCTA />

        </>
    )
}