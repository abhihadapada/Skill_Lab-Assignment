import { Carousel } from 'react-bootstrap';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomCarousel = ({ items, title }) => {
  return (
    <div className="mb-5">
      <h3 className="mb-3">{title}</h3>
      <Carousel indicators={false} interval={3000}>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="position-relative">
              <img
                className="d-block w-100 rounded"
                src={item.image}
                alt={item.title}
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <button className="btn btn-danger me-2">
                  <FontAwesomeIcon icon={faPlay} className="me-1" /> Watch Trailer
                </button>
                <button className="btn btn-outline-light">Book Now</button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;