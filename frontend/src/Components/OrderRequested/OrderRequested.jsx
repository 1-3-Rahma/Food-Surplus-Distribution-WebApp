// OrderRequested.js
import React, { useEffect, useState } from 'react';
import './OrderRequested.css'; // Import CSS for styling
import { useDispatch, useSelector } from 'react-redux';
import { addNotification } from '../../redux/notification';

const OrderRequested = ({ order, onAccept }) => {
  const dispatch = useDispatch();
  const [orderDetails, setOrderDetails] = useState(null);
  const auth = useSelector(state => state.auth);
  
  useEffect(() => {
    if (order) {
      // If order already has all the details we need
      if (order.provider && order.customer && order.details) {
        setOrderDetails(order);
      } else {
        // Try to fetch more details about the order
        const fetchOrderDetails = async () => {
          try {
            // First try to get from localStorage
            const savedOrders = localStorage.getItem('consumerOrderedItems');
            const parsedOrders = savedOrders ? JSON.parse(savedOrders) : [];
            
            // Find the matching order
            const matchingOrder = parsedOrders.find(o => o.id === order.id);
            
            if (matchingOrder) {
              // Transform to the format we need
              const enhancedOrder = {
                ...order,
                name: `Order ${matchingOrder.id}`,
                details: `${matchingOrder.dishesCount} dishes of ${matchingOrder.foodType}`,
                provider: {
                  name: matchingOrder.providerName || 'Provider',
                  address: matchingOrder.providerAddress || 'Provider Address',
                  email: matchingOrder.providerEmail
                },
                customer: {
                  name: matchingOrder.consumerName || 'Customer',
                  address: matchingOrder.consumerAddress || 'Customer Address',
                  email: matchingOrder.consumerEmail
                }
              };
              setOrderDetails(enhancedOrder);
            } else {
              // If not found in localStorage, use the original order
              setOrderDetails(order);
            }
          } catch (error) {
            console.error("Error fetching order details:", error);
            setOrderDetails(order);
          }
        };
        
        fetchOrderDetails();
      }
    }
  }, [order]);

  if (!orderDetails) return null; // If no order is passed or details not loaded, return null

  const handleAccept = () => {
    onAccept(orderDetails);
    
    // Add notification for provider
    dispatch(addNotification({
      type: 'provider_update',
      message: `A volunteer has accepted to deliver your order.`,
      target: 'provider',
      recipient: orderDetails.provider.email,
      orderId: orderDetails.id
    }));
    
    // Add notification for customer
    dispatch(addNotification({
      type: 'volunteer_update',
      message: `A volunteer has accepted your order and will deliver it soon.`,
      target: 'consumer',
      recipient: orderDetails.customer.email,
      orderId: orderDetails.id
    }));
  };

  return (
    <div className="order-requested-container">
      <h2>Order Details</h2>
      <div className="order-details">
        <h3>{orderDetails.name || `Order ${orderDetails.id}`}</h3>
        <p><strong>Details:</strong> {orderDetails.details}</p>
        
        <div className="details-section">
          <h3>Provider Details:</h3>
          <p><strong>Name:</strong> {orderDetails.provider.name}</p>
          <p><strong>Address:</strong> {orderDetails.provider.address}</p>
        </div>
        
        <div className="details-section">
          <h3>Customer Details:</h3>
          <p><strong>Name:</strong> {orderDetails.customer.name}</p>
          <p><strong>Address:</strong> {orderDetails.customer.address}</p>
        </div>
      </div>

      <button className="accept-btn" onClick={handleAccept}>
        Accept
      </button>
    </div>
  );
};

export default OrderRequested;
