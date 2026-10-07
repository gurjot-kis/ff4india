import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface FacebookImage {
    height?: number;
    width?: number;
    src: string;
}

interface FacebookMedia {
    image?: FacebookImage;
    source?: string;
}

interface FacebookSubAttachment {
    description?: string;
    media?: FacebookMedia;
    type?: string;
    url?: string;
}

interface FacebookAttachment {
    media_type?: string;   // video | photo | link | album
    type?: string;         // video_inline | share | photo | album
    url?: string;
    media?: FacebookMedia;
    subattachments?: { data: FacebookSubAttachment[] };
}

interface FacebookVideo {
    id: string;
    message?: string;
    created_time: string;
    full_picture?: string;
    permalink_url?: string;
    attachments?: { data: FacebookAttachment[] };
}

interface FacebookSliderProps {
    facebookVideos?: {
        success: boolean;
        count: number;
        data: FacebookVideo[];
    };
    /** Number of posts to display (default: 10) */
    limit?: number;
}

export default function FacebookSlider({ facebookVideos, limit = 10 }: FacebookSliderProps) {
    // Only take the first `limit` posts (1, 2, 3, 4, 5, etc.)
    const videos = (facebookVideos?.data ?? []).slice(0, limit);

    if (!videos.length) {
        return null; // Or return a custom empty state / skeleton loader
    }


    return (
        <section className="insta-sec common-padding">
            <div className="container">
                {/* Header */}
                <div className="insta-header">
                    <div className="insta-badge">
                        <img
                            src="/storage/images/insta-logo.svg"
                            alt="Instagram Logo"
                            width="20"
                            height="20"
                            loading="lazy"
                        />
                        <span>FACEBOOK VIDEOS</span>
                    </div>

                    <div className="insta-heading common-heading">
                        <h2>
                            Stay Informed With Our <br />
                            Latest{' '}
                            <span className="highlight">Immigration Updates</span>
                        </h2>
                    </div>

                    <div className="insta-underline"></div>

                    <p className="insta-subtext">
                        Watch short videos, tips, and success stories straight from our Facebook.
                    </p>
                </div>

                {/* Slider */}
                <div className="insta-slider-row">
                    <button
                        type="button"
                        aria-label="Previous video"
                        className="insta-arrow insta-prev"
                    >
                        <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        className="insta-swiper"
                        initialSlide={0}
                        centeredSlides={false}
                        slidesPerView={1}
                        spaceBetween={14}
                        loop={false}
                        rewind={true}
                        watchOverflow={true}
                        observer={true}
                        observeParents={true}
                        navigation={{
                            nextEl: '.insta-next',
                            prevEl: '.insta-prev',
                        }}
                        pagination={{
                            el: '.insta-pagination',
                            clickable: true,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 14 },
                            576: { slidesPerView: 2, spaceBetween: 16 },
                            992: { slidesPerView: 3, spaceBetween: 20 },
                            1200: { slidesPerView: 4, spaceBetween: 25 },
                        }}
                    >
                        {videos.map((video) => (
                            <SwiperSlide key={video.id}>
                                <a
                                    href={video.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="insta-card"
                                    aria-label={video.message || 'Watch video on Instagram'}
                                >
                                    <img
                                        src={video.full_picture || video.full_picture}
                                        alt={video.message || 'Facebook video thumbnail'}
                                        loading="lazy"
                                    />
                                    <div className="insta-play">
                                        <i className="fa-solid fa-play" aria-hidden="true"></i>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        type="button"
                        aria-label="Next video"
                        className="insta-arrow insta-next"
                    >
                        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>

                {/* Pagination */}
                <div className="insta-pagination"></div>

                {/* Follow Bar */}
                <div className="insta-follow-bar">
                    <div className="insta-follow-icon">
                        <img
                            src="/storage/images/insta-logo.svg"
                            alt="Facebook Logo"
                            width="20"
                            height="20"
                            loading="lazy"
                        />
                    </div>

                    <div className="insta-follow-text">
                        Follow us on <b>Facebook</b> for more immigration insights!
                    </div>

                    <a
                        href="https://www.facebook.com/f4indiaconsultants/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="insta-follow-btn common-btn"
                    >
                        <span>Follow Us</span>
                        <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}