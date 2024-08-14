import React from 'react';
import './App.css'
import Hero from './components/Hero'
import Products from './components/Products'
import ProductDetail from './components/Productdetail';
import { CartProvider } from './components/Cartcontext';
import Cart from './components/Cart'
import Layout from './components/Layout';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Checkout from './components/Checkout';


function App(){
const router = createBrowserRouter([
{
path:"/",
element:<Layout/>,
children:[
  {
    path:"/",
    element:<Hero/>
  },
  {
    path:"/products",
    element:<Products/>
  },
  {
    path: "/product/:id",  
    element: <ProductDetail />
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path:"/checkout",
    element:<Checkout/>
  }

]  
}
]);
return(
  <CartProvider>
<RouterProvider router={router}/>
</CartProvider>
);
}
export default App;
