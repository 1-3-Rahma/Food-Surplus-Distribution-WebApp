import React, { useRef } from "react";
import "./OrdersWillBeDelivered.css";

const OrderWillBeDelivered = ({ orders, onAcceptOrder, onNavigateToOrder }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="order-container">
      <h2>Orders to be Delivered</h2>
      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="slider" ref={sliderRef}>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div
                key={order.id}
                className="order-card"
                onClick={() => onNavigateToOrder(order.id)} // Navigate to the specific order
              >
                <h3>{order.name}</h3>
                <div className="details">
                  <p>{order.details}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click navigation when clicking the button
                    onAcceptOrder(order);
                  }}
                  className="accept-btn"
                >
                  Accept
                </button>
              </div>
            ))
          ) : (
            <div className="no-orders-message">
              <p>No orders to deliver at the moment!</p>
            </div>
          )}
        </div>
        {orders.length > 0 && (
          <button className="nav-btn right" onClick={scrollRight}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderWillBeDelivered;
