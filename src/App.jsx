import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import { products } from './data/products'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.includes(productId) ? currentItems : [...currentItems, productId],
    )
  }

  return (
    <div className="shop-app">
      <Header cartCount={cartItems.length} />
      <main>
        <Banner />
        <ProductList
          products={products}
          addedItems={cartItems}
          onAddToCart={handleAddToCart}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
