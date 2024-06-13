import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Experience the convenience of our PickMeals service! Choose from our curated menu of gourmet meals, perfect for any occasion.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Customize your dining schedule by selecting how often you'd like to enjoy our gourmet meals, whether daily, weekly, or for special occasions.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy our prompt and reliable delivery service, bringing fresh, gourmet meals right to your doorstep in no time.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Experience seamless dining with our easy reservation system. Simply
          book a table online, and let us take care of the rest while you savor
          our delectable dishes.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
