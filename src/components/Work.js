import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Connectivity from '../Assets/Connectivity.png';
import Collaboration from '../Assets/collaboration.png';
import Idea from '../Assets/idea.png';
import Innovation from '../Assets/Innovation.png';
import Empowerment from '../Assets/Empowerment.png';
import Motivation from '../Assets/Motivation.png';


const Work = () => {
    const workInfoDate =[
        {
            image: Connectivity, 
            title: "Connectivity",
            text:"We foster connections among learners by giving the opportunity to connect.",
        },
        {
            image: Collaboration, 
            title: "Collaboration",
            text: "We believe that working together enhances the learning experience.",
        },
        {
            image: Idea, 
            title: "Learning",
            text: "We offer a wide range of interactive learning materials, videos, quizzes, simulations, and interactive lessons.",
        },
        {
            image: Empowerment, 
            title: "Empowerment",
            text: "We give the freedom to explore, set your learning goals, and track your progress, empowered learners are motivated learners.",
        },
        {
            image: Innovation, 
            title: "Innovating",
            text:"We strive to stay at the forefront of educational technology trends and incorporate the latest innovations in the community. ",
        },
        {
            image: Motivation, 
            title: "Motivation",
            text: "We know the importance of motivation in the learning process,provide personalized feedback and encouragement to keep you motivated to reach your goals.",
        },
        
    ];

        useEffect(() => {
            AOS.init({duration: 1000})
        },[]);

  return (
    <div className='work-section-wrapper' id="purpose">
        <div className='work-section-top'>
            {/* <p className='primary-subheading'>Purpose</p> */}
            <p className='primary-heading' data-aos="flip-left">Our Mission</p>
            <p className='primary-text' data-aos="fade-right">Our mission is to provide a safe online learning environment for Africans, helping them develop essential digital skills and become responsible digital citizens. 
            </p>
            <p className='primary-text' data-aos="fade-left">Also empowering Africans to excel in the digital age and make a positive impact on the global digital landscape.. 
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoDate.map((data) =>(
                    <div className='work-section-info'data-aos="flip-right">
                    <div className='info-boxes-img-container' data-aos="zoom-in">
                        <img src={data.image} alt=' ' />
                    </div>
                        <h2>{data.title}</h2>
                        <p className='work-section-text' data-aos="zoom-in">{data.text}</p>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Work;