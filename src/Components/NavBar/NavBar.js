import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from './../../Assets/Images/Logo.png'
import {FaHeart} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-logo'>
          <img className="logo" src={logo} alt="logo"/>
        </div>
        <div className="navbar-menu1">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

        </div>
        <div className="navbar-menu2">
            <ul>
                <li><Link to="/listproperty">List your Property</Link></li>
                <li><Link to="/login"><button className='signIn-btn' >Log In</button></Link></li>
                <li><Link to="/signup"><button className='signUp-btn'>Sign Up</button></Link></li>
                <li><Link to="/cart"><i className='heart-icon'><FaHeart/></i></Link></li>
            </ul>

        </div>

    </div>
  )
}

export default NavBar