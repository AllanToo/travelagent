import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/Reviews.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#4d58ee" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#4d58ee" }}
      onClick={onClick}
    />
  );
}

function Reviews() {




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div id="testimonials" className="testimonials">
      <h2>Our Reviews</h2>
      <h1>What Our Customers are saying</h1>
      <Slider {...settings}>
        <div className="testimonial-page">
          <div className="testimonial">         
  I continue to have very positive experiences with Boulevard. They are extremely responsive, practical and cost-effective. Additionally, their support in dealing with unexpected cancellations is superb...   
          </div>
          <div className="testimonial">Amazing Service X2! I used Terri two years ago and she presented great options for our Mexico trip and made great recommendations.</div>
          <div className="testimonial">olanda Tkachuk is a gem. She organized a bucket list trip to Greece and was a pleasure to work with</div>
        </div>
        <div className="testimonial-page">
        <div className="testimonial">         
  I continue to have very positive experiences with Boulevard. They are extremely responsive, practical and cost-effective. Additionally, their support in dealing with unexpected cancellations is superb...   
          </div>
          <div className="testimonial">Amazing Service X2! I used Terri two years ago and she presented great options for our Mexico trip and made great recommendations.</div>
          <div className="testimonial">olanda Tkachuk is a gem. She organized a bucket list trip to Greece and was a pleasure to work with</div>
        </div>
        <div className="testimonial-page">
        <div className="testimonial">         
  I continue to have very positive experiences with Boulevard. They are extremely responsive, practical and cost-effective. Additionally, their support in dealing with unexpected cancellations is superb...   
          </div>
          <div className="testimonial">Amazing Service X2! I used Terri two years ago and she presented great options for our Mexico trip and made great recommendations.</div>
          <div className="testimonial">olanda Tkachuk is a gem. She organized a bucket list trip to Greece and was a pleasure to work with</div>
        </div>
      </Slider>
    </div>
  );
}

export default Reviews;