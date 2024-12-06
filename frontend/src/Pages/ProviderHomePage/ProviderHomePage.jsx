import React from "react";
import Available from "../../Components/Available/Available";
import Ordered from "../../Components/Ordered/Ordered";
import food from "../../Assets/food.png";
import photo from "../../Assets/photo.png"
import Volunteer from '../../Components/Volunteer/Volunteer'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'



const ProviderHomePage = () => {
  const availableOrders = [
    { id: 1, photo: food, foodType: "Salad Dish", dishesCount: 2 },
    { id: 2, photo: food, foodType: "Pizza", dishesCount: 4 },
    { id: 3, photo: food, foodType: "Soup", dishesCount: 3 },
  ];

  const orderedItems = [
    { id: 1, photo: food, foodType: "Sandwich", foodCount: 1 },
    { id: 2, photo: food, foodType: "Burger", foodCount: 2 },
    { id: 3, photo: food, foodType: "Pasta", foodCount: 5 },
    { id: 4, photo: food, foodType: "Burger", foodCount: 7 },
    { id: 5, photo: food, foodType: "Pasta", foodCount: 4 },
    { id: 6, photo: food, foodType: "Burger", foodCount: 9 },

  ];

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
      name: "Ahmed Mohamed",
      foodPhoto: food,
      food: "Soup",
      foodCount: 5,
    },
  ];

  return (
    <div className="page-container">
    <Header/>
     <div className="content-wrapper justify-content-center align-items-center">
     <Available availableOrders={availableOrders} />
      <Ordered orderedItems={orderedItems} />
      <Volunteer volunteers={volunteers} />
     </div>
    <Footer/>
   </div>

  );
};

export default ProviderHomePage;
