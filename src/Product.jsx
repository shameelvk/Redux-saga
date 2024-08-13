import React from 'react'
import { useSelector } from 'react-redux'

function Product() {
    const value=useSelector((state)=>state.Reducer1.product)
    console.log(value);
    
  return (
    <>
    <div>Product</div>
    {value}
    
    
    </>
  )
}

export default Product