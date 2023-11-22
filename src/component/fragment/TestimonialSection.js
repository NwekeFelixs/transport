import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import '../css/styles.css';

import star from '../images/icons/Star.png';
import user from '../images/user.jpg';
import quote from '../images/icons/quote.png';

const TestimonialSection = () => {
  useEffect(() => {
    // Initialize Swiper for testimonials
    new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section_header">
          <h5>Testimonials</h5>
          <h2 className="section_main_title">What our Customer Say</h2>
        </div>
        {/* Swiper */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="review_card">
                <div className="review_user">
                  <img src={user} alt="" className="review_img" />
                  <div className="user_details">
                    <h3 className="user_name">Sofia Morgan</h3>
                    <p className="user_designation">UX/UI Design at Google</p>
                  </div>
                  <img
                    src={quote}
                    alt=""
                    className="review_quote"
                  />
                </div>
                <p className="review_p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sequi, molestiae eaque? Incidunt cumque totam ea veniam
                  sapiente consequuntur beatae temporibus molestias fugiat
                  facilis iusto, voluptas rerum, atque eos accusantium vel!
                </p>
                <div className="review_rating">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt=""
                      className="review_star"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="review_card">
                <div className="review_user">
                  <img src={user} alt="" className="review_img" />
                  <div className="user_details">
                    <h3 className="user_name">Sofia Morgan</h3>
                    <p className="user_designation">UX/UI Design at Google</p>
                  </div>
                  <img
                    src={quote}
                    alt=""
                    className="review_quote"
                  />
                </div>
                <p className="review_p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sequi, molestiae eaque? Incidunt cumque totam ea veniam
                  sapiente consequuntur beatae temporibus molestias fugiat
                  facilis iusto, voluptas rerum, atque eos accusantium vel!
                </p>
                <div className="review_rating">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt=""
                      className="review_star"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="review_card">
                <div className="review_user">
                  <img src={user} alt="" className="review_img" />
                  <div className="user_details">
                    <h3 className="user_name">Sofia Morgan</h3>
                    <p className="user_designation">UX/UI Design at Google</p>
                  </div>
                  <img
                    src={quote}
                    alt=""
                    className="review_quote"
                  />
                </div>
                <p className="review_p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sequi, molestiae eaque? Incidunt cumque totam ea veniam
                  sapiente consequuntur beatae temporibus molestias fugiat
                  facilis iusto, voluptas rerum, atque eos accusantium vel!
                </p>
                <div className="review_rating">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt=""
                      className="review_star"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Slide 4 */}
            <div className="swiper-slide">
              <div className="review_card">
                <div className="review_user">
                  <img src={user} alt="" className="review_img" />
                  <div className="user_details">
                    <h3 className="user_name">Sofia Morgan</h3>
                    <p className="user_designation">UX/UI Design at Google</p>
                  </div>
                  <img
                    src={quote}
                    alt=""
                    className="review_quote"
                  />
                </div>
                <p className="review_p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sequi, molestiae eaque? Incidunt cumque totam ea veniam
                  sapiente consequuntur beatae temporibus molestias fugiat
                  facilis iusto, voluptas rerum, atque eos accusantium vel!
                </p>
                <div className="review_rating">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt=""
                      className="review_star"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Swiper Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
