import React from 'react';
import '../css/styles.css';

import blogImg1 from '../images/blog-1.png';
import blogImg2 from '../images/blog-2.png';
import blogImg3 from '../images/blog-3.png';

const LatestNewsSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="section_header">Our Latest News</h3>
        <div className="news_container">
          <div className="news">
            <img src={blogImg1} alt="" className="news_img" />
            <div className="news_content">
              <h3 className="news_title">
                Inland freight a worthy solution for your business
              </h3>
              <p className="news_p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus placeat accusamus tempora sequi at! Dolorum
                voluptate illum quidem qui quibusdam.
              </p>
              <ul className="news_list">
                <li className="news_item">Lorem ipsum dolor sit.</li>
                <li className="news_item">Lorem ipsum dolor sit.</li>
                <li className="news_item">Lorem ipsum dolor sit.</li>
                <li className="news_item">Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
          <div className="news">
            <img src={blogImg2} alt="" className="news_img" />
            <div className="news_content">
              <h3 className="news_title">
                Inland freight a worthy solution for your business
              </h3>
              <p className="news_p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus placeat accusamus tempora sequi at! Dolorum
                voluptate illum quidem qui quibusdam.
              </p>
              <ul className="news_list">
                <li className="news_item">Lorem ipsum dolor sit.</li>
                <li className="news_item">Lorem ipsum dolor sit.</li>
                <li className="news_item">Lorem ipsum dolor sit.</li>
                <li className="news_item">Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
          <div className="news">
            <img src={blogImg3} alt="" className="news_img" />
            <div className="news_content">
              <h3 className="news_title">
                Inland freight a worthy solution for your business
              </h3>
              <p className="news_p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus placeat accusamus tempora sequi at! Dolorum
                voluptate illum quidem qui quibusdam.
              </p>
              <ul className="news_list">
                <li className="news_item">Lorem ipsum dolor sit.</li>
                <li className="news_item">Lorem ipsum dolor sit.</li>
                <li className="news_item">Lorem ipsum dolor sit.</li>
                <li className="news_item">Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="news_btn_container">
          <button className="news_btn">Load More</button>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
