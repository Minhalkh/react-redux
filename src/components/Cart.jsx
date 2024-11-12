import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/cartSlice';

function Cart() {
    const cards=useSelector(state=>state.cart);
    const dispatch= useDispatch();
    const handleremove = (cardId)=>{
        dispatch(remove(cardId))
    }
  return (
    <div className=' bg-black'>
      {cards.map((card)=>{
        <div className='w-[1000px] h-[50px] bg-black border rounded'>
            <img src={card.img} alt="" />
            <h1>{card.title}</h1>
            <h1>{card.price}</h1>
            <button onClick={()=>handleremove(card.id)}>Remove</button>
        </div>
      })}
    </div>
  )
}

export default Cart
