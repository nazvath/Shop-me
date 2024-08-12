import React from 'react'
import {Link} from 'react-router-dom'
import { useCart } from './Cartcontext';
import './Header.css'


function Header () {
  const { cart } = useCart();
const totalQuantity = cart.reduce((sum, item)=> sum+item.quantity , 0)

  return (

   <div className='flex'>
    <ul className='list-style'>
    <li className='pacifico-regular'><Link to="/products" style={{marginRight:"800px", fontSize:'1.1em', fontStyle:'inherit', color:'ButtonHighlight'}}>Shop-me</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/cart">Cart<sup>{totalQuantity}</sup></Link></li>
    </ul>
   </div>
  

  );
}

export default Header;