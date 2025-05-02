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

  // Handle image error
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
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
            <img className="add-icon" src={Add} alt="Add new order" />
          </div>

          {/* Render available orders */}
          {availableOrders && availableOrders.length > 0 ? (
            availableOrders.map((order) => (
              <div key={order.id} className="available-card">
                <img 
                  src={order.photo} 
                  alt={order.foodType} 
                  className="food-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <h5>Food: {order.foodType}</h5>
                <p>Number of dishes: {order.dishesCount}</p>
              </div>
            ))
          ) : (
            <div className="no-orders-message">
              <p>No orders available at the moment!</p>
            </div>
          )}
        </div>
        <button className="nav-btn right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Available;
