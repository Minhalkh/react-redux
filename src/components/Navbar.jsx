import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div className='w-full h-[70px] bg-gray-400 '>
        <div className='flex justify-between items-center'>
        <div className='mt-4 ml-4'>
            <Link to='/' className='font-bold text-2xl'>Store</Link>
            </div>   
            <div className='flex items-center mt-4 gap-10 mr-10'>
                <Link to='/cart' className='text-2xl'>Cart</Link>
                <button className='w-[180px] h-[35px] border text-xl'>Add to cart : {items.length} </button>
               </div> 
               </div>
    </div>
  )
}

export default Navbar
