import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import AddPage from './Pages/AddPage/AddPage.js'
import ConsumerHomePage from './Pages/ConsumerHomePage/ConsumerHomePage.js'
import VOrderDetails from './Pages/VolunteerOrderDetailsPage/VolunteerOrderDetails.js'
import React from 'react';
import Volunteer from './Pages/VolunteerHomePage/VolunteerHomePage.jsx';
import ForEachOrderPage from './Pages/ForEachOrderRequest/ForEachOrderRequest.jsx';
import Provider from './Pages/ProviderHomePage/ProviderHomePage.jsx';
import HomePage from './Pages/Homepage/HomePage.js';
import ProfilePage from './Pages/Profile/Profile.js';
import ProviderTracker from "./Pages/ProviderTracker/ProviderTracker.js";
import CustomerTracker from "./Pages/CustomerTracker/CustomerTracker.js";
import LoginPage from "./Pages/LoginPage/LoginPage.js";
import SignUpPage from "./Pages/SignUpPage/SignUpPage.js";
import NotificationsPage from './Pages/NotificationsPage/NotificationsPage.js';


function App() {
  return (
    <div className="Meal-id">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />

        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/SignUp" element={<SignUpPage/>} />

        <Route path="/Notifications" element={<NotificationsPage/>} />
       
        <Route path="/Provider" element = {<Provider/>}/>
        <Route path="/ProviderTracker" element = {<ProviderTracker/>}/>
        
        <Route path="/Consumer" element={<ConsumerHomePage/>} />
        <Route path="/CustomerTracker" element = {<CustomerTracker/>}/>
        
        <Route path="/Volunteer" element = {<Volunteer/>}/>       
        <Route path="/order/:id" element={<ForEachOrderPage />} />
        <Route path="/VolunteerOrderDetails" element={<VOrderDetails/>} />
        
        <Route path="/ProfilePage" element = {<ProfilePage/>}/>       
        <Route path="/AddPage" element={<AddPage/>} />
       
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
