import React from "react";
import Ordered from "../../Components/Ordered/Ordered";
import food from "../../Assets/food.png";
import photo from "../../Assets/photo.png"
import Volunteer from '../../Components/Volunteer/Volunteer'
import Footer from '../../Components/Footer/Footer2';
import Available from "../../Components/Available/Available";
import Header from '../../Components/Header/Header'
import { useSelector } from 'react-redux';

const ProviderHomePage = () => {
  // Get orders from Redux store
  const availableOrders = useSelector(state => state.orders.availableOrders);
  const orderedItems = useSelector(state => state.orders.yourOrders); // Get ordered items from Redux

  const volunteers = [
    {
      id: 1,
      photo: photo,
      name: "Mahmoud Ahmed",
      foodPhoto: food,
      food: "Sandwich",
      foodCount: 3,
    },
    {
      id: 2,
      photo: photo,
      name: "Mohamed Ahmed",
      foodPhoto: food,
      food: "Pizza",
      foodCount: 4,
    },
    {
      id: 3,
      photo: photo,
      name: "Hossam Mohamed",
      foodPhoto: food,
      food: "Soup",
      foodCount: 5,
    },
    {
      id: 3,
      photo: photo,
      name: "Malek Adel",
      foodPhoto: food,
      food: "Soup",
      foodCount: 5,
    },
    {
      id: 3,
      photo: photo,
      name: "Salem Ahmed",
      foodPhoto: food,
      food: "Soup",
      foodCount: 5,
    },
    {
      id: 3,
      photo: photo,
      name: "Slem Islam",
      foodPhoto: food,
      food: "Soup",
      foodCount: 5,
    },
    {
      id: 3,
      photo: photo,
      name: "Ahmed Mohamed",
      foodPhoto: food,
      food: "Soup",
      foodCount: 5,
    },
  ];

  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper justify-content-center align-items-center">
        <Available availableOrders={availableOrders} />
        <Ordered orderedItems={orderedItems} />
        <Volunteer volunteers={volunteers} />
      </div>
      <Footer />
    </div>
  );
};

export default ProviderHomePage;
