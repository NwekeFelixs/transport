import React from 'react';
import '../css/styles.css';

import aboutImg from '../images/about.png'

const AboutSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="why_container about_why_container">
          <div className="about_why_images">
            <img src={aboutImg} alt="" className="about_img" />
          </div>
          <div className="why_content">
            <h5 className="why_secondary_heading">About Us</h5>
            <h2 className="why_primary_heading">
              We provide full range global logistics solution
            </h2>
            <p className="why_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              impedit officiis aliquid perspiciatis facere eaque alias quos
              velit?
            </p>
            <p className="why_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Suscipit, culpa?
            </p>
            <button className="transport_btn">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
