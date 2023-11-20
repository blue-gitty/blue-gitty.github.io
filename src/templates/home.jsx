import React from 'react';
import HeroSection from '../components/Hero_container';
import Partners from '../components/partners';
import VisionSection from '../components/vision_container';
import TeamPage from '../components/team';
import "../App.css"
const HomePage = () => {
  return (
    <div className='home-main'>
    <HeroSection/>
    <VisionSection/>
    <TeamPage/>
    {/* <Partners/> */}
    </div>



  );
};

export default HomePage;
