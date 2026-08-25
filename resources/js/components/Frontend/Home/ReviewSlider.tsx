import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
    {
        name: 'Rajan Patel',
        avatar: 'R',
        text: 'Exceptional service! They handled my family petition with great care and professionalism. My I-130 was approved faster than expected. Highly recommend their services to anyone navigating the immigration process.',
    },
    {
        name: 'Simran Kaur',
        avatar: 'S',
        text: 'Our F3 case had been stuck for years. The team explained every step clearly and kept us updated at every stage of the NVC and consular process. Truly grateful for their guidance.',
    },
    {
        name: 'Harpreet Singh',
        image: '/storage/images/review-img.png',
        text: 'Professional, transparent, and fast. They cleared up our public charge and domicile concerns before the interview so we walked in fully prepared. Visa approved on the spot.',
    },
    {
        name: 'Amandeep Kaur',
        avatar: 'A',
        text: 'From DS-260 filing to the final interview, every detail was handled with precision. No mistakes, no delays, no 221(g). Best immigration consultancy we could have asked for.',
    },
    {
        name: 'Gurpreet Sidhu',
        avatar: 'G',
        text: "Honestly one of the most organized firms I've dealt with. They kept us informed at every checkpoint of our immigrant visa journey and made a stressful process feel manageable.",
    },
];

export default function ReviewSlider() {
    return (
        <section className="reviews-sec common-padding">
            <div className="container">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    className="swiper review-swiper"
                    slidesPerView={1}
                    spaceBetween={24}
                    loop
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
                        <SwiperSlide key={review.name}>
                            <div className="review-card">
                                <div className="review-top">
                                    <div className="review-avatar">
                                        {review.image ? (
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="review-avatar-img"
                                            />
                                        ) : (
                                            <span className="review-avatar-text">
                                                {review.avatar}
                                            </span>
                                        )}
                                    </div>

                                    <div className="review-meta">
                                        <div className="review-name">{review.name}</div>

                                        <div className="review-stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <i
                                                    key={star}
                                                    className="fa-solid fa-star"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="review-text">{review.text}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="review-pagination text-center" />

                <div className="text-center">
                    <a href="#" className="reviews-btn common-btn">
                        <span>View More</span>
                        <i className="fa-solid fa-arrow-right" />
                    </a>
                </div>

                <div className="review-tagline-wrap">
                    <p className="review-tagline">
                        A Trusted Immigration Expert Can Be the Key to a Successful Outcome
                    </p>
                </div>
            </div>
        </section>
    );
}
