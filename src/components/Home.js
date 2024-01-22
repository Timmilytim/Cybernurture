import React from 'react';
import { Navbar } from './Navbar';
import Bannerbackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={Bannerbackground} alt=""/>
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>Welcome to Cybernurture Innovation Hub</h1>
            <p className='primary-text'>
            Development Of Educational Technology And Youth Empowerment.
            </p>
            <a href='https://x.com/cybernurture?t=TZT-zgQzKJq0IRMlSWesPw&s=09'><button className='secondary-button'> Connect with us <FiArrowRight/>{" "}
            </button></a>
          </div>
          <div className='home-image-section'>
          <img src={BannerImage} alt=""/>
          </div>
        </div>
    </div>

  )
}

export default Home