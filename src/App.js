import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/Admin/AdminDashboard';
import { Provider } from 'react-redux';
import {store} from './Store/store'
import CartPage from './pages/CartPage';

function App() {
  const isLoggedIn = localStorage.getItem('userEmail');
  const userRole = localStorage.getItem('userRole');
  return (
    <>
    <Provider store={store}>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route
          path="/admin-dashboard"
          element={
            isLoggedIn && userRole === 'admin' ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </Router>
    </Provider>
    </>
  );
}

export default App;