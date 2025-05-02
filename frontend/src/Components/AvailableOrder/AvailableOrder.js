import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from './AvailableOrder.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { moveToOrdered } from '../../redux/order';

const AvailableOrders = ({ availableOrders }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.user);

  const handleOrderSelect = (order) => {
    if (!currentUser) {
      alert("Please log in first");
      return;
    }

    dispatch(moveToOrdered({
      orderId: order.id,
      consumerId: currentUser.id,
      consumerName: `${currentUser.firstName} ${currentUser.lastName}`,
      consumerEmail: currentUser.email,
      consumerAddress: currentUser.address
    }));
  };

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
                  onClick={() => handleOrderSelect(order)}
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

