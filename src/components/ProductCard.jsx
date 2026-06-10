import { Badge, Button, Card } from 'react-bootstrap'
import { FaCheck, FaShoppingCart } from 'react-icons/fa'
import '../style/ProductCard.css'

function ProductCard({ product, isAdded, onAddToCart }) {
  return (
    <Card className="product-card h-100">
      <div className="product-image-wrap">
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Badge bg={product.status === 'In Stock' ? 'success' : 'warning'} className="status-badge">
          {product.status}
        </Badge>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="product-description">{product.description}</Card.Text>
        <div className="product-meta">
          <span className="product-price">{product.price}</span>
          <span>{product.category}</span>
        </div>
        <Button
          variant={isAdded ? 'secondary' : 'success'}
          disabled={isAdded}
          className="mt-auto add-button"
          onClick={() => onAddToCart(product.id)}
        >
          {isAdded ? (
            <>
              <FaCheck aria-hidden="true" />
              Added to Cart
            </>
          ) : (
            <>
              <FaShoppingCart aria-hidden="true" />
              Add to Cart
            </>
          )}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
