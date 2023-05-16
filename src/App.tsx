import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;

