import { Card, Badge, Button } from 'react-bootstrap';
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieCard = ({ movie }) => {
  // Safely handle undefined description
  const description = movie.description || '';
  const shortDescription = description.length > 100 
    ? `${description.substring(0, 100)}...` 
    : description;

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={movie.image} 
        style={{ height: '300px', objectFit: 'cover' }} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{movie.title}</Card.Title>
        <div className="mb-2">
          <Badge bg="secondary me-1">{movie.genre}</Badge>
          <Badge bg="warning text-dark">
            <FontAwesomeIcon icon={faStar} className="me-1" />
            {movie.rating}
          </Badge>
        </div>
        <Card.Text className="text-muted small">{shortDescription}</Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">₹{movie.price}</span>
          <div>
            <Button variant="outline-danger" size="sm" className="me-1">
              <FontAwesomeIcon icon={faPlay} />
            </Button>
            <Button variant="danger" size="sm">Book</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;