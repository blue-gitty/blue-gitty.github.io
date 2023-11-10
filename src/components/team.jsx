import React from 'react';
import './component_css/TeamPage.css';
import {BsLinkedin} from 'react-icons/Bs';
import {HiMiniHome} from 'react-icons/hi2';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import pgpic from '../assets/profilepics/Prithvi_picture_CARA.jpeg';
import kbpic from '../assets/profilepics/Kurt_pic.png'
import iskpic from '../assets/profilepics/Iskender_pic.png';
import albertpic from '../assets/profilepics/Albert_pic.png';

const TeamPage = () => {
    return (
      <div className="team-container">
        <h1 className="team-head">Meet the Team</h1>
        <div className="team-member">
          <img src={kbpic} alt="Kurt H. Becker" />
          <div className="member-details">
            <p className='name'>Kurt H. Becker </p>
            <p className='role'>Director</p>
            <a href='https://www.linkedin.com/in/kurt-becker-7570234/'>
                <BsLinkedin />
            </a> <ns/>
            <a href='https://engineering.nyu.edu/faculty/kurt-becker'> <HiMiniHome/> </a>            
          </div>
        </div>
        <div className="team-member">
          <img src={pgpic} alt="prithvinath reddy" />
          <div className="member-details">
            <p className='name'>Prithvinath Reddy Garigapuram </p>
            <p className='role'>Co-Founder</p>
            <a href='https://www.linkedin.com/in/preddy-garigapuram/'>
                <BsLinkedin />
            </a> <ns/>
            <a href='gpreddy@carasystems.co'><MdOutlineAlternateEmail/> </a> 
          </div>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <div className="member-details">
            <p className='name'>Srushti Katore</p>
            <p className='role'>Co-Founder</p>
            <a href='https://www.linkedin.com/in/srushti-katore-87ab721aa/'>
                <BsLinkedin />
            </a> <ns/>
            <a href='srushtirk@carasystems.co'><MdOutlineAlternateEmail/> </a>
          </div>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 4" />
          <div className="member-details">
            <p className='name'>Hemanth Krishna Taduka</p>
            <p className='role'>Data Scientist</p>
            <a href='https://www.linkedin.com/in/hemanth-krishna-taduka-53bbb3168/'>
                <BsLinkedin />
            </a> <ns/>
            <a href='hemanthtaduka@carasystems.co'><MdOutlineAlternateEmail/> </a>
            
          </div>
        </div>
        <div className="team-member">
          <img src={iskpic} alt="Team Member 5" />
          <div className="member-details">
            <p className='name'>Iskender Sahin </p>
            <p className='role'> CFD Advisor</p>
            <a href='https://www.linkedin.com/in/iskender-sahin-4601b499/'> <BsLinkedin/> </a>
            <a href='https://engineering.nyu.edu/faculty/iskender-sahin'><HiMiniHome/></a>
          </div>
        </div>
        <div className="team-member">
          <img src={albertpic} alt="Team Member 6" />
          <div className="member-details">
            <p className='name'>Albert S. Favate </p>
            <p className='role'> Clinical Advisor</p>
            <a href='https://nyulangone.org/doctors/1598859589/albert-s-favate'><HiMiniHome/></a>
          </div>
        </div>
      </div>
    );
  };
  
  export default TeamPage;