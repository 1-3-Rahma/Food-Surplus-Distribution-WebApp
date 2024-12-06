import React, { useRef } from "react";
import styles from './OrderCard.module.css';

const OrderCard = ({ orderedItems, onCancelOrder }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className={styles.ordered_container}>
      <h2 className={styles.text}>Your Order</h2>
      <div className={styles.slider_wrapper}>
        <button className={styles.pad1} onClick={scrollLeft}>
          &lt;
        </button>
        <div className={styles.slider} ref={sliderRef}>
          {orderedItems.length > 0 ? (
            orderedItems.map((order) => (
              <div key={order.id} className={styles.card_container}>
                <img src={order.photo} alt={order.foodType} className={styles.food_image} />
                <h3>Food: {order.foodType}</h3>
                <p>Number of dishes: {order.foodCount}</p>
                <button
                  onClick={() => onCancelOrder(order.id)}
                  className={styles.action_button}
                >
                  Cancel
                </button>
              </div>
            ))
          ) : (
            <p className="no-orders-message">No accepted orders yet!</p>
          )}
        </div>
        <button className={styles.pad2} onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
