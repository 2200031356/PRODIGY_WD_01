import React from "react";
import ProfilePic from "../Assets/harshitha.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          An unforgettable dining experience! The food was exquisite and the
          service was impeccable. Highly recommended!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          I am a web developer currently studying engineering, with a passion
          for creating elegant and functional designs. My skills in both coding
          and design enable me to build visually appealing and highly efficient
          websites.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Harshitha</h2>
      </div>
    </div>
  );
};

export default Testimonial;
