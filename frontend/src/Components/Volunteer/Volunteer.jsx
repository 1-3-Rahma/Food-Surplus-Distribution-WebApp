import React, { useRef } from "react";
import "./Volunteer.css";

const Volunteer = ({ volunteers }) => {
  const sliderRef = useRef(null);

  // Scroll functions
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="volunteer-container">
      <h2 className="av">Volunteers</h2>
      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="slider" ref={sliderRef}>
          {volunteers.map((volunteer) => (
            <div key={volunteer.id} className="volunteer-card">
              <div className="volunteer-details">
                <img
                  src={volunteer.photo}
                  alt={volunteer.name}
                  className="volunteer-image"
                />
                <div>
                  <h5 className="hv">{volunteer.name}</h5>

                </div>
              </div>
              <div className="food-details">
                <img
                  src={volunteer.foodPhoto}
                  alt={volunteer.food}
                  className="food-image"
                />
                <p>Food: {volunteer.food}</p>
                <p>Dishes: {volunteer.foodCount}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-btn right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Volunteer;
