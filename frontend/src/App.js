import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './pages/VolunteerHomePage/VolunteerHomePage';
import ForEachOrderPage from './pages/ForEachOrderRequest/ForEachOrderRequest';
import Provider from './pages/ProviderHomePage/ProviderHomePage';
// import './App.css';
// import HomePage from './page/Homepage/HomePage.js';
// import ProfilePage from './page/Profile/Profile.js';
// import ProviderTacker from "./page/ProviderTracker/ProviderTracker";
// import CustomerTracker from "./page/CustomerTracker/CustomerTracker";

const App = () => {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Volunteer />} />
        <Route path="/order/:id" element={<ForEachOrderPage />} />
        <Route path="/Provider" element = {<Provider/>}/>
      </Routes>
    </Router>

<div className="App">
{/* <HomePage /> */}
<ProfilePage />
{/* <ProviderTacker /> */}
{/* <CustomerTracker/> */}
</div>
</>
  );
};

export default App;
