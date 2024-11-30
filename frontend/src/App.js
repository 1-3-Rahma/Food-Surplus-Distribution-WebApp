import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './pages/VolunteerHomePage/VolunteerHomePage';
import ForEachOrderPage from './pages/ForEachOrderRequest/ForEachOrderRequest';
import Provider from './pages/ProviderHomePage/ProviderHomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Volunteer />} />
        <Route path="/order/:id" element={<ForEachOrderPage />} />
        <Route path="/Provider" element = {<Provider/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;
