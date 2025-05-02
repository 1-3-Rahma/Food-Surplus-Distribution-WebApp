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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  // Handle image error
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
   
  };

  return (
    <div className="ordered-container">
      <h2 className="av">Ordered</h2>
      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="slider" ref={sliderRef}>
          {orderedItems && orderedItems.length > 0 ? (
            orderedItems.map((order) => (
              <div
                key={order.id}
                className="ordered-card"
              >
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
                <div className="consumer-info">
                  <p>Ordered by: {order.consumerName}</p>
                  <p>Email: {order.consumerEmail}</p>
                  <p>Address: {order.consumerAddress}</p>
                  <p>Ordered at: {formatDate(order.orderTime)}</p>
                  <p>Status: {order.status}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-orders">
              <p>No orders yet</p>
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

export default Ordered;
