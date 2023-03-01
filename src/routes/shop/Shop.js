import React, { useContext } from 'react'
import './Shop.scss'
import Header from '../../components/header/Header'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/contextProvider'
import Product from '../../components/product/Product'

export default function Shop() {
    const {cartItems} = useContext(ShopContext)
    console.log(cartItems)
   return (
        <div className='shop'>
            <Header/>
            <div className='shop-container'>
                <h1>Available Products</h1>
                <div className='products'>
                    {PRODUCTS.map(product=>(
                        <Product 
                        data={product}
                        key={product.id}
                      />
                    ))}
                </div>
            </div>
        </div>
  )
}
