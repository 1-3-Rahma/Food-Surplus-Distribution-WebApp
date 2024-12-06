import AddPage from './Pages/AddPage'
import ConsumerHomePage from './Pages/ConstumerHomePage'
import VOrderDetails from './Pages/VoulanterOrderDetails'
import React from 'react';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Volunteer from './Pages/VolunteerHomePage/VolunteerHomePage.jsx';
import ForEachOrderPage from './Pages/ForEachOrderRequest/ForEachOrderRequest.jsx';
import Provider from './Pages/ProviderHomePage/ProviderHomePage.jsx';
import HomePage from './Pages/Homepage/HomePage.js';
import ProfilePage from './Pages/Profile/Profile.js';
import ProviderTacker from "./Pages/ProviderTracker/ProviderTracker.js";
import CustomerTracker from "./Pages/CustomerTracker/CustomerTracker.js";

function App() {
  return (
    <div className="Meal-id">
    <Router>
      <Routes>
        <Route path="/AddPage" element={<AddPage/>} />
        <Route path="/ConsumerHomePage" element={<ConsumerHomePage/>} />
        <Route path="/VoulanterOrderDetails" element={<VOrderDetails/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/order/:id" element={<ForEachOrderPage />} />
        <Route path="/Provider" element = {<Provider/>}/>
        <Route path="/ProfilePage" element = {<ProfilePage/>}/>
        <Route path="/Volunter" element = {<Volunteer/>}/>
        <Route path="/ProviderTracker" element = {<ProviderTacker/>}/>
        <Route path="/CustomerTracker" element = {<CustomerTracker/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
