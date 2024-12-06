import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ForEachOrderRequest.css"; // Import the CSS file
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

const ForEachOrderRequestPage = () => {
  const { id } = useParams(); // Get the order ID from the URL
  const navigate = useNavigate();

  // Example data (replace with actual data fetched from backend or context/state)
  const orders = [
    {
      id: 1,
      details: {
        orderDetails: "2 meals of pasta and 3 salads.",
        provider: { name: "Provider A", address: "123 Main St, City" },
        customer: { name: "Customer A", address: "456 Elm St, City" },
      },
    },
    {
      id: 2,
      details: {
        orderDetails: "5 sandwiches and 2 juices.",
        provider: { name: "Provider B", address: "789 Oak St, City" },
        customer: { name: "Customer B", address: "321 Pine St, City" },
      },
    },
    {
        id: 3,
        details: {
          orderDetails: "5 sandwiches and 2 juices.",
          provider: { name: "Provider B", address: "789 Oak St, City" },
          customer: { name: "Customer B", address: "321 Pine St, City" },
        },
      },
      {
        id: 4,
        details: {
          orderDetails: "5 sandwiches and 2 juices.",
          provider: { name: "Provider B", address: "789 Oak St, City" },
          customer: { name: "Customer B", address: "321 Pine St, City" },
        },
      },
      {
        id: 5,
        details: {
          orderDetails: "5 sandwiches and 2 juices.",
          provider: { name: "Provider B", address: "789 Oak St, City" },
          customer: { name: "Customer B", address: "321 Pine St, City" },
        },
      },
    
  ];

  // Find the order by ID
  const order = orders.find((order) => order.id === parseInt(id));

  if (!order) {
    return <p>Order not found.</p>; // Handle case where order ID is invalid
  }

  // Function to handle order acceptance
  const handleAccept = () => {
    alert(`You have accepted Order ID: ${id}`);
    navigate("/"); // Redirect to VolunteerHomePage
  };

  const { orderDetails, provider, customer } = order.details;

  return (
    <div className="page-container">
        <Header/>

         <div className="content-wrapper justify-content-center align-items-center">

         <h1 className="order-heading">Order has been requested </h1>   
          <div className="order-details-page">
            <div className="order-section">
              <h3>Order Requested:</h3>
                <p>{orderDetails}</p>
            </div>

              <div className="order-section">
                <h3>Provider Details:</h3>
                <p>
                  <strong>Name:</strong> {provider.name}
                </p>
                
                <p>
                  <strong>Address:</strong> {provider.address}
                </p>
              </div>
              
              <div className="order-section">
                <h3>Customer Details:</h3>
                <p>
                  <strong>Name:</strong> {customer.name}
                </p>
                <p>
                  <strong>Address:</strong> {customer.address}
                </p>
              </div>
              
              <div className="button-container">
                <button onClick={handleAccept} className="accept-btn">
                  Accept      
                </button>
              </div>
            </div>
            </div>
          <Footer/>
    
    </div>

  );
  
};

export default ForEachOrderRequestPage;
