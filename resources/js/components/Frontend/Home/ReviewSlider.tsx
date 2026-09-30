import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface GoogleReview {
    id: number;
    author_name: string;
    author_url?: string | null;
    profile_photo_url?: string | null;
    rating: number;
    review_text: string;
    relative_time_description?: string | null;
    review_time: number;
}

interface ReviewSliderProps {
    reviews: GoogleReview[];
}

export default function ReviewSlider({
    reviews,
}: ReviewSliderProps) {
    if (!reviews || reviews.length === 0) {
        return null;
    }

    return (
        <section className="reviews-sec common-padding">
            <div className="container">

                <Swiper
                    modules={[
                        Autoplay,
                        Navigation,
                        Pagination,
                    ]}
                    className="swiper review-swiper"
                    slidesPerView={1}
                    spaceBetween={24}
                    loop={reviews.length > 3}
                    grabCursor
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.review-pagination',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.review-next',
                        prevEl: '.review-prev',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="review-card">

                                <div className="review-top">

                                    <div className="review-avatar">

                                        {review.profile_photo_url ? (
                                            <img
                                                src={review.profile_photo_url}
                                                alt={review.author_name}
                                                className="review-avatar-img"
                                            />
                                        ) : (
                                            <span className="review-avatar-text">
                                                {review.author_name
                                                    .charAt(0)
                                                    .toUpperCase()}
                                            </span>
                                        )}

                                    </div>

                                    <div className="review-meta">

                                        <div className="review-name">
                                            {review.author_name}
                                        </div>

                                        <div className="review-stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <i
                                                    key={star}
                                                    className={
                                                        star <= review.rating
                                                            ? 'fa-solid fa-star'
                                                            : 'fa-regular fa-star'
                                                    }
                                                />
                                            ))}
                                        </div>

                                    </div>

                                </div>

                                <div className="review-text">
                                    {review.review_text}
                                </div>

                                {review.relative_time_description && (
                                    <div className="review-date">
                                        {review.relative_time_description}
                                    </div>
                                )}

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="review-pagination text-center" />

                <div className="text-center">
                    <a
                        href="https://www.google.com/maps/place/?q=place_id:ChIJoWZf3g_vDzkRkfEefzV0h6w"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reviews-btn common-btn"
                    >
                        <span>View More Reviews</span>
                        <i className="fa-solid fa-arrow-right" />
                    </a>
                </div>

                <div className="review-tagline-wrap">
                    <p className="review-tagline">
                        A Trusted Immigration Expert Can Be the Key to a
                        Successful Outcome
                    </p>
                </div>

            </div>
        </section>
    );
}