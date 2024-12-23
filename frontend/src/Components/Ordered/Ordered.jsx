import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Ordered.css";

const Ordered = ({ orderedItems }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // Scroll functions
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="ordered-container">
      <h2 className="av">Ordered</h2>
      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="slider" ref={sliderRef}>
          {orderedItems.map((order) => (
            <div
              key={order.id}
              className="ordered-card"
            >
              <img
                src={order.photo}
                alt={order.foodType}
                className="food-image"
              />
              <h5>Food: {order.foodType}</h5>
              <p>Number of dishes: {order.foodCount}</p>
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

export default Ordered;
