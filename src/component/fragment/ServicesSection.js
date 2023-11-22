import React from 'react';
import '../css/styles.css';

import serviceIcon1 from '../images/icons/service-1.png';
import serviceIcon2 from '../images/icons/service-2.png';
import serviceIcon3 from '../images/icons/service-3.svg';
import serviceIcon4 from '../images/icons/service-4.png';

const ServicesSection = () => {
  return (
    <section className="section">
      <div className="container services_container">
        <div className="service services_heading">
          <span>
            <h5 className="secondary_header">What We Do</h5>
            <h2 className="section_title">Safe & Reliable Cargo Solutions</h2>
          </span>
        </div>
        <div className="service">
          <div className="service_content">
            <img
              src={serviceIcon1}
              alt=""
              className="service_icon"
            />
            <div className="service_details">
              <h3 className="services_title">Sea Transport Services</h3>
              <p className="services_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, ipsa?
              </p>
            </div>
          </div>
          <div className="service_content">
            <img
              src={serviceIcon2}
              alt=""
              className="service_icon"
            />
            <div className="service_details">
              <h3 className="services_title">Sea Transport Services</h3>
              <p className="services_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, ipsa?
              </p>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service_content">
            <img
              src={serviceIcon3}
              alt=""
              className="service_icon"
            />
            <div className="service_details">
              <h3 className="services_title">Sea Transport Services</h3>
              <p className="services_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, ipsa?
              </p>
            </div>
          </div>
          <div className="service_content">
            <img
              src={serviceIcon4}
              alt=""
              className="service_icon"
            />
            <div className="service_details">
              <h3 className="services_title">Sea Transport Services</h3>
              <p className="services_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, ipsa?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
