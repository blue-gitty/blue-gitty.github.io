import React from 'react';
import HeroSection from '../components/Hero_container';
import Partners from '../components/partners';
import VisionSection from '../components/vision_container';
import "../App.css"
const HomePage = () => {
  return (
    <div className='home-main'>
    <HeroSection/>
    <VisionSection/>
    <Partners/>
    </div>



  );
};

export default HomePage;
