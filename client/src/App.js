import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Component 
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import BookUser from './components/BookUser';
// React-toast config
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/book/:user' element={<BookUser />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;