import React, { useState } from 'react'
import {Slider} from '@mui/material'


const PriceSlider = () => {
  const [value,setValue]=useState([50,150])
  const minRange=50;
  const handleChange=(e,newValue,activeThumb)=>{
    /*setValue(newValue);*/
    if(activeThumb===0){
      setValue([Math.min(newValue[0],value[1]-minRange),value[1]]);
    }else {
      setValue([value[0], Math.max(newValue[1], value[0] + minRange)]);
    }
  }
  return (
    <div className='price-slider'>
      <Slider  
      aria-label='Price Range' 
      valueLabelDisplay='on' 
      step={50}
      min={0}
      max={500}
      value={value}
      
      marks
      disableSwap
      onChange={handleChange}
        />
     
      
      </div>
  )
}

export default PriceSlider