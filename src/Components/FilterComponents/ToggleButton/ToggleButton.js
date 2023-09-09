import { ToggleButton, ToggleButtonGroup } from '@mui/material'

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import React,{useState} from 'react'
import './ToggleButton.css'

export const Rating = () => {
  const [ratings,setRatings]=useState([]);
  const changeRating=(e,value)=>{
         setRatings(value);
  };

  return (
    <div className="rating-filter-container">
      <p>Rating</p>
      <ToggleButtonGroup color="success" value={ratings} onChange={changeRating}>
        <ToggleButton className='toggle-button' value={1}>1<StarRateRoundedIcon/></ToggleButton>
        <ToggleButton className='toggle-button' value={2}>2<StarRateRoundedIcon/></ToggleButton>
        <ToggleButton className='toggle-button' value={3}>3<StarRateRoundedIcon/></ToggleButton>
        <ToggleButton className='toggle-button' value={4}>4<StarRateRoundedIcon/></ToggleButton>
        <ToggleButton className='toggle-button' value={5}>5<StarRateRoundedIcon/></ToggleButton>
      </ToggleButtonGroup>
    </div>

  )
}

