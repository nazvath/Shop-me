import React, { useRef } from 'react'
import Notification from './Notification';
import { useNavigate } from 'react-router-dom';
import { useCart } from './Cartcontext';
import "./Checkout.css"

function Checkout() {
  const {clearCart}=useCart();
  const navigate= useNavigate();
  const formRef=useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Form submitted');
        clearCart();

        if(formRef.current){
          formRef.current.reset();
        }
        alert('your Order Placed Successfully');
        navigate('/')
      
    };
  return (
    <div className="checkout">
      <h2 className='Check'>Checkout Form</h2>
      <form className="purchase-form" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td><input type="text" name="name" required /></td>
            </tr>
            <tr>
              <td>Address:</td>
              <td><input type="text" name="address" required /></td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td><input type="Number" name="Number" required /></td>
            </tr>
            <tr>
              <td>Payment Method:</td>
              <td>
                <select name="payment" required>
                  <option value="credit">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="6">
                <button type="submit" className="submit-order">Place Order</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Checkout