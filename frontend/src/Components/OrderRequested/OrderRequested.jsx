// OrderRequested.js
import React from 'react';
import './OrderRequested.css'; // Import CSS for styling

const OrderRequested = ({ order, onAccept }) => {
  if (!order) return null; // If no order is passed, return null

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

      <button className="accept-btn" onClick={() => onAccept(order)}>
        Accept
      </button>
    </div>
  );
};

export default OrderRequested;
