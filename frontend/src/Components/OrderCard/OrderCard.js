import React, { useRef, useState, useEffect } from "react";
import styles from './OrderCard.module.css';
import { useNavigate } from "react-router-dom";

const OrderCard = ({ orderedItems, onCancelOrder, errorMessage, onReset }) => {
  const sliderRef = useRef(null);
  const [showCancelButtons, setShowCancelButtons] = useState({});

  // Update showCancelButtons state every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const newShowCancelButtons = {};
      
      orderedItems.forEach(order => {
        if (order.addedAt) {
          const timeElapsed = now - order.addedAt;
          newShowCancelButtons[order.id] = timeElapsed <= 60000; // 60000ms = 1 minute
        }
      });
      
      setShowCancelButtons(newShowCancelButtons);
    }, 1000);

    return () => clearInterval(interval);
  }, [orderedItems]);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  const navigate = useNavigate();
  const handleOrderDetails = (e) => {
    // Only navigate if the click wasn't on the cancel button
    if (!e.target.closest('button')) {
      navigate("/CustomerTracker");
    }
  };

  return (
    <div className={styles.ordered_container}>
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <h2 className={styles.text}>Your Order</h2>
          <button 
            onClick={onReset}
            style={{
              padding: '5px 10px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Reset Orders
          </button>
        </div>
        {errorMessage && (
          <span style={{ 
            color: 'red', 
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '5px 10px',
            borderRadius: '4px',
            backgroundColor: '#ffebee',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            {errorMessage}
          </span>
        )}
      </div>
      <div className={styles.slider_wrapper}>
        <button className={styles.pad1} onClick={scrollLeft}>
          &lt;
        </button>
        <div className={styles.slider} ref={sliderRef}>
          {orderedItems.length > 0 ? (
            orderedItems.map((order) => (
              <div key={order.id} className={styles.card_container} onClick={handleOrderDetails}>
                <img src={order.photo} alt={order.foodType} className={styles.food_image} />
                <h3>Food: {order.foodType}</h3>
                <p>Number of dishes: {order.dishesCount}</p>
                {showCancelButtons[order.id] && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click from firing
                      onCancelOrder(order.id);
                    }}
                    className={styles.action_button}
                  >
                    Cancel
                  </button>
                )}
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