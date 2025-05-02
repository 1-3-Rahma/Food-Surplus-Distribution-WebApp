import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from './AvailableOrder.module.css';



const AvailableOrders = ({ order, availableOrders, onNavigateToOrder, onAcceptOrder }) => {
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
    <div className={styles.available_container}>
      <div className={styles.section}>
        <h2 className={styles.text}> Available Orders </h2>
      </div>
      <div className={styles.slider_wrapper}>
        <button className={styles.pad1} onClick={scrollLeft}>
          &lt;
        </button>
        <div className={styles.slider} ref={sliderRef}>
          {/* Render available orders */}
          {availableOrders.length > 0 ? (
            availableOrders.map((order) => (
              <div key={order.id} className={styles.available_card}>
                <img src={order.photo} alt={order.foodType} className={styles.food_image} />
                <h3>Food: {order.foodType}</h3>
                <p>Number of dishes: {order.dishesCount}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click navigation when clicking the button
                    onAcceptOrder(order);
                  }}
                  className={styles.accept_btn}
                >
                  Order
                </button>
              </div>
            ))
          ) : (
            <div className="no-orders-message">
              <p>No orders at the moment!</p>
            </div>
          )}
        </div>
        <button className={styles.pad2} onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AvailableOrders;

