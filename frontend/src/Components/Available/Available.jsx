import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Available.css";
import Add from '../../Assets/Plus-trans.png'


const Available = ({ availableOrders }) => {
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
    <div className="available-container">
      <h2 className="av">Available</h2>
      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="slider" ref={sliderRef}>
          {/* Add order card */}
          <div
            className="available-card add-card"
            onClick={() => navigate("/AddPage")}
          >
            <h3>Add</h3>

            <img className="add-icon" src={Add} />

          </div>

          {/* Render available orders */}
          {availableOrders.map((order) => (
            <div key={order.id} className="available-card">
              <img src={order.photo} alt={order.foodType} className="food-image" />
              <h5>Food: {order.foodType}</h5>
              <p>Number of dishes: {order.dishesCount}</p>
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

export default Available;
