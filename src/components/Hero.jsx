import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/image1.png';
import Button from 'react-bootstrap/Button';
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.jpg';
import './Hero.css'
import {useNavigate} from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();
  return (
    <div>
   <Carousel>
      <Carousel.Item className='carousel1'> 
      <img src={image2} alt="" className='d-block w-100 custom-image'/>
        <Carousel.Caption className='color1'>
        <Button className='button1' variant="warning" onClick={() => navigate('/Products')}  >SHOP NOW</Button>{' '}
          <h3 style={{color:'hotpink', fontSize:'3em', }}>Exclusive OFFERS</h3>
          <p className='p1'>Shop Smarter, Not Harder</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel2'>
      <img src={image1} alt="" className='d-block w-100 custom-image'/>
        <Carousel.Caption className='color3'>
        <Button className='button2' variant="warning" onClick={() => navigate('/Products')}  >SHOP NOW</Button>{' '}
          <h3 className='title2'>Everyday Grocery.</h3>
          <p className='p2'></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel3'>
      <img src={image3} alt="" className='d-block w-100 custom-image' />
        <Carousel.Caption className='color3'>
        <Button className='button3'  variant="warning" onClick={() => navigate('/Products')}  >SHOP NOW</Button>{' '}
          <h3 className='h3'style={{color:'whitesmoke', margin:'10px', fontSize:'3em'}}>Unlock new Fashion</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    </div>
  )
}

export default Hero;