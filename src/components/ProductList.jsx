import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import '../style/ProductList.css'

function ProductList({ products, addedItems, onAddToCart }) {
  return (
    <section id="products" className="products-section">
      <Container>
        <div className="section-heading">
          <span>Featured Products</span>
          <h2>Clothing Store Collection</h2>
          <p>Choose your favorite styles and add them to the shopping cart.</p>
        </div>

        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} sm={6} lg={4}>
              <ProductCard
                product={product}
                isAdded={addedItems.includes(product.id)}
                onAddToCart={onAddToCart}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ProductList
