import React from 'react';
import Header from '@/components/Frontend/Header';
import Footer from '@/components/Frontend/Footer';

interface Props {
    children: React.ReactNode;
}

export default function FrontendLayout({ children }: Props) {

    return (
        <div className="frontend-wrapper">

            <Header />

            <main className="frontend-content">

                {children}

            </main>

            <Footer />

        </div>
    );
}