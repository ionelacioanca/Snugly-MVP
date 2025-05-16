import './App.css';
import React from 'react';
import RegisterPage from './pages/RegisterPage.jsx';
import BabyPage from './pages/BabyPage.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/baby" element={<BabyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
