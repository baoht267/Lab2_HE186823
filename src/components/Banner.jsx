import { Carousel } from 'react-bootstrap'
import '../style/Banner.css'

const slides = [
  {
    id: 1,
    title: 'FASHION COLLECTION 2026',
    description: 'Discover the latest fashion trends for 2026.',
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    title: 'SUMMER SALE UP TO 50%',
    description: 'Enjoy special discounts on selected products.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    title: 'NEW ARRIVALS',
    description: 'Explore our newest clothing collection.',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=80',
  },
]

function Banner() {
  return (
    <section id="home" className="banner-section">
      <Carousel fade interval={3000} indicators controls>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img className="banner-image" src={slide.image} alt={slide.title} />
            <Carousel.Caption>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}

export default Banner
