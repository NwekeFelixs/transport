import React from 'react';
import '../css/styles.css';

import transImg1 from '../images/transport-1.png';
import transImg2 from '../images/transport-2.png';
import transImg3 from '../images/transport-3.png';
import transImg4 from '../images/transport-4.png';
import transImg5 from '../images/transport-5.png';

const TransportSection = () => {
  return (
    <section className="section">
      <div className="transport">
        <div className="container">
          <h3 className="transport_heading">Transporting Across The World</h3>
          <div className="transport_container">
            <div className="transport_card">
              <img
                src={transImg1}
                alt=""
                className="transport_img"
              />
              <div className="transport_content">
                <h3 className="transport_title">Liquid Transportation</h3>
                <p className="transport_p">Premium Tankers</p>
              </div>
            </div>
            <div className="transport_card">
              <img
                src={transImg2}
                alt=""
                className="transport_img"
              />
              <div className="transport_content">
                <h3 className="transport_title">Liquid Transportation</h3>
                <p className="transport_p">Premium Tankers</p>
              </div>
            </div>
            <div className="transport_card">
              <img
                src={transImg3}
                alt=""
                className="transport_img"
              />
              <div className="transport_content">
                <h3 className="transport_title">Liquid Transportation</h3>
                <p className="transport_p">Premium Tankers</p>
              </div>
            </div>
            <div className="transport_card">
              <img
                src={transImg4}
                alt=""
                className="transport_img"
              />
              <div className="transport_content">
                <h3 className="transport_title">Liquid Transportation</h3>
                <p className="transport_p">Premium Tankers</p>
              </div>
            </div>
            <div className="transport_card">
              <img
                src={transImg5}
                alt=""
                className="transport_img"
              />
              <div className="transport_content">
                <h3 className="transport_title">Liquid Transportation</h3>
                <p className="transport_p">Premium Tankers</p>
              </div>
            </div>
          </div>
          <div className="btn_container">
            <button className="transport_btn">Load More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
