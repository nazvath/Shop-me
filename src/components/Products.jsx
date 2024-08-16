import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
import {useCart} from './Cartcontext'
import Notification from './Notification';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const [cart, setCart]=useState([]);
  const {addToCart}=useCart();
  const [notification, setNotification] = useState({ show: false, message: '' });


  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const productsWithCategories = response.data.products.map(product => ({
          ...product,
          category: product.category || 'Misc' // Ensure every product has a category
        }));
        setProducts(productsWithCategories);
        setFilteredProducts(productsWithCategories);

        // Extract unique categories from the products
        const uniqueCategories = ['All', ...new Set(productsWithCategories.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error('Error fetching Products:', error));
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Use the context's `addToCart` function
    setNotification({ show: true , message:'your product added to cart!'})
  };
  console.log(products);
  console.log(cart);

  return (
    <div>

  <Notification
  message={notification.message}
  show={notification.show}
  onClose={()=>setNotification({show: false , message: ''})}
  />
      <div className='category-buttons'>
        {categories.map(cat => (
          <button key={cat} onClick={() => handleCategoryChange(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <ul className='products'>
        {
          filteredProducts.map((product) => (
            <li key={product.id} className='product-card'>
              <Link to={`/product/${product.id}`}>
                <img className='img' src={product.thumbnail} alt="product image" />
                <h3 className='name1'>{product.title}</h3>
                <p className='price'>${product.price}</p>
              </Link>
              <button onClick={()=> handleAddToCart(product)} className='add-to-cart'>Add to Cart</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Products;
