import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const defaultCart = ()=>{
    let  cart = {}

    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i] = 0;
    }
    return cart
}
export const ShopContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState(defaultCart()) 
    function addToCart (itemId){
        setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
    }
    function removeFromCart (itemId){
        setCartItems(prev=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue = {
        cartItems,
        removeFromCart,
        addToCart
    }
    return (
    <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
    )
}