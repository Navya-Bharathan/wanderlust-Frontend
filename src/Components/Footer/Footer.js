import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {FaFacebookF,FaLinkedinIn,FaTwitter,FaYoutube,FaPinterest,FaInstagram,FaCalendarAlt} from 'react-icons/fa'
import { RecentPost } from '../../Data/data'
import { IconContext } from 'react-icons/lib'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-about">
        <h4>Who are we</h4>
        <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.</p>
        <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p>
        <div className='social-icons'>
          <IconContext.Provider value={{className:"react-icons"}}>
          <i><FaFacebookF/></i>
          <i><FaLinkedinIn/></i>
          <i><FaTwitter/></i>
          <i><FaYoutube/></i>
          <i><FaPinterest/></i>
          <i><FaInstagram/></i>
          </IconContext.Provider>
        </div>
      </div>
      <div className="footer-navigation">
        <h4>Navigation</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="">Gallery</Link></li>
          <li><Link to="">Blog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="">Careers</Link></li>
        </ul>
      </div>
      <div className="recent-post">
        <h4>Recent Posts</h4>
        {
          RecentPost.map((item)=>{
            return(
              <div className="post" key={item.id}>
                   <p>{item.post}</p>
                   <i><FaCalendarAlt /></i>
                   <span>{item.date}</span>
                   
              </div>
            )
          })
        }
        
      </div>
         
      <div className="news-letter">
          <h4>NEWSLETTER</h4>
          <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.</p>
          <input type="text" placeholder="Enter your e-mail id"></input>
          <button className="subscribe">Subscribe</button>
      </div>
    </div>
  )
}

export default Footer