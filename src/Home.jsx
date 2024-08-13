import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToCart } from './Redux/actions';

function Home() {
    const dispatch=useDispatch();
    const [name, setName] = useState("")
    const clickSaga=()=>{
        dispatch(addToCart(name))
    }

    
  return (
    <>
    <h2>haaai this is home</h2>
    <button onClick={clickSaga}>Click Me to add saga </button>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
    <NavLink to={"/product"}>Go to Product</NavLink>
    </>
  )
}

export default Home