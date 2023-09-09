import React from "react"
import './Cards.css'
import {FeaturedHotels, TopDestinations, TravelInspirations} from "../../Assets/Images/index"

export const FeaturedHotelCard=()=>{
    return(
        <div className='featured-hotels-container'>
            <p className="favourite">Favourite hotels around the globe</p>
            <div className='featured-hotels'>
            {
               FeaturedHotels.map((item)=>{
               return(
                  <div className='featured-hotel-card' key={"item.id"}>
                    <img className="fh-Image" src={item.FHImage} alt="featured hotels"/>
                    <div className="fh-info">
                       <p className="fh-title">{item.title}</p>
                       <p className="fh-rating">{item.rating}</p>
                       <p className="fh-place">{item.place}</p>
                       <p className="fh-country">{item.country}</p>
                       <p className="fh-price">{item.price}</p>
                    </div>
                  </div>
                )
                })
            }
            </div>
        </div> 
    )
}
export const TopDestinationsCard=()=>{
    return(
        <div className='top-destinations-container'>
            <p className="favourite">Top Destinations</p>
            <div className='top-destinations'>
            {
               TopDestinations.map((item)=>{
               return(
                  <div className='top-destination-card' key={"item.id"}>
                    <img className="td-Image" src={item.TDImage} alt="top destinations"/>
                    <p className="td-name">{item.title}</p>
                  </div>
                )
                })
            }
            </div>
        </div> 
    )
}
export const InspirationsCard=()=>{
    return(
        <div className='inspirations-container'>
            <p className="favourite">Get Inspiration for your next trip</p>
            <div className='inspirations'>
            {
               TravelInspirations.map((item)=>{
               return(
                  <div className='inspirations-card' key={"item.id"}>
                    <img className="ins-Image" src={item.TIImage} alt="top destinations"/>
                    <p className="ins-title">{item.title}</p>
                    <p className="ins-description">{item.description}</p>
                  </div>
                )
                })
            }
            </div>
        </div> 
    )
}