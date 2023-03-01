import React, { useContext } from 'react'
import { ShopContext } from '../../context/contextProvider'
import './Product.scss'
export default function Product({data}) {
  const {addToCart,cartItems} = useContext(ShopContext);
  const {productImage,productName,price,id} = data;
  return (
    <div className='product'>
      <img src={productImage} alt='product'></img>
      <div className='details'>
        <h2>{productName}</h2>
        <div className='price'>
        <p>Price: {price}$</p>
        <button 
        onClick={(e)=>addToCart(id)}
        className='button'>
        Add to Cart {cartItems[id]>0&& <span>({cartItems[id]})</span>}
        </button>
        </div>
      </div>
    </div>
  )
}
