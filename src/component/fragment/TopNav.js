import React from 'react';
import '../css/styles.css';
import logo from '../images/Logo.png';
import navIcon1 from '../images/icons/nav-icon-1.png';
import navIcon3 from '../images/icons/nav-icon-3.png';
import navIcon2 from '../images/icons/nav-icon-2.png';

const TopNav = () => {
  return (
    <nav className="top_nav">
      <div className="container top_container">
        <div className="logo_box">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="top_details">
          <div className="details">
            <img
              src={navIcon1}
              alt=""
              className="details_icon"
            />
            <div className="details_text">
              <p>Mon - Sat | 9:00 - 18:00</p>
              <p>Sunday Closed</p>
            </div>
          </div>
          <div className="details">
            <img
              src={navIcon2}
              alt=""
              className="details_icon"
            />
            <div className="details_text">
              <p>Email</p>
              <p>email@gmail.com</p>
            </div>
          </div>
          <div className="details">
            <img
              src={navIcon3}
              alt=""
              className="details_icon"
            />
            <div className="details_text">
              <p>Call Us</p>
              <p>(+46) 012345567</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
