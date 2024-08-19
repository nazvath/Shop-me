import React, { useState, createContext, useContext } from 'react'
import "./Checkout.css"

const CartContext = createContext();

export const useCart =()=>{
    return useContext(CartContext);

};
 export const CartProvider =({children})=>{
    const [cart, setCart]= useState([]);

    const addToCart=(product)=>{
      const existingProducts=cart.find(item=> item.id===product.id);
      if (existingProducts){
        setCart(cart.map(item=> item.id===product.id ? {...item, quantity: item.quantity + 1 }: item

        ));
      }
      else{
        setCart([...cart, {...product, quantity: 1}]);
      }
    };
  
    const updateQuantity=(productId, quantity)=>{
      setCart(cart.map(item=>item.id===productId ? { ...item, quantity : Math.max(1, quantity)}: item
     ));
    };
    const removeFromCart=(productId)=>{
      setCart(cart.filter(item=> item.id !== productId));
    };

    const clearCart=()=>{
      setCart([]);
    };

  return (
   <CartContext.Provider value={{cart,addToCart, updateQuantity, removeFromCart, clearCart}}>
    {children}
    </CartContext.Provider>
  );
};

