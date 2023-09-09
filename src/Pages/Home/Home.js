import React, {useState} from 'react'
import './Home.css'
import {FaMapMarkerAlt,FaRegCalendarAlt,FaUser} from 'react-icons/fa'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

//import {FeaturedHotels} from "../../Assets/Images/index.js"
import { FeaturedHotelCard, InspirationsCard, TopDestinationsCard} from "../../Components/Cards/Cards"


const Home = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openDate,setOpenDate]=useState(false);
  const [people,setPeople]=useState({
    adult:1,
    children:0,
    rooms:1
  })
  const [destination,setDestination]=useState("place");
  const [openOption,setOpenOption]=useState(false);

  const handleOption=(name, operation)=>{
    setPeople((prev)=>{
      return{
        ...prev,
        [name]:operation === "+" ? people[name]+1 : people[name]-1,
      };
    });
  };

  const navigate=useNavigate();
  const handleSearch=()=>{
       navigate("/hotellist" ,{state:{destination,date,people}} )
       
  }
  return (
    
  <div className='home-container'>
  <div className='home'>
    <div className='home-search'>
      <div className='search-input-container'>
        <div className="search-input">
          <FaMapMarkerAlt/>
          <input type="text" placeholder="Where are you going?" className='location-input'  onChange={(e)=>setDestination(e.target.value)}/>
        </div>
        <div className="search-input">
          <FaRegCalendarAlt/>
          <span onClick={()=>setOpenDate(!openDate)} className='date-input'>{`${format(date[0].startDate,"dd/MM/yyyy")}`}  to {`${format(date[0].endDate,"dd/MM/yyyy")}` }
          </span>
          {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
            />}

        </div>
        <div className="search-input">
          <FaUser/>
          <span className='people-input' onClick={()=>{setOpenOption(!openOption)}}>{`${people.adult} adult`}.{`${people.children} children`}.{`${people.rooms} rooms`}</span>

          {openOption && <div className='people-input-options'>
          <div className="people-option">
            <span className='option-text'>Adult</span>
            <div className='option-counter'>
              <button disabled={people.adult<=1} className='option-counter-button' onClick={()=>handleOption("adult","-")}>-</button>
              <span className='option-counter-value'>{people.adult}</span>
              <button className='option-counter-button' onClick={()=>handleOption("adult","+")}>+</button>
            </div>
          </div>

          <div className="people-option">
            <span className='option-text'>Children</span>
            <div className='option-counter'>
              <button disabled={people.children<=0}className='option-counter-button' onClick={()=>handleOption("children","-")}>-</button>
              <span className='option-counter-value'>{people.children}</span>
              <button className='option-counter-button' onClick={()=>handleOption("children","+")}>+</button>
            </div>
          </div>

          <div className="people-option">
            <span className='option-text'>Rooms</span>
            <div className='option-counter'>
              <button disabled={people.rooms<=1}className='option-counter-button' onClick={()=>handleOption("rooms","-")}>-</button>
              <span className='option-counter-value'>{people.rooms}</span>
              <button className='option-counter-button' onClick={()=>handleOption("rooms","+")}>+</button>
            </div>
          </div>

          </div>}
        </div>
        <button className='search-button' onClick={handleSearch}>Search</button>
      </div> 
    </div>
    <div className='featured'>
       {/*<div className='featured-hotels'>
         {
          FeaturedHotels.map((item)=>{
            return(
              <div className='featured-hotels' key={"item.id"}>
                <img src={item.FHImage} alt="featured hotels"/>
              </div>
            )
          })
         }
        </div> */}
    
      <FeaturedHotelCard/>
      <TopDestinationsCard />
      <InspirationsCard />
    </div>
    </div>
  </div>
  )
}
export default Home;
