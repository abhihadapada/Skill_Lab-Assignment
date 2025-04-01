import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5>BookMyShow</h5>
            <p className="small text-muted">
              The fastest way to book tickets for movies, events, and sports.
            </p>
          </Col>
          <Col md={3}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/movies" className="text-decoration-none text-muted">Movies</a></li>
              <li><a href="/events" className="text-decoration-none text-muted">Events</a></li>
              <li><a href="/sports" className="text-decoration-none text-muted">Sports</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Offers</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Help</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-decoration-none text-muted">About Us</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Contact Us</a></li>
              <li><a href="#" className="text-decoration-none text-muted">FAQs</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Terms & Conditions</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Connect With Us</h6>
            <div className="mb-3">
              <a href="#" className="text-decoration-none text-muted me-3">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-decoration-none text-muted me-3">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-decoration-none text-muted">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
            <p className="small text-muted">
              Download our app:
              <div className="mt-2">
                <img 
                  src="https://via.placeholder.com/120x40?text=App+Store" 
                  alt="App Store" 
                  className="me-2" 
                  style={{ height: '30px' }}
                />
                <img 
                  src="https://via.placeholder.com/120x40?text=Play+Store" 
                  alt="Play Store" 
                  style={{ height: '30px' }}
                />
              </div>
            </p>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col className="text-center small text-muted">
            © 2023 BookMyShow. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;