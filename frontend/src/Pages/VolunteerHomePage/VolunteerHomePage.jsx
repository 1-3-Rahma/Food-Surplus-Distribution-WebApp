import React, { useState } from 'react';
import OrderWillBeDelivered from '../../Components/OrderWillBeDelivered/OrdersWillBeDelivered';
import AcceptedOrders from '../../Components/AcceptedOrders/AcceptedOrders';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer2';
import Header from '../../Components/Header/Header'


const VolunteerHomePage = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Order 1', details: '2 meals of pasta and 3 salads.'},
    { id: 2, name: 'Order 2', details: '2 meals of mahshy and 2 mol5y.' },
    { id: 3, name: 'Order 3', details: '4 meals of ptats and 7 hwawshy.' },
    { id: 6, name: 'Order 4', details: '3 meals of bshamel .' },
    { id: 7, name: 'Order 5', details: '7 meals of zlabya and 3 basbosa.' },
    { id: 8, name: 'Order 6', details: '5 meals of basbosa and 3 konafa.' },
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
    <div className="page-container">
      <Header/>

      <div className="content-wrapper justify-content-center align-items-center">
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

      <Footer/>
    </div>
  );
};

export default VolunteerHomePage;
