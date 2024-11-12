import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/Admin/AdminPage';
import { Provider } from 'react-redux';
import {store} from './Store/store'
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </Router>
    </Provider>
    </>
  );
}

export default App;
