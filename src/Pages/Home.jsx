import React from 'react';
import ServicesSection from '../Components/ServiceSection.jsx';
import VetInfo from '../Components/VetInfo.jsx';
import DailyTips from '../Components/DailyTips.jsx';
import Carousel from '../Components/Carousel.jsx';
import Donation from '../Components/Donation.jsx';
const Home = () => {
    return (
        <div>
            <section className='m-6' data-aos="fade-up">
                <Carousel></Carousel>
            </section>
            <div data-aos="fade-up" data-aos-delay="200">
                <ServicesSection></ServicesSection>
            </div>
            <div data-aos="slide-up" data-aos-delay="400">
                <DailyTips></DailyTips>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
                <VetInfo></VetInfo>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
                <Donation></Donation>
            </div>
        </div>
    );
};

export default Home;