import React from 'react';
import '../css/styles.css';
import linkedin from '../images/icons/linkedin.png';
import facebook from '../images/icons/facebook.png';
import instagram from '../images/icons/instagram.png';
import twitter from '../images/icons/twitter.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container nav_container">
          <ul className="nav_list">
            <li className="nav_item">
              <Link to='/' className="nav_link">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link to='/about' className="nav_link">
                About
              </Link>
            </li>
        
            <li className="nav_item">
              <Link to='/blog' className="nav_link">
                Blog
              </Link>
            </li>
            <li className="nav_item">
              <Link to='/contact' className="nav_link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav_right">
            <div className="nav_icons">
              <img src={linkedin} alt="" className="nav_icon" />
              <img src={facebook} alt="" className="nav_icon" />
              <img src={instagram} alt="" className="nav_icon" />
              <img src={twitter} alt="" className="nav_icon" />
            </div>
            <a href="#" className="nav_btn">
              Request Quote
            </a>
          </div>
        </div>
      </nav>
      <div className="container header_container">
        <div className="header_wrapper">
          <h5 className="header_secondary_title">
            Logistics & Supply Chain Solutions
          </h5>
          <h1 className="header_main_title">
            Your Gateway to any Destination in the World
          </h1>
          <p className="header_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            architecto deserunt officia consequuntur sapiente vero quia!
            Officiis harum magnam accusamus.
          </p>
          <a href="#" className="header_btn">
            Explore More
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
