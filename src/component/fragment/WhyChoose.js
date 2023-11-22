import React from 'react';
import '../css/styles.css';

import box from '../images/icons/box.png';
import price from '../images/icons/price.png';
import whyImg1 from '../images/why-us-1.jpg';
import whyImg2 from '../images/why-us-2.png';



const WhyChoose = () => {
  return (
    <section className="section">
      <div className="why"></div>
      <div className="container">
        <div className="why_container">
          <div className="why_content">
            <h5 className="why_secondary_heading">Why Us</h5>
            <h2 className="why_primary_heading">
              We provide a full range global logistics solution
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
            <div className="why_icon_box">
              <img src={box} alt="" className="why_icon" />
              <h5>Delivery on Time</h5>
            </div>
            <div className="why_icon_box">
              <img src={price} alt="" className="why_icon" />
              <h5>Optimized Travel Cost</h5>
            </div>
          </div>
          <div className="why_images">
            <img src={whyImg1} alt="" className="why_img_1" />
            <img src={whyImg2} alt="" className="why_img_2" />
          </div>
        </div>
        <div className="counter">
          <div className="delivered">
            <h2 className="counter_number">1234</h2>
            <p className="counter_p">Delivered Packages</p>
          </div>
          <div className="clients">
            <h2 className="counter_number">1234</h2>
            <p className="counter_p">Delivered Packages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
