import config from "@/config";
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';

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

export default function about({ page }: Props) {
    return (
        <>
            <section className="common-hero-sec text-center visa-bulletin-hero">
                <div className="container position-relative z-2">
                    <div className="hero-content">
                        <h1 className="hero-title hero-common-title">{page.title}</h1>
                        <p className="hero-des hero-common-des m-auto">
                            {page.excerpt && (
                            <p className="hero-des hero-common-des m-auto">
                                {page.excerpt}
                            </p>
                        )}
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
                        <span className="breadcrumb__current">{page.title}</span>
                    </div>
                </div>
            </nav>

            <section className="immigration-about common-padding">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div
                                className="aboutpage-content"
                                dangerouslySetInnerHTML={{
                                    __html: page.overview_content ?? "",
                                }}
                            />
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image-wrapper">

                                <img src={`${config.storageUrl}${page.image ?? ""}`} alt="U.S. Immigration Passport" className="img-fluid about-image" />

                                <div className="experience-badge">
                                    <strong>{ page.experience_years ?? "" }</strong>
                                    <span>Years of Experience</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div
                                className="aboutpage-content"
                                dangerouslySetInnerHTML={{
                                    __html: page.main_content ?? "",
                                }}
                            />
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