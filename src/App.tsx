import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import "./App.css";
import PrivacyPolicy from './pages/privacy';
import TermsAndCondition from './pages/terms';

const App: React.FC = () => (
  <div>
    <Routes>
      <Route path="/home" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
      <Route path="/app-privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*/*" element={<Navigate to="/home" />} />
    </Routes>
  </div>
);

export default App;