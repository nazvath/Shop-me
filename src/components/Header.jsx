import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import { useCart } from './Cartcontext';
import './Header.css'

function Header () {
  const { cart } = useCart();
const totalQuantity = cart.reduce((sum, item)=> sum+item.quantity , 0)

  return (
    <>
<Navbar expand="lg" className="navbar">
  <Container>
    <Navbar.Brand as={Link} to="/products" className="pacifico-regular">Shop-me</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='ms-auto'>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/cart">Cart<sup>{totalQuantity}</sup></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  
    </>
  );
}

export default Header;