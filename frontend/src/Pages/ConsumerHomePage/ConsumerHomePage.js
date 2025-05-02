import React, { useState, useEffect } from "react";
import Available from "../../Components/AvailableOrder/AvailableOrder";
import Ordered from "../../Components/OrderCard/OrderCard";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer2';
import { useSelector, useDispatch } from 'react-redux';
import { setAvailableOrders } from '../../redux/order';

const ConsumerHomePage = () => {
  const dispatch = useDispatch();
  // Get available orders from Redux store
  const availableOrders = useSelector(state => state.orders.availableOrders);
  const [orderedItems, setOrderedItems] = useState(() => {
    // Load ordered items from localStorage on initial render
    const savedItems = localStorage.getItem('consumerOrderedItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Save ordered items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('consumerOrderedItems', JSON.stringify(orderedItems));
  }, [orderedItems]);

  // Function to reset the state
  const resetState = () => {
    setOrderedItems([]);
    localStorage.removeItem('consumerOrderedItems');
    setErrorMessage("");
  };

  // Function to accept an order and move it to "Your Order"
  const onAcceptOrder = (order) => {
    if (orderedItems.length >= 3) {
      setErrorMessage("You can only have 3 orders at a time.");
      return;
    }
    setErrorMessage("");
    const orderWithTimestamp = {
      ...order,
      addedAt: Date.now()
    };
    setOrderedItems([...orderedItems, orderWithTimestamp]);
    
    // Remove the order from available orders in Redux store
    const updatedAvailableOrders = availableOrders.filter(item => item.id !== order.id);
    dispatch(setAvailableOrders(updatedAvailableOrders));
  };

  // Function to cancel an order and move it back to "Available Orders"
  const onCancelOrder = (orderId) => {
    const canceledOrder = orderedItems.find(item => item.id === orderId);
    const { addedAt, ...orderWithoutTimestamp } = canceledOrder;
    
    // Add the order back to available orders in Redux store
    dispatch(setAvailableOrders([...availableOrders, orderWithoutTimestamp]));
    setOrderedItems(orderedItems.filter(item => item.id !== orderId));
    setErrorMessage("");
  };

  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper justify-content-center align-items-center">
        <Available availableOrders={availableOrders} onAcceptOrder={onAcceptOrder} />
        <Ordered 
          orderedItems={orderedItems} 
          onCancelOrder={onCancelOrder} 
          errorMessage={errorMessage}
          onReset={resetState}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default ConsumerHomePage;