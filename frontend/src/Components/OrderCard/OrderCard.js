import React, { useRef, useState, useEffect } from "react";
import styles from './OrderCard.module.css';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { moveToOrdered, cancelOrder } from '../../redux/order';

const OrderCard = ({ onCancelOrder, errorMessage, onReset }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  
  // Get current user and orders from Redux store
  const currentUser = useSelector(state => state.auth.user);
  const yourOrders = useSelector(state => state.orders.yourOrders) || [];
  const [showCancelButtons, setShowCancelButtons] = useState({});

  // Update cancel button visibility based on order time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const newShowCancelButtons = {};
      
      yourOrders.forEach(order => {
        if (order.orderTime) {
          const timeElapsed = now - new Date(order.orderTime).getTime();
          newShowCancelButtons[order.id] = timeElapsed <= 60000; // 1 minute cancel window
        }
      });
      
      setShowCancelButtons(newShowCancelButtons);
    }, 1000);

    return () => clearInterval(interval);
  }, [yourOrders]);

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

  const handleCancelOrder = (orderId) => {
    try {
      dispatch(cancelOrder({ orderId }));
      if (onCancelOrder) {
        onCancelOrder(orderId);
      }
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleOrderDetails = (orderId) => {
    navigate("/CustomerTracker");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const handleReset = () => {
    if (onReset) {
      onReset();
    }
  };

  return (
    <div className={styles.container}>
      <div >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <h2 className={styles.text}>Your Orders</h2>
          <button 
            onClick={handleReset}
            style={{
              padding: '5px 10px',
              backgroundColor: '#90694C',
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
        <p style={{ marginTop: '-5px', fontSize: '0.9em', color: '#666', marginLeft: '115px' }}>
          You have up to 1 minute to cancel your order before it's processed.
        </p>
        {errorMessage && (
          <span style={{ 
            color: 'red', 
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '5px 10px',
            borderRadius: '4px',
            backgroundColor: '#af826094',
            position: 'absolute',
            left: '50%',
            top: '50%',
            textAlign: 'center',
            transform: 'translate(-50%, -50%)'
          }}>
            {errorMessage}
          </span>
        )}
      </div>

      <div className={styles.slider_wrapper}>
        <button 
          className={styles.nav_button} 
          onClick={scrollLeft}
          disabled={!yourOrders.length}
        >
          &lt;
        </button>
        
        <div className={styles.slider} ref={sliderRef}>
          {yourOrders.length > 0 ? (
            yourOrders.map((order) => (
              <div 
                key={order.id} 
                className={styles.card_container}
                onClick={() => handleOrderDetails(order.id)}
              >
                <div className={styles.card_header}>
                  <img 
                    src={order.photo} 
                    alt={order.foodType} 
                    className={styles.food_image} 
                  />
                  <div className={styles.status_badge}>
                    {order.status || 'Pending'}
                  </div>
                </div>

                <div className={styles.card_content}>
                  <h3 className={styles.food_title}>
                    {order.foodType}
                  </h3>
                  <p className={styles.dishes_count}>
                    Dishes: {order.dishesCount}
                  </p>
                  
                  <div className={styles.consumer_info}>
                    <p>Ordered: {formatDate(order.orderTime)}</p>
                  </div>

                  {showCancelButtons[order.id] && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCancelOrder(order.id);
                      }}
                      className={styles.cancel_button}
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className={styles.no_orders}>
              <p>No orders available</p>
            </div>
          )}
        </div>

        <button 
          className={styles.nav_button} 
          onClick={scrollRight}
          disabled={!yourOrders.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default OrderCard;