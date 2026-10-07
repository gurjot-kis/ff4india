import config from "@/config";
import ConsultationCTA from "@/components/Frontend/Home/ConsultationCTA";

interface PageData {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    meta_title: string | null;
    meta_description: string | null;
}

interface Props {
    page: PageData;
}

export default function Page({ page }: Props) {
    return (
        <>
            {/* HERO SECTION */}
            <section className="common-hero-sec text-center visa-bulletin-hero">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">
                            {page.title}
                        </h1>

                        {page.excerpt && (
                            <p className="hero-des hero-common-des m-auto">
                                {page.excerpt}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* BREADCRUMB */}
            <nav className="breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <div className="breadcrumb__inner">
                        <a
                            href={`${config.appUrl}`}
                            className="breadcrumb__item"
                        >
                            <span className="breadcrumb__label text-nowrap">
                                F4india
                            </span>

                            <i className="fa-solid fa-chevron-right"></i>
                        </a>

                        <span className="breadcrumb__current">
                            {page.title}
                        </span>
                    </div>
                </div>
            </nav>

            {/* PAGE CONTENT */}
            <section className="immigration-about common-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="aboutpage-content"
                                dangerouslySetInnerHTML={{
                                    __html: page.content ?? "",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CONSULTATION CTA */}
            <div className="bg-light-grey">
                <ConsultationCTA />
            </div>
        </>
    );
}