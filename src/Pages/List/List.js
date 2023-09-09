import React from 'react'
import './List.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns';
import PriceSlider from '../../Components/FilterComponents/Slider/Slider';
import {Amenities,PropertyType,FunThingsTodo} from '../../Components/FilterComponents/Checkbox/Checkbox';
import { Box, Stack } from '@mui/material';
import { Rating } from '../../Components/FilterComponents/ToggleButton/ToggleButton';
import { HotelList } from '../../Data/data';


const List = () => {
  const location=useLocation()
  console.log(location);
  const destination=location.state.destination;
  return (
    <div className='hotel-list-container'>
        <div className='hotel-list-wrapper'>
            <div className="search-filter-container">
              <div className='search-container'>
                 <h1>Search</h1>
                  <div>
                    <label>Destination</label>
                    <input className='destination-input' type="text" placeholder={destination}/>
                  </div>

                <div className='checkin-date-container'>
                  <div className='checkin-date'>
                    <label className='date-label'>Check-in date:</label>
                    {/*<input type="date" placeholder={`${format(location.state.date[0].endDate,"MM/dd/yyyy")}`}/>*/}
                    <span className='date-span'> {`${format(location.state.date[0].startDate,"MM/dd/yyyy")}`}</span>
                  </div>
                  <div className='checkin-date'>
                    <label className='date-label'>Check-out date:</label>
                    <span className='date-span'> {`${format(location.state.date[0].endDate,"MM/dd/yyyy")}`}</span>
                  </div>
                </div>
            </div>  
            <div className='filter-items-container'>
              <p>Filter By</p>
              <div className='filter-items'> 
              <Box>
                <Stack>
                   <PriceSlider/>
                   <hr />
                   <Amenities/>
                   <hr />
                   <PropertyType/>
                   <hr />
                   <Rating/>
                   <hr />
                   <FunThingsTodo/>
                </Stack>
              </Box>
              </div>
            </div>
            </div>
            <div className="search-result-container">
                  <h4>{destination}: 12 properties found</h4>
                  <div className='search-results'>
                    {
                      HotelList.map((item)=>{
                         let review=""
                         if(item.rating===5){
                           review="Superb"}
                          else if(item.rating===4){
                            review="Very Good";}
                          else if(item.rating===3){
                            review="Good";}
                            else{
                              review="Pleasant";
                            }
                            
                        return(
                          <div className='search-result-item'>
                            <div className='search-result-image'>
                              <img src={item.image} alt=""/>
                            </div>
                            <div className='hotel-info-container'>
                              <h5>{item.title}</h5>
                              <p>{item.address}    {item.location}</p>
                              <p>{item.description}</p>
                            </div>
                            <div className='hotel-review-container'>
                              <div className='review-rating'>
                              <p>{review}</p>
                              <p className='hotel-rating'>{item.rating}</p>
                              </div>
                              <button className='show-price-button'>Show Prices</button>
                            </div>
                          </div>
                        )

                      })
                    }
                  </div>

            </div>
        </div>
    </div>
  )
}

export default List