import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface InstagramVideo {
    id: string;
    caption?: string;
    media_type: string;
    media_product_type: string;
    media_url: string;
    thumbnail_url?: string;
    permalink: string;
    timestamp: string;
    username: string;
}

interface InstagramSliderProps {
    instagramVideos: {
        success: boolean;
        count: number;
        data: InstagramVideo[];
    };
}

export default function InstagramSlider({
    instagramVideos,
}: InstagramSliderProps) {

    const videos = instagramVideos?.data ?? [];

    return (
        <section className="insta-sec common-padding">
            <div className="container">

                {/* Header */}
                <div className="insta-header">

                    <div className="insta-badge">
                        <img
                            src="/storage/images/insta-logo.svg"
                            alt="Insta Logo"
                            width="20"
                            height="20"
                        />

                        <span>INSTAGRAM VIDEOS</span>
                    </div>

                    <div className="insta-heading common-heading">
                        <h2>
                            Stay Informed With Our <br />
                            Latest{' '}
                            <span className="highlight">
                                Immigration Updates
                            </span>
                        </h2>
                    </div>

                    <div className="insta-underline"></div>

                    <p className="insta-subtext">
                        Watch short videos, tips and success stories
                        straight from our Instagram.
                    </p>

                </div>


                {/* Slider */}
                <div className="insta-slider-row">

                    {/* Previous */}
                    <div className="insta-arrow insta-prev">
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>


                    <div className="swiper insta-swiper">

                        <Swiper
                            modules={[Navigation, Pagination]}
                            className='swiper insta-swiper swiper-initialized swiper-horizontal swiper-backface-hidden'
                            slidesPerView={4}
                            spaceBetween={24}
                            loop={videos.length > 10}
                            navigation={{
                                nextEl: '.insta-next',
                                prevEl: '.insta-prev',
                            }}
                            pagination={{
                                el: '.insta-pagination',
                                clickable: true,
                            }}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                },
                            }}
                        >

                            {videos.map((video) => (

                                <SwiperSlide key={video.id}>

                                    <a
                                        href={video.permalink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="insta-card"
                                    >

                                        <img
                                            src={
                                                video.thumbnail_url ||
                                                video.media_url
                                            }
                                            alt={
                                                video.caption ||
                                                'Instagram video'
                                            }
                                        />

                                        <div className="insta-play">
                                            <i className="fa-solid fa-play"></i>
                                        </div>

                                    </a>

                                </SwiperSlide>

                            ))}

                        </Swiper>

                    </div>


                    {/* Next */}
                    <div className="insta-arrow insta-next">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>

                </div>


                {/* Pagination */}
                <div className="insta-pagination"></div>


                {/* Follow Instagram */}
                <div className="insta-follow-bar">

                    <div className="insta-follow-icon">
                        <img
                            src="/storage/images/insta-logo.svg"
                            alt="Insta Logo"
                            width="20"
                            height="20"
                        />
                    </div>

                    <div className="insta-follow-text">
                        Follow us on <b>Instagram</b> for more immigration
                        insights!
                    </div>

                    <a
                        href="https://www.instagram.com/f4india/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="insta-follow-btn common-btn"
                    >
                        <span>Follow Us</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

            </div>
        </section>
    );
}