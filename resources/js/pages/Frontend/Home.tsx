// import React from 'react';
// import { Head, Link } from '@inertiajs/react';
import FrontendLayout from '@/layouts/FrontendLayout';

import HeroSection from '@/components/Frontend/Home/HeroSection';
import ServicesSection from '@/components/Frontend/Home/ServicesSection';
import VideoSlider from '@/components/Frontend/Home/VideoSlider';
import AboutSection from '@/components/Frontend/Home/AboutSection';
import RecentApprovals from '@/components/Frontend/Home/RecentApprovals';
import ReviewSlider from '@/components/Frontend/Home/ReviewSlider';
import InstagramSlider from '@/components/Frontend/Home/InstagramSlider';
import FacebookSlider from '@/components/Frontend/Home/FacebookSlider';
import ConsultationCTA from '@/components/Frontend/Home/ConsultationCTA';

// interface Video {
//     id: number;
//     video_id: string;
//     video_url: string;
//     thumbnail: string;
//     title: string;
//     description: string;
// }

// interface VideoPaginator {
//     current_page: number;
//     data: Video[];
//     first_page_url: string;
//     from: number;
//     last_page: number;
//     next_page_url: string | null;
//     per_page: number;
//     prev_page_url: string | null;
//     to: number;
//     total: number;  
// }

interface HomeProps {
    videos: any;
    recentApprovals: any;
    instagramVideos: any;
    facebookVideos: any;
    familyimage: any;
    homeEdit: any;
    latestReview: any;
}

export default function Home({ videos = [], recentApprovals, instagramVideos, facebookVideos, familyimage, homeEdit, latestReview }: HomeProps) {

    
    return (
        <>

            <HeroSection />
            <ServicesSection />
            <VideoSlider videos={videos.data} />
            
            <AboutSection
                familyimage={familyimage}
                HomeEdit={homeEdit}
            />


            <RecentApprovals recentApprovals={recentApprovals} />
 
            <ReviewSlider reviews={latestReview} />
            <InstagramSlider instagramVideos={instagramVideos} />
            <FacebookSlider facebookVideos={facebookVideos} />
            <ConsultationCTA />
 
        
        </>
    );
}