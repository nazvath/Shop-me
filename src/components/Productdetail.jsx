import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useCart} from './Cartcontext';
import'./Productdetail.css'
import Notification from './Notification';

function Productdetail() {
  const {id}=useParams();
  const[product, setProduct]=useState(null);
  const {addToCart}= useCart();
  const[notification, setNotification]= useState({show: false, message:''})

  useEffect(()=>{
axios.get(`https://dummyjson.com/products/${id}`)
.then(response=> setProduct(response.data))
.catch(error=>console.error('Error Fetching Products'))
  },[id]);

if (!product){
  return <div> Loading....</div>;
}
const handleAddToCart = () => {
  addToCart(product); 
  setNotification({ show: true , message:'your product added to cart!'})
};
  return (
    <div className='product-detail'>
      <Notification 
      message= {notification.message}
      show={notification.show}
      onClose={()=> setNotification({show: false, message: ''})}/>
      <img src={product.thumbnail} alt="" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p className='price'>${product.price}</p>
      <button onClick={handleAddToCart} className='add-to-cart'>Add to Cart</button> 

     </div>
  )
}

export default Productdetail