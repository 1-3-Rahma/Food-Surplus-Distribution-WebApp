import React, { useState } from 'react';
import OrderWillBeDelivered from '../../components/OrderWillBeDelevered/OrdersWillBeDelivered';
import AcceptedOrders from '../../components/AcceptedOrderes/AcceptedOrders';
import { useNavigate } from 'react-router-dom';


const VolunteerHomePage = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Order 1', details: 'Details about order 1.' },
    { id: 2, name: 'Order 2', details: 'Details about order 2.' },
    { id: 3, name: 'Order 3', details: 'Details about order 3.' },
    { id: 4, name: 'Order 4', details: 'Details about order 4.' },
    { id: 5, name: 'Order 5', details: 'Details about order 5.' },
  ]);
  const navigate = useNavigate();
  const handleNavigateToOrder = (id) => {
    navigate(`/order/${id}`);
  };

  const [acceptedOrders, setAcceptedOrders] = useState([]);

  // Function to handle order acceptance
  const handleAcceptOrder = (order) => {
    setAcceptedOrders((prevOrders) => [...prevOrders, order]);
    setOrders((prevOrders) =>
      prevOrders.filter((prevOrder) => prevOrder.id !== order.id)
    );
  };

  // Function to handle order cancellation
  const handleCancelOrder = (orderId) => {
    const canceledOrder = acceptedOrders.find((order) => order.id === orderId);
    setOrders((prevOrders) => [...prevOrders, canceledOrder]);
    setAcceptedOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
  };

  return (
    <div className="volunteer-homepage">
      <OrderWillBeDelivered
        orders={orders}
        onAcceptOrder={handleAcceptOrder}
        onNavigateToOrder={handleNavigateToOrder}
      />
      <AcceptedOrders
        acceptedOrders={acceptedOrders}
        onCancelOrder={handleCancelOrder}
      />
    </div>
  );
};

export default VolunteerHomePage;
