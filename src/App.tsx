import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.scss';
import { useSelector } from 'react-redux';
import { Home } from './pages/Home';

const App: React.FC = () => {
  const token = useSelector((state: any) => state.user.token);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {!token &&
        <>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        </>
        }
      </Routes>
    </Router>
  );
};

export default App;

