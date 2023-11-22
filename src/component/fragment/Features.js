import React from 'react';
import '../css/styles.css';

import chosen from '../images/choosen.png';
import jet from '../images/icons/jet.png';
import box from '../images/icons/box.png';
import mouse from '../images/icons/mouse.png';
import globe from '../images/icons/globe.png';
import support from '../images/icons/support.png';
import clock from '../images/icons/clock.png';
import price from '../images/icons/price.png';

const Features = () => {
  return (
    <section className="section">
      <div className="choose">
        <div className="choose_wrapper">
          <div className="choose_left"></div>
          <div className="choose_right"></div>
        </div>
        <div className="container choose_container">
          <div className="choose_container_wrapper">
            <div className="choose_img_box">
              <img src={chosen} alt="" className="choose_img" />
              <div className="choose_tag">
                <img src={jet} alt="" className="choose_tag_img" />
                <p className="choose_tag_text">
                  Moving your products across borders
                </p>
              </div>
            </div>
            <div className="choose_content">
              <div className="section_header">
                <h5 className="heading_5">Why Us</h5>
                <h2 className="section_main_title">
                  We create opportunity to reach potential
                </h2>
                <p className="choose_p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium quidem cupiditate harum maiores animi sed nisi,
                  enim natus expedita saepe.
                </p>
                <div className="icon_boxes">
                  <div className="icon_box">
                    <img src={box} alt="" className="icon_box_icon" />
                    <p className="icon_box_test">Safe Packages</p>
                  </div>
                  <div className="icon_box">
                    <img src={mouse} alt="" className="icon_box_icon" />
                    <p className="icon_box_test">Ship Everywhere</p>
                  </div>
                  <div className="icon_box">
                    <img src={globe} alt="" className="icon_box_icon" />
                    <p className="icon_box_test">Global Tracking</p>
                  </div>
                  <div className="icon_box">
                    <img src={support} alt="" className="icon_box_icon" />
                    <p className="icon_box_test">24/7 Support</p>
                  </div>
                  <div className="icon_box">
                    <img src={clock} alt="" className="icon_box_icon" />
                    <p className="icon_box_test">In Time Delivery</p>
                  </div>
                  <div className="icon_box">
                    <img src={price} alt="" className="icon_box_icon" />
                    <p className="icon_box_test">Transparent Pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
