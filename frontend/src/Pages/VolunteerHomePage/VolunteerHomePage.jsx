import React, { useState, useEffect } from 'react';
import OrderWillBeDelivered from '../../Components/OrderWillBeDelivered/OrdersWillBeDelivered';
import AcceptedOrders from '../../Components/AcceptedOrders/AcceptedOrders';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer2';
import Header from '../../Components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { addNotification } from '../../redux/notification';

const VolunteerHomePage = () => {
  // Get orders from Redux store
  const reduxOrders = useSelector(state => state.orders.yourOrders) || [];
  const [orders, setOrders] = useState([]);
  const [acceptedOrders, setAcceptedOrders] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Load orders from localStorage and Redux store
  useEffect(() => {
    // Get orders from localStorage
    const savedOrders = localStorage.getItem('consumerOrderedItems');
    const parsedOrders = savedOrders ? JSON.parse(savedOrders) : [];
    
    // Transform consumer orders to volunteer format
    const transformedOrders = parsedOrders.map((order, index) => ({
      id: order.id || index + 1,
      name: `Order ${index + 1}`,
      details: `${order.dishesCount} dishes of ${order.foodType}`,
      provider: {
        name: order.providerName || 'Provider',
        address: order.providerAddress || 'Provider Address'
      },
      customer: {
        name: order.consumerName || 'Customer',
        address: order.consumerAddress || 'Customer Address',
        email: order.consumerEmail
      },
      status: order.status || 'Pending',
      originalOrder: order // Keep original order data
    }));
    
    // Also check Redux store for orders
    const reduxTransformedOrders = reduxOrders
      .filter(order => order.status === 'Pending')
      .map((order, index) => ({
        id: order.id,
        name: `Order ${index + 1}`,
        details: `${order.dishesCount} dishes of ${order.foodType}`,
        provider: {
          name: order.providerName || 'Provider',
          address: order.providerAddress || 'Provider Address'
        },
        customer: {
          name: order.consumerName || 'Customer',
          address: order.consumerAddress || 'Customer Address',
          email: order.consumerEmail
        },
        status: order.status || 'Pending',
        originalOrder: order
      }));
    
    // Combine orders from both sources, removing duplicates by ID
    const allOrders = [...transformedOrders, ...reduxTransformedOrders];
    const uniqueOrders = allOrders.filter((order, index, self) => 
      index === self.findIndex(o => o.id === order.id)
    );
    
    setOrders(uniqueOrders);
    
    // Load accepted orders from localStorage
    const savedAcceptedOrders = localStorage.getItem('volunteerAcceptedOrders');
    if (savedAcceptedOrders) {
      setAcceptedOrders(JSON.parse(savedAcceptedOrders));
    }
  }, [reduxOrders]);
  
  // Save accepted orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('volunteerAcceptedOrders', JSON.stringify(acceptedOrders));
  }, [acceptedOrders]);

  const handleNavigateToOrder = (id) => {
    navigate(`/order/${id}`);
  };

  // Function to handle order acceptance
  const handleAcceptOrder = (order) => {
    // Update order status in Redux if needed
    if (order.originalOrder) {
      // Dispatch action to update order status
      // dispatch(updateOrderStatus({ orderId: order.id, status: 'Accepted' }));
      
      // Add notification for customer
      dispatch(addNotification({
        type: 'volunteer_update',
        message: `A volunteer has accepted your order and will deliver it soon.`,
        target: 'consumer',
        recipient: order.customer.email,
        orderId: order.id
      }));
      
      // Add notification for provider
      dispatch(addNotification({
        type: 'provider_update',
        message: `A volunteer has accepted to deliver an order.`,
        target: 'provider',
        orderId: order.id
      }));
    }
    
    setAcceptedOrders((prevOrders) => [...prevOrders, order]);
    setOrders((prevOrders) =>
      prevOrders.filter((prevOrder) => prevOrder.id !== order.id)
    );
  };

  // Function to handle order cancellation
  const handleCancelOrder = (orderId) => {
    const canceledOrder = acceptedOrders.find((order) => order.id === orderId);
    
    // Update order status in Redux if needed
    if (canceledOrder && canceledOrder.originalOrder) {
      // Dispatch action to update order status
      // dispatch(updateOrderStatus({ orderId: orderId, status: 'Pending' }));
      
      // Add notification for customer
      dispatch(addNotification({
        type: 'volunteer_update',
        message: `A volunteer has canceled your order delivery.`,
        target: 'consumer',
        recipient: canceledOrder.customer.email,
        orderId: orderId
      }));
    }
    
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
