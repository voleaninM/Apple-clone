import React, { useContext } from 'react'
import {BsTrash} from 'react-icons/bs'
import { ShopContext } from '../../context/contextProvider';
import './CartItem.scss'

export default function CartItem({data}) {
    const {productImage,productName,price,id} = data;
    const {removeFromCart,cartItems} = useContext(ShopContext)
  return (
    <div className='cartItem'>
    <img src={productImage} alt='product'></img>
    <div className='details'>
      <h2>{productName}</h2>
      <div className='price'>
      <p>Price: {price}$</p>
      <button 
      onClick={(e)=>removeFromCart(id)}
      className='button-remove'>
      <BsTrash/>{cartItems[id]>0&& <span>({cartItems[id]})</span>}
      </button>
      </div>
    </div>
  </div>
  )
}
