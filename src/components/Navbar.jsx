import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Navbar() {
  const items = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userRole')
    localStorage.clear();
    navigate ('/login')
  }
  return (
    <div className='w-full h-[70px] bg-gray-400 '>
        <div className='flex justify-between items-center'>
        <div className='mt-4 ml-4'>
            <Link to='/' className='font-bold text-2xl'>Store</Link>
            </div>   
            <div className='flex items-center mt-4 gap-10 mr-2'>
                <Link to='/cart' className='text-2xl'>Cart</Link>
                <button className='w-[180px] h-[35px] border text-xl'>Add to cart : {items.length} </button>
                <button onClick={handleLogout} className='w-[100px] h-[35px] border rounded hover hover:bg-gray-100'>Log Out</button>
               </div> 
               </div>
    </div>
  )
}

export default Navbar
