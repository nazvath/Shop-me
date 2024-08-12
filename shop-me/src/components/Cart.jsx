import React from 'react';
import {useCart } from './Cartcontext'
import './Cart.css'

function Cart() {
    const {cart, updateQuantity, removeFromCart}= useCart();
const calculateTotalPrice= ()=>{
  return cart.reduce((total,product)=> total+ product.price * product.quantity, 0).toFixed(2)
};


  return (
    <div className='cart'>
      <h2 style={{textAlign:'center' ,color:'green', fontFamily:'initial'}}>Your Cart</h2>
        
       <ul>
        {cart.map((product, index)=>(
<li key={index} className='cart-item'>
    <img src={product.thumbnail} alt={product.title}  className="cart-item-image" />
    <h3 className='cart-item-title'>{product.title} </h3>
<div className="quantity-controls">
  <button onClick={()=> updateQuantity (product.id , product.quantity - 1)}> - </button>
  <span>{product.quantity}</span>
  <button onClick={()=> updateQuantity (product.id , product.quantity + 1)}> + </button>

</div>
   <h4 className="cart-item-price">${(product.price * product.quantity).toFixed(2)}</h4>
   <button onClick={()=> removeFromCart(product.id)} className='remove-item'>Remove</button>
</li>

        ))};
       </ul>
       <h3 className='cart-total'>Total ${calculateTotalPrice()}</h3>
       </div>
       
  );
};
export default Cart