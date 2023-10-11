import React from "react";
import "./component_css/Hero_container.css"
import backwoods from "../assets/backwoods.jpg"
function HeroSection() {

   
        const linkedinURL = 'https://www.linkedin.com/company/cara-systems-inc/?viewAsMember=true'; 
      
        const handleLinkedInClick = () => {
          window.location.href = linkedinURL; 
        };

    return(
            <div className="hero-container">
                
               <h1 className="h1-message">Empowering Health through Innovation</h1>
               <p className="para-message">
               CARA Systems is dedicated to pioneering a transformative innovation in the field of medical science and engineering. Our dynamic risk assessment tool for intracranial aneurysms is guided by a well-structured three-year plan, and we are actively seeking the necessary resources, including capital, industry connections, and software expertise, to drive this innovation forward and ultimately improve patient care and outcomes.
               </p>
               <p className="waiter">We are building our website, Good things take time.</p>
                <div className="Hero-button">
                    <button onClick={handleLinkedInClick} className="intro-button">
                        Follow us
                    </button>

                </div>
            
               </div>
        
    )
}

export default HeroSection