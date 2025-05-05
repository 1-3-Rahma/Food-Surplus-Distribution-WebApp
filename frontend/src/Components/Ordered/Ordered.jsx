import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Ordered.css";

const Ordered = ({ orderedItems }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState({});
  const [visibleOrders, setVisibleOrders] = useState([]);

  // Update visible orders when orderedItems changes, filtering out canceled orders
  useEffect(() => {
    if (orderedItems) {
      const activeOrders = orderedItems.filter(order => order.status !== 'Canceled');
      setVisibleOrders(activeOrders);
    }
  }, [orderedItems]);

  // Update countdown timers
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const newTimeRemaining = {};
      
      visibleOrders?.forEach(order => {
        if (order.status === 'Canceling') {
          const orderTime = new Date(order.orderTime).getTime();
          const remaining = Math.max(0, 60000 - (now - orderTime));
          newTimeRemaining[order.id] = Math.ceil(remaining / 1000);
        }
      });
      
      setTimeRemaining(newTimeRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [visibleOrders]);

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
          {visibleOrders && visibleOrders.length > 0 ? (
            visibleOrders.map((order) => (
              <div
                key={order.id}
                className={`ordered-card ${order.status === 'Canceling' ? 'fade-out-slow' : ''}`}
              >
                <img
                  src={order.photo}
                  alt={order.foodType}
                  className="food-image"
                  onError={handleImageError}
                />
                <h5>Food: {order.foodType}</h5>
                <p>Number of dishes: {order.dishesCount}</p>
                <div className="consumer-info">
                  {order.status === 'Canceled' ? (
                    <>
                      <p>Status: <span style={{ color: 'red' }}>{order.status}</span></p>
                      <p>Canceled at: {formatDate(order.cancelTime)}</p>
                      <p>Previous Consumer: {order.previousConsumer?.name}</p>
                      <p>Email: {order.previousConsumer?.email}</p>
                      <p>Address: {order.previousConsumer?.address}</p>
                    </>
                  ) : order.status === 'Canceling' ? (
                    <>
                      <p>Status: <span style={{ color: 'orange' }}>Canceling...</span></p>
                      <p>Ordered by: {order.consumerName}</p>
                      <p>Email: {order.consumerEmail}</p>
                      <p>Address: {order.consumerAddress}</p>
                      <p>Ordered at: {formatDate(order.orderTime)}</p>
                      <p>Time remaining: {timeRemaining[order.id] || 0}s</p>
                    </>
                  ) : (
                    <>
                      <p>Ordered by: {order.consumerName}</p>
                      <p>Email: {order.consumerEmail}</p>
                      <p>Address: {order.consumerAddress}</p>
                      <p>Ordered at: {formatDate(order.orderTime)}</p>
                      <p>Status: {order.status}</p>
                    </>
                  )}
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
