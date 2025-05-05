// OrderRequested.js
import React from 'react';
import './OrderRequested.css'; // Import CSS for styling
import { useDispatch } from 'react-redux';
import { addNotification } from '../../redux/notification';

const OrderRequested = ({ order, onAccept }) => {
  const dispatch = useDispatch();

  if (!order) return null; // If no order is passed, return null

  const handleAccept = (order) => {
    onAccept(order);
    
    // Add notification for provider
    dispatch(addNotification({
      type: 'provider_update',
      message: `A volunteer has accepted to deliver your order.`,
      target: 'provider',
      recipient: order.provider.email, // If you have provider email
      orderId: order.id
    }));
    
    
  };

  return (
    <div className="order-requested-container">
      <h2>Order Details</h2>
      <div className="order-details">
        <h3>{order.name}</h3>
        <p><strong>Details:</strong> {order.details}</p>
        <p><strong>Provider:</strong> {order.provider.name}</p>
        <p><strong>Provider Address:</strong> {order.provider.address}</p>
        <p><strong>Customer:</strong> {order.customer.name}</p>
        <p><strong>Customer Address:</strong> {order.customer.address}</p>
      </div>

      <button className="accept-btn" onClick={() => handleAccept(order)}>
        Accept
      </button>
    </div>
  );
};

export default OrderRequested;
