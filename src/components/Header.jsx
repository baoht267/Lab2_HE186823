import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import '../style/Header.css'

const shopLogo =
  'https://1.bp.blogspot.com/-406Rx4P0FtA/WqjrTaaHo7I/AAAAAAAAJsY/0DGKBeCyxLs7uuvBkQBoofhi-e4TFqFUwCLcBGAs/s1600/Manchester%2BUnited.png'

function Header({ cartCount }) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="shop-navbar">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold brand-text">
          <img src={shopLogo} alt="Shop logo" className="shop-logo" />
          SHOP FASHION
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav.Link href="#cart" className="cart-display">
            <FaShoppingCart aria-hidden="true" />
            <span>Cart</span>
            <Badge bg="danger" pill>
              {cartCount}
            </Badge>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
