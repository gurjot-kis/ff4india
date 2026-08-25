import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface Video {
    id: number;
    video_id: string;
    video_url: string;
    thumbnail: string;
    title: string;
    description: string;
}

interface VideoSliderProps {
    videos: Video[];
}

export default function VideoSlider({ videos }: VideoSliderProps) {
    //console.log('SLIDER VIDEOS:', videos);

    return (

        <section className="videos-sec common-padding">
            <div className="container">
                <div className="videos-sec-header">
                    <div className="common-heading mb-0">
                    <h2> Client Success Stories & Immigration Insights</h2>
                    
                    </div>
                    <a href="https://www.youtube.com/@f4indiaimmigrationlawfirm" className="view-all-btn d-none d-lg-inline-block"
                    target="_blank">
                    <span>View All</span>
                    <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

         
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={3}
                    spaceBetween={24}
                    className='swiper video-swiper swiper-initialized swiper-horizontal swiper-backface-hidden'
                    loop={videos.length > 3}
                >
                    {videos.map((video) => (
                        <SwiperSlide key={video.id}>
                            <a
                                href={video.video_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="video-card"
                            >
                                <div className="video-thumbnail">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="thumbnail-img"
                                    />

                                    <div className="play-btn">
                                        <img
                                            src="/storage/images/youtube-play.svg"
                                            alt="Play Button"
                                        />
                                    </div>

                                    <span className="yt-watch-btn">
                                        <img
                                            src="/storage/images/youtube-play.svg"
                                            alt="Play Button"
                                        />
                                        Watch on YouTube
                                    </span>
                                </div>

                                <div className="video-content">
                                    <h3 className="video-title">
                                        {video.title}
                                    </h3>

                                    <p className="video-desc">
                                        {video.description}
                                    </p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                

            </div>
        </section>
    );
}

// interface Video {
//     id: number;
//     video_id: string;
//     video_url: string;
//     thumbnail: string;
//     title: string;
//     description: string;
// }

// interface VideoSliderProps {
//     videos: Video[];
// }

// const videos: Video[] = [
//     {
//         id: 1,
//         url: 'https://www.youtube.com/watch?v=XWT9C9s5X1Q&t=28s',
//         image: '/storage/images/v1.png',
//         title:
//             'Client Testimonial | A Real Client Story | Organized, Transparent & Efficient Visa Processing',
//         description:
//             'One of our recent clients shared something that truly meant a lot to us.',
//     },
//     {
//         id: 2,
//         url: 'https://www.youtube.com/watch?v=judRYTPT7GI&t=36s',
//         image: '/storage/images/v2.png',
//         title:
//             'F4 India Immigration Did the Magic | Delivered as Promised | Most Trusted Immigration Firm in India.',
//         description:
//             'Smooth & Magical US Immigrant Visa Journey | Real Family Success',
//     },
//     {
//         id: 3,
//         url: 'https://www.youtube.com/watch?v=TZJli5GnJdM&t=104s',
//         image: '/storage/images/v3.png',
//         title:
//             'DS-260 Mistakes Causing Visa Delay, Refusal or 221(g) | Public Charge & U.S. Domicile',
//         description:
//             'The DS-260 form is not just a form — it becomes your permanent record with the U.S. government.',
//     },
//     {
//         id: 4,
//         url: 'https://www.youtube.com/watch?v=F08FEM9j29E&t=26s',
//         image: '/storage/images/v4.png',
//         title:
//             'Immigrant Visa Success | Visa Officer Was Happy | Public Charge & Domicile Cleared',
//         description:
//             'In this video, our client from Ludhiana (Family-Based Category F3, Priority Date: 21 April 2011) shares their real experience and some very important facts about their immigrant visa journey.',
//     },
//     {
//         id: 5,
//         url: 'https://www.youtube.com/watch?v=3jhXgePvZOM&t=36s',
//         image: '/storage/images/v5.png',
//         title:
//             'Strict Visa Interviews: Public Charge & Domicile Issues? Right Guidance Can Prevent Visa Refusals.',
//         description:
//             'In this video, our F3 category client shares his real Immigrant Visa interview experience and how strict the process has become. With officers now focusing heavily on Public Charge and U.S. Domicile, many cases are facing refusals. Watch how the right guidance helped him avoid these issues and get his visa approved successfully.',
//     },
//     {
//         id: 6,
//         url: 'https://www.youtube.com/watch?v=brzHj18nMRU&t=316s',
//         image: '/storage/images/v6.png',
//         title:
//             'IMPORTANT UPDATE FOR U.S. NON IMIGRANT VISAS & IMMIGRANT VISAS',
//         description:
//             'U.S. Visa Rules Overhauled: Entry Restrictions, Home-Country Applications, Stricter Immigrant Visa Reviews, and Interview Waiver Suspensions',
//     },
// ];

//export default function VideoSlider() {

// export default function VideoSlider({ videos = [], }: VideoSliderProps) {    
//     return (
//         <>
//         <section className="videos-sec common-padding">
//             <div className="container">

//                 {/* Section Header */}
//                 <div className="videos-sec-header">
//                     <div className="common-heading mb-0">
//                         <h2>
//                             Client Success Stories & Immigration Insights
//                         </h2>
//                     </div>

//                     <a
//                         href="https://www.youtube.com/@f4indiaimmigrationlawfirm"
//                         className="view-all-btn d-none d-lg-inline-block"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <span>View All</span>
//                         <i className="fa-solid fa-arrow-right" />
//                     </a>
//                 </div>

//                 {/* Video Slider */}
//                 <div className="swiper video-swiper">
//                     <Swiper
//                         modules={[Navigation, Pagination]}
//                         slidesPerView={1}
//                         spaceBetween={24}
//                         loop={videos.length > 3}
//                         navigation={{
//                             nextEl: '.video-next',
//                             prevEl: '.video-prev',
//                         }}
//                         pagination={{
//                             el: '.video-pagination',
//                             clickable: true,
//                         }}
//                         breakpoints={{
//                             768: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 24,
//                             },
//                             992: {
//                                 slidesPerView: 3,
//                                 spaceBetween: 24,
//                             },
//                         }}
//                     >
//                         {videos.map((video) => (
//                             <SwiperSlide key={video.id}>
//                                 <a
//                                     href={video.video_url}
//                                     className="video-card"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     <div className="video-thumbnail">
//                                         <img
//                                             src={video.thumbnail}
//                                             alt={video.title}
//                                             className="thumbnail-img"
//                                         />

//                                         <div className="play-btn">
//                                             <img
//                                                 src="/storage/images/youtube-play.svg"
//                                                 alt="Play Button"
//                                             />
//                                         </div>

//                                         <span className="yt-watch-btn">
//                                             <img
//                                                 src="/storage/images/youtube-play.svg"
//                                                 alt="Play Button"
//                                             />
//                                             Watch on YouTube
//                                         </span>
//                                     </div>

//                                     <div className="video-content">
//                                         <h3 className="video-title">
//                                             {video.title}
//                                         </h3>

//                                         <p className="video-desc">
//                                             {video.description}
//                                         </p>
//                                     </div>
//                                 </a>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     <div className="video-next" />
//                     <div className="video-prev" />

//                     <div className="video-pagination text-center" />
//                 </div>

//                 {/* Mobile View All */}
//                 <div className="text-center">
//                     <a
//                         href="https://www.youtube.com/@f4indiaimmigrationlawfirm"
//                         className="m-view-all common-btn d-inline-block d-lg-none"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <span>View All</span>
//                         <i className="fa-solid fa-arrow-right" />
//                     </a>
//                 </div>

//             </div>
//         </section>

        {/* <section className="videos-sec common-padding">
            <div className="container">

                 <div className="videos-sec-header">
                    <div className="common-heading mb-0">
                        <h2>
                            Client Success Stories & Immigration Insights
                        </h2>
                    </div>

                    <a
                        href="https://www.youtube.com/@f4indiaimmigrationlawfirm"
                        className="view-all-btn d-none d-lg-inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>View All</span>
                        <i className="fa-solid fa-arrow-right" />
                    </a>
                </div>

                 <div className="swiper video-swiper">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={true}
                        navigation={{
                            nextEl: '.video-next',
                            prevEl: '.video-prev',
                        }}
                        pagination={{
                            el: '.video-pagination',
                            clickable: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
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
                                    href={video.url}
                                    className="video-card"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="video-thumbnail">
                                        <img
                                            src={video.image}
                                            alt={video.title}
                                            className="thumbnail-img"
                                        />

                                        <div className="play-btn">
                                            <img
                                                src="/storage/images/youtube-play.svg"
                                                alt="Play Button"
                                            />
                                        </div>

                                        <span className="yt-watch-btn">
                                            <img
                                                src="/storage/images/youtube-play.svg"
                                                alt="Play Button"
                                            />
                                            Watch on YouTube
                                        </span>
                                    </div>

                                    <div className="video-content">
                                        <h3 className="video-title">
                                            {video.title}
                                        </h3>

                                        <p className="video-desc">
                                            {video.description}
                                        </p>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                     <div className="video-next" />
                    <div className="video-prev" />

                     <div className="video-pagination text-center" />
                </div>

                 <div className="text-center">
                    <a
                        href="https://www.youtube.com/@f4indiaimmigrationlawfirm"
                        className="m-view-all common-btn d-inline-block d-lg-none"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>View All</span>
                        <i className="fa-solid fa-arrow-right" />
                    </a>
                </div>

            </div>
        </section> */}

//         </>
//     );
// }