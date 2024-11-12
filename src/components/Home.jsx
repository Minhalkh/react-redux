import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {add} from '../Store/cartSlice';

function Home() {
  const [cards,setCards] = useState([]);
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchCards = async()=>{
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json();
      console.log(data)
      setCards(data);
    }
    fetchCards();
  },[])

      const handleadd=(card) =>{
        dispatch(add(card))
      }
  return (
    <div className='grid grid-cols-4 gap-12 mt-12 mx-12'>
      {cards.map((card)=>(
        <div className='w-[260px] h-[350px] border rounded bg-gray-300'>
          <img src={card.img} alt="" className='h-[200px] rounded'/>
          <h1 className='mx-8 mt-6 line-clamp-2 overflow-hidden text-ellipsis'>{card.title}</h1>
          <p className='mx-8'>${card.price}</p>
          <button onClick={()=>handleadd(card)} className='w-[100px] h-[30px] border rounded bg-blue-300 mx-8'>Add Card</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
