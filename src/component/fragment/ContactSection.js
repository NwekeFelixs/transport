import React from 'react';
import '../css/styles.css';

import logo from '../images/Logo.png';
import navIcon1 from '../images/icons/nav-icon-1.png';
import navIcon3 from '../images/icons/nav-icon-3.png';
import navIcon2 from '../images/icons/nav-icon-2.png';

import customerImg1 from '../images/customer-1.png';
import customerImg2 from '../images/customer-2.png';
import customerImg3 from '../images/customer-3.png';
import customerImg4 from '../images/customer-4.png';

import galleryImg1 from '../images/gallery-1.png';
import galleryImg2 from '../images/gallery-2.png';
import galleryImg3 from '../images/gallery-3.png';
import galleryImg4 from '../images/gallery-4.png';

const ContactSection = () => {
  return (
    <section className="section">
      <div className="contact">
        <div className="container contact_container">
          <div className="contact_details">
            <div className="section_header form_section_header">
              <h5>Contact</h5>
              <h2 className="section_main_title">Get in Touch with us</h2>
              <p className="contact_p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, qui ratione perferendis alias pariatur iure.
              </p>
              <div className="contact_boxes">
                <div className="icon_box icons_box_contact">
                  <img
                    src={navIcon1}
                    alt=""
                    className="icon_box_icon"
                  />
                  <span>
                    <p className="icon_box_test">Mon - Sat 9:00 - 17:00</p>
                    <p className="icon_box_test">Sunday Closed</p>
                  </span>
                </div>
                <div className="icon_box icons_box_contact">
                  <img
                    src={navIcon2}
                    alt=""
                    className="icon_box_icon"
                  />
                  <span>
                    <p className="icon_box_test">Email</p>
                    <p className="icon_box_test">email@gmail.com</p>
                  </span>
                </div>
                <div className="icon_box icons_box_contact">
                  <img
                    src={navIcon3}
                    alt=""
                    className="icon_box_icon"
                  />
                  <span>
                    <p className="icon_box_test">Call with us</p>
                    <p className="icon_box_test">(+46) 12345678</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_form">
            <form action="">
              <div className="form_containers">
                <div className="form_container">
                  <input
                    type="text"
                    className="form_input"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form_container">
                  <input
                    type="text"
                    className="form_input"
                    placeholder="Email"
                  />
                </div>
                <div className="form_container">
                  <input
                    type="text"
                    className="form_input"
                    placeholder="Phone"
                  />
                </div>
                <div className="form_container">
                  <input
                    type="text"
                    className="form_input"
                    placeholder="City"
                  />
                </div>
              </div>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="form_text"
                placeholder="Write your message"
              ></textarea>
              <button className="form_btn">Send an Email</button>
            </form>
          </div>
        </div>
        <div className="container gallery_container">
          <div className="galley_item">
            <img src={customerImg1} alt="" className="gallery_img" />
            <img
              src={galleryImg1}
              alt=""
              className="gallery_img_logo"
            />
          </div>
          <div className="galley_item">
            <img src={customerImg2} alt="" className="gallery_img" />
            <img
              src={galleryImg2}
              alt=""
              className="gallery_img_logo"
            />
          </div>
          <div className="galley_item">
            <img src={customerImg3} alt="" className="gallery_img" />
            <img
              src={galleryImg3}
              alt=""
              className="gallery_img_logo"
            />
          </div>
          <div className="galley_item">
            <img src={customerImg4} alt="" className="gallery_img" />
            <img
              src={galleryImg4}
              alt=""
              className="gallery_img_logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
