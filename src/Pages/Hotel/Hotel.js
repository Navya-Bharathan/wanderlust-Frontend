import React, { useState } from 'react'
import './Hotel.css'
import PlaceIcon from '@mui/icons-material/Place';
import {HotelImages} from '../../Data/data';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const Hotel = () => {
    const [imgIndex,setImgIndex]=useState(0);
    const [open,setOpen]=useState(false);
    const handleOpen=(i)=>{
        setImgIndex(i);
        setOpen(true);
    }
    const handleLeftArrow=()=>{
        let index;
        console.log(HotelImages.length);
        index= imgIndex===0 ? HotelImages.length-1 : imgIndex-1;

        setImgIndex(index);
       
    }
    const handleRightArrow=()=>{
        let index;
        console.log(HotelImages.length);
        index= imgIndex===HotelImages.length-1 ? 0 : imgIndex+1;

        setImgIndex(index);
       
    }
  return (
    <div className='hotel-container'>
       {open && <div className='image-slider-container'>
          <div className='slider-head'>
            <p>Hotel Name</p>
            <HighlightOffIcon className='close' onClick={()=>{setOpen(false)}}/>
          </div>  
          <div className='image-slider-carasoul'>  
          <ArrowCircleLeftIcon fontSize='large' onClick={handleLeftArrow}/>
            <div >
                
                <img className="slider-image"src={HotelImages[imgIndex].image}  alt=""/>
            </div>
           <ArrowCircleRightIcon fontSize='large' onClick={handleRightArrow}/>
           </div>
         </div>}
    <div className='hotel-wrapper'>
    
        <div className='hotel-info'>
            <div>
                <h4 >Podere La Torre</h4>
                <div className="hotel-location">
                    <PlaceIcon fontSize='25px' /><span>Hotel Address </span>
                </div>
                 <span className='hotel-distance'>Distace from Attraction</span>
                 <span className='hotel-highlight'>Hotel Highlight</span>
            </div>
            <div>
                <button className='info-reserve-btn'>Book Now</button>
            </div>
        </div>
        <div className="hotel-gallery">
             {HotelImages.map((item,i)=>{
                return(
                    <div className='hotel-image-container' key={"item.id"}>
                        <img className='hotel-image' onClick={()=>handleOpen(i)} src={item.image} alt='' />
                        
                    </div>
                )
             })}
        </div>
        <div className="hotel-details">
            <div className='hotel-desc'>
                <h4>Podere La Torre</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            </div>
            <div className='hotel-reserve'>
              <h5>Lorem ipsum dolor</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
              <h4>Price</h4>
              <button className='info-reserve-btn'>Book Now</button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Hotel