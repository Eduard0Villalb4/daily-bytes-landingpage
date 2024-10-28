import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/contact';
import TAPrivacyPolicy from './pages/ta-privacy';
import TATermsAndCondition from './pages/ta-terms';
import "./App.css";

const App: React.FC = () => (
  <div>
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="/privacy-policy" element={<TAPrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TATermsAndCondition />} />
      <Route path="/contact" element={<Contact />} />


      <Route path="**" element={<Navigate to="" />} />
    </Routes>
  </div>
);

export default App;