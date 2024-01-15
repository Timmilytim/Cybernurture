import React from 'react';
import Connectivity from '../Assets/Connectivity.png';
import Invest from '../Assets/Invest.png';
import Idea from '../Assets/idea.png';


const Work = () => {
    const workInfoDate =[
        {
            image: Connectivity, 
            title: "Connectivity",
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam sint sunt edolore",
        },
        {
            image: Invest, 
            title: "Investment",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam sint sunt edolore",
        },
        {
            image: Idea, 
            title: "Ideas",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam sint sunt error, voluptas earum ",
        },
        {
            image: Idea, 
            title: "Lorem2",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam sint sunt error, voluptas earum ",
        },
        {
            image: Connectivity, 
            title: "Lorem3",
            text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam sint sunt edolore",
        },
        {
            image: Invest, 
            title: "Lorem4",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam sint sunt edolore",
        },
        
    ];
  return (
    <div className='work-section-wrapper' id="purpose">
        <div className='work-section-top'>
            {/* <p className='primary-subheading'>Purpose</p> */}
            <p className='primary-heading'>Our Purpose</p>
            <p className='primary-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsam sint sunt error, voluptas earum
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoDate.map((data) =>(
                    <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=' ' />
                    </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Work;