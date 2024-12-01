import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './pages/VolunteerHomePage/VolunteerHomePage';
import ForEachOrderPage from './pages/ForEachOrderRequest/ForEachOrderRequest';
import Provider from './pages/ProviderHomePage/ProviderHomePage';
import HomePage from './pages/Homepage/HomePage.js';
import ProfilePage from './pages/Profile/Profile.js';
import ProviderTacker from "./pages/ProviderTracker/ProviderTracker";
import CustomerTracker from "./pages/CustomerTracker/CustomerTracker";
import './App.css';

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Volunteer />} />
        <Route path="/order/:id" element={<ForEachOrderPage />} />
        <Route path="/Provider" element = {<Provider/>}/>

        <Route path="/ProfilePage" element = {<ProfilePage/>}/>
        <Route path="/HomePage" element = {<HomePage/>}/>
        <Route path="/ProviderTreacker" element = {<ProviderTacker/>}/>
        <Route path="/CustomerTracker" element = {<CustomerTracker/>}/>

      </Routes>
    </Router>


  );
};

export default App;
