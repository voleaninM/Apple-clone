import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import Product from '../../components/product/Product'
import { ShopContext } from '../../context/contextProvider'
import { PRODUCTS } from '../../products'
import './Cart.scss'
import CartItem from './CartItem'

export default function Cart() {
    const {cartItems} = useContext(ShopContext);
  
  return (
    <div className='cart'>
            <Header/>
            <div className='cart-container'>
                <h1>Available Products</h1>
                <div className='products'>
                    {PRODUCTS.map(product=>{
                        if(cartItems[product.id]!==0){
                            return <CartItem key={product.id} data={product}/>
                        }
                    })}
                </div>
            </div>
        </div>
  )
}
