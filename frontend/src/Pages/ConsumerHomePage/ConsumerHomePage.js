import React, { useState, useEffect } from "react";
import Available from "../../Components/AvailableOrder/AvailableOrder";
import Ordered from "../../Components/OrderCard/OrderCard";
import food from "../../Assets/food.png";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer2';

const ConsumerHomePage = () => {
  // Initial available orders data
  const initialAvailableOrders = [
    { id: 1, photo: food, foodType: "Salad Dish", dishesCount: 2 },
    { id: 2, photo: food, foodType: "Pizza", dishesCount: 4 },
    { id: 3, photo: food, foodType: "Soup", dishesCount: 3 },
    { id: 4, photo: food, foodType: "noodles", dishesCount: 3 },
    { id: 5, photo: food, foodType: "ptats", dishesCount: 2 },
    { id: 6, photo: food, foodType: "zlabya", dishesCount: 4 },
    { id: 7, photo: food, foodType: "mahshy", dishesCount: 9 },
    { id: 8, photo: food, foodType: "mlo5ya", dishesCount: 2 },
    { id: 9, photo: food, foodType: "Soup", dishesCount: 3 },
  ];

  const [availableOrders, setAvailableOrders] = useState(initialAvailableOrders);
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
    setAvailableOrders(initialAvailableOrders);
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
    setAvailableOrders(availableOrders.filter(item => item.id !== order.id));
  };

  // Function to cancel an order and move it back to "Available Orders"
  const onCancelOrder = (orderId) => {
    const canceledOrder = orderedItems.find(item => item.id === orderId);
    const { addedAt, ...orderWithoutTimestamp } = canceledOrder;
    setAvailableOrders([...availableOrders, orderWithoutTimestamp]);
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