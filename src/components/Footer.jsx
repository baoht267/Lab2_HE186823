import { Col, Container, Row } from 'react-bootstrap'
import '../style/Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <Container>
        <Row className="g-3 align-items-center">
          <Col md={6}>
            <h2>SHOP FASHION</h2>
           
          </Col>
          <Col md={6}>
            <ul className="student-info">
              <li>Student Name: Ho&agrave;ng T&acirc;n B&#7843;o</li>
              <li>Student ID: HE186823</li>
              <li>Class: SE2009</li>
              <li>Email: baohthe186823@fpt.edu.vn</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
