import React, { useState } from "react";
import Available from "../../Components/AvailableOrder/AvailableOrder";
import Ordered from "../../Components/OrderCard/OrderCard";
import food from "../../Assets/food.png";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'

const ConsumerHomePage = () => {
  const [availableOrders, setAvailableOrders] = useState([
    { id: 1, photo: food, foodType: "Salad Dish", dishesCount: 2 },
    { id: 2, photo: food, foodType: "Pizza", dishesCount: 4 },
    { id: 3, photo: food, foodType: "Soup", dishesCount: 3 },
  ]);

  const [orderedItems, setOrderedItems] = useState([]); // Initially empty

  // Function to accept an order and move it to "Your Order"
  const onAcceptOrder = (order) => {
    setOrderedItems([...orderedItems, order]); // Add the order to "Your Order"
    setAvailableOrders(availableOrders.filter(item => item.id !== order.id)); // Remove it from available orders
  };

  // Function to cancel an order and move it back to "Available Orders"
  const onCancelOrder = (orderId) => {
    const canceledOrder = orderedItems.find(item => item.id === orderId);
    setAvailableOrders([...availableOrders, canceledOrder]); // Add it back to available orders
    setOrderedItems(orderedItems.filter(item => item.id !== orderId)); // Remove it from "Your Order"
  };

  return (

    <div className="page-container">
      <Header />
      <div className="content-wrapper justify-content-center align-items-center">
        <Available availableOrders={availableOrders} onAcceptOrder={onAcceptOrder} />
        <Ordered orderedItems={orderedItems} onCancelOrder={onCancelOrder} />
      </div>
      <Footer />
    </div>

  );
};

export default ConsumerHomePage;

