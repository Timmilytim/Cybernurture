import React,{useEffect} from 'react';
import { Navbar } from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bannerbackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
},[]);
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={Bannerbackground} alt=""/>
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading' data-aos="zoom-in">Welcome to Cybernurture Innovation Hub</h1>
            <p className='primary-text' data-aos="fade-right">
            Development Of Educational Technology And Youth Empowerment.
            </p>
            <a href='https://x.com/cybernurture?t=TZT-zgQzKJq0IRMlSWesPw&s=09'><button className='secondary-button' data-aos="flip-right"> Connect with us <FiArrowRight/>{" "}
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