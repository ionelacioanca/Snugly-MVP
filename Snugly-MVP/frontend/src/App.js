import './App.css';
import React from 'react';
import RegisterPage from './pages/RegisterPage.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      
      </Routes>
    </Router>
  );
}

export default App;
