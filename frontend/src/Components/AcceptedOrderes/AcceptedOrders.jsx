import React, { useRef } from 'react';
import './AcceptedOrders.css'; // Import the CSS file for styling
import gif from '../../Assets/Delivery man brown.gif'

const AcceptedOrders = ({ acceptedOrders, onCancelOrder }) => {
    const sliderRef = useRef(null); // Reference for the slider container
   
  // Function to scroll left
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Function to scroll right
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="accepted-orders-container">
      <h2>Accepted Orders</h2>
      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="slider" ref={sliderRef}>
          {acceptedOrders.length > 0 ? (
            acceptedOrders.map((order) => (
              <div key={order.id} className="order-card">
                <h3>{order.name}</h3>
                <div className="details">
                  <p>{order.details}</p>
                </div>
                <button
                  onClick={() => onCancelOrder(order.id)} // Calls parent function to cancel the order
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            ))
          ) : (
            <p className="no-orders-message">No accepted orders yet!</p>
          )}
        </div>
        <button className="nav-btn right" onClick={scrollRight}>
          &gt;
        </button>
        
        <img
          src={gif} // Use the path relative to the public folder
          alt="loading"
          className="order-gif"
        />
      </div>
    </div>
  );
};

export default AcceptedOrders;
