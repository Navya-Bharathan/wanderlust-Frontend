import { FormControlLabel, FormLabel, Checkbox, FormGroup } from '@mui/material'
import React, {useState} from 'react'


export const Amenities = () => {
    const [selected,setSelected]=useState([]);
    const handleAmenities=(e)=>{
              const index=selected.indexOf(e.target.value);
              if(index===-1){
                setSelected([...selected,e.target.value]);
              }
              else{
                setSelected(selected.filter((value)=>value!== e.target.value));
              }
    }
  return (
    <div className='amenities-container'>
      
            <FormLabel>Amenities</FormLabel>
            <FormGroup>
                <FormControlLabel label="Free Parking" value="parking" control={<Checkbox/>} onChange={handleAmenities} />
                <FormControlLabel label="Free Wifi" value="wifi" control={<Checkbox/>} onChange={handleAmenities}/>
                <FormControlLabel label="Wheel Chair Accessible" value="wheel chair" control={<Checkbox/>} onChange={handleAmenities} />
                <FormControlLabel label="Elevator" value="elevator" control={<Checkbox/>} onChange={handleAmenities}/>
                <FormControlLabel label="Restaurant" value="restaurant" control={<Checkbox/>} onChange={handleAmenities}/>
                <FormControlLabel label="Kids Play Area" value="kidsplayarea" control={<Checkbox/>} onChange={handleAmenities}/>
                <FormControlLabel label="Swimming Pool" value="swimmingpool" control={<Checkbox/>} onChange={handleAmenities}/>
                <FormControlLabel label="Mini Bar" value="parking" control={<Checkbox/>} onChange={handleAmenities}/>
                <FormControlLabel label="TV" value="parking" control={<Checkbox/>} onChange={handleAmenities}/>
                
            </FormGroup>
            

    </div>
  )
}
export const PropertyType = () => {
    const [selected,setSelected]=useState([]);
    const handlePropertyType=(e)=>{
              const index=selected.indexOf(e.target.value);
              if(index===-1){
                setSelected([...selected,e.target.value]);
              }
              else{
                setSelected(selected.filter((value)=>value!== e.target.value));
              }
    }
  return (
    <div className='property-type-container'>
      
            <FormLabel>Property Type</FormLabel>
            <FormGroup>
                <FormControlLabel label="Hotel" value="hotel" control={<Checkbox/>} onChange={handlePropertyType} />
                <FormControlLabel label="Apartment" value="Apartment" control={<Checkbox/>} onChange={handlePropertyType}/>
                <FormControlLabel label="Holiday home" value="holidayhomes" control={<Checkbox/>} onChange={handlePropertyType}/>
                <FormControlLabel label="Guest House" value="guesthouse" control={<Checkbox/>} onChange={handlePropertyType}/>
                <FormControlLabel label="Villa" value="villa" control={<Checkbox/>} onChange={handlePropertyType}/>
                
                
            </FormGroup>
            

    </div>
  )
}
export const FunThingsTodo = () => {
  const [selected,setSelected]=useState([]);
  const handleFunThings=(e)=>{
            const index=selected.indexOf(e.target.value);
            if(index===-1){
              setSelected([...selected,e.target.value]);
            }
            else{
              setSelected(selected.filter((value)=>value!== e.target.value));
            }
  }
return (
  <div className='fun-things-container'>
    
          <FormLabel>Fun things to do</FormLabel>
          <FormGroup>
              <FormControlLabel label="Hiking" value="hiking" control={<Checkbox/>} onChange={handleFunThings} />
              <FormControlLabel label="Cycling" value="cycling" control={<Checkbox/>} onChange={handleFunThings}/>
              <FormControlLabel label="Fishing" value="fishing" control={<Checkbox/>} onChange={handleFunThings}/>
              <FormControlLabel label="Water Sports" value="watersports" control={<Checkbox/>} onChange={handleFunThings}/>
              <FormControlLabel label="Canoeing" value="canoeing" control={<Checkbox/>} onChange={handleFunThings}/>
              
              
          </FormGroup>
          

  </div>
)
}

