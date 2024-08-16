import React, { useState ,useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/image1.png';
import Button from 'react-bootstrap/Button';
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.jpg';
import './Hero.css'
import {useNavigate} from 'react-router-dom'
import Footer from'./Footer'

function Hero() {
  const navigate = useNavigate();
  const [product, setProduct]=useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProduct(data.products.slice(4, 12))); // Adjust the number of products to display
  }, []);

  return (
    <div className='hero-container'>
   <Carousel>
      <Carousel.Item className='carousel1 '> 
      <img src={image2} alt="" className='d-block w-100 custom-image'/>
        <Carousel.Caption className='color1'>
        <Button className='button1' variant="warning" onClick={() => navigate('/Products')}  >SHOP NOW</Button>{' '}
          <h3 style={{color:'hotpink', fontSize:'3em', }}>Exclusive OFFERS</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel2'>
      <img src={image1} alt="" className='d-block w-100 custom-image'/>
        <Carousel.Caption className='color3'>
        <Button className='button2' variant="warning" onClick={() => navigate('/Products')}  >SHOP NOW</Button>{' '}
          <h3 className='second' style={{color:"black", marginRight:'65px'}}>Everyday Grocery!</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel3'>
      <img src={image3} alt="" className='d-block w-100 custom-image ' />
        <Carousel.Caption className='color3'>
        <Button className='button3'  variant="warning" onClick={() => navigate('/Products')}  >SHOP NOW</Button>{' '}
          <h3 className='h3'style={{color:'whitesmoke', margin:'10px', fontSize:'3em'}}>Unlock new Fashion</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 


<div className='product-list'>
        <h2 style={{display:'flex', justifyContent:'center', color:'green', fontFamily:'monospacegit init'}}>FLASH SALE!</h2>
        <div className='products-container'>
          {product.map(item => (
            <div key={item.id} className='product-item'>
              <img src={item.thumbnail} alt={product.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
        </div>
    
    <Footer/>
    </div>

  );
  
}


export default Hero;