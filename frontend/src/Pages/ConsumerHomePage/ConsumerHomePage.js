import React, { useState, useEffect } from "react";
import Available from "../../Components/AvailableOrder/AvailableOrder";
import Ordered from "../../Components/OrderCard/OrderCard";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer2';
import { useSelector, useDispatch } from 'react-redux';
import { setAvailableOrders, setYourOrders, clearError } from '../../redux/order';


const ConsumerHomePage = () => {
  const dispatch = useDispatch();
  // Get available orders and error from Redux store
  const availableOrders = useSelector(state => state.orders.availableOrders);
  const yourOrders = useSelector(state => state.orders.yourOrders);
  const reduxError = useSelector(state => state.orders.error);
  
  const [orderedItems, setOrderedItems] = useState(() => {
    // Load ordered items from localStorage on initial render
    const savedItems = localStorage.getItem('consumerOrderedItems');
    if (savedItems) {
      const parsedItems = JSON.parse(savedItems);
      // Ensure each item has a photo
      return parsedItems.map(item => ({
        ...item,
        photo: item.photo 
      }));
    }
    return [];
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Update error message when Redux error changes
  useEffect(() => {
    if (reduxError) {
      setErrorMessage(reduxError);
    } else {
      setErrorMessage("");
    }
  }, [reduxError]);

  // Save ordered items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('consumerOrderedItems', JSON.stringify(orderedItems));
  }, [orderedItems]);

  // Initialize Redux store with images if needed
  useEffect(() => {
    if (availableOrders.length > 0) {
      const ordersWithImages = availableOrders.map(order => ({
        ...order,
        photo: order.photo 
      }));
      dispatch(setAvailableOrders(ordersWithImages));
    }
  }, []);

  // Function to reset the state
  const resetState = () => {
    // Clear local state
    setOrderedItems([]);
    localStorage.removeItem('consumerOrderedItems');
    setErrorMessage("");
    dispatch(clearError());

    // Clear Redux store orders
    dispatch(setYourOrders([]));
    
    // Return all ordered items back to available orders with preserved images
    const allOrders = [...orderedItems, ...availableOrders].map(order => ({
      ...order,
      photo: order.photo 
    }));
    dispatch(setAvailableOrders(allOrders));
  };

  // Function to accept an order and move it to "Your Order"
  const onAcceptOrder = (order) => {
    // Clear any existing error messages
    setErrorMessage("");
    dispatch(clearError());
    
    const orderWithTimestamp = {
      ...order,
      photo: order.photo,
      addedAt: Date.now(),
      status: 'Pending',
      orderTime: new Date().toISOString()
    };

    // Update local state
    setOrderedItems([...orderedItems, orderWithTimestamp]);
    
    // Update Redux store
    dispatch(setYourOrders([...yourOrders, orderWithTimestamp]));
    
    // Remove the order from available orders in Redux store
    const updatedAvailableOrders = availableOrders.filter(item => item.id !== order.id);
    dispatch(setAvailableOrders(updatedAvailableOrders));
  };

  // Function to cancel an order and move it back to "Available Orders"
  const onCancelOrder = (orderId) => {
    // Find the order in both local state and Redux store
    const canceledOrder = orderedItems.find(item => item.id === orderId);
    if (!canceledOrder) return;

    // Remove consumer info and keep only basic order info
    const { addedAt, status, orderTime, ...basicOrder } = canceledOrder;
    
    // Update local state
    setOrderedItems(orderedItems.filter(item => item.id !== orderId));
    
    // Update Redux store
    dispatch(setYourOrders(yourOrders.filter(item => item.id !== orderId)));
    
    // Add the order back to available orders with preserved photo
    dispatch(setAvailableOrders([...availableOrders, {
      ...basicOrder,
      photo: canceledOrder.photo
    }]));
    
    // Clear error messages
    setErrorMessage("");
    dispatch(clearError());
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