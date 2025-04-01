import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const eventsData = [
  {
    id: 1,
    title: 'Music Festival 2023',
    description: 'The biggest music festival of the year featuring top artists from around the world.',
    date: '2023-07-15',
    location: 'Mumbai',
    price: 1500,
    image: 'https://picsum.photos/600/400'
  },
  {
    id: 2,
    title: 'Comedy Night',
    description: 'An evening of laughter with top comedians from the country.',
    date: '2023-06-20',
    location: 'Delhi',
    price: 800,
    image: 'https://picsum.photos/600/400'
  },
  {
    id: 3,
    title: 'Food Expo',
    description: 'Experience culinary delights from around the world in one place.',
    date: '2023-08-05',
    location: 'Bangalore',
    price: 500,
    image: 'https://picsum.photos/600/400'
  },
  {
    id: 4,
    title: 'Tech Conference',
    description: 'Learn about the latest in technology from industry leaders.',
    date: '2023-09-12',
    location: 'Hyderabad',
    price: 2000,
    image: 'https://picsum.photos/600/400'
  },
  {
    id: 5,
    title: 'Art Exhibition',
    description: 'Contemporary art exhibition featuring works from emerging artists.',
    date: '2023-07-28',
    location: 'Chennai',
    price: 300,
    image: 'https://picsum.photos/600/400'
  },
  {
    id: 6,
    title: 'Dance Performance',
    description: 'Traditional and modern dance performances by renowned troupes.',
    date: '2023-08-15',
    location: 'Kolkata',
    price: 700,
    image: 'https://picsum.photos/600/400'
  }
];

const Events = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4">Upcoming Events</h2>
      
      <Row className="g-4">
        {eventsData.map(event => (
          <Col key={event.id} md={6}>
            <Card className="h-100 shadow-sm">
              <Row className="g-0">
                <Col md={5}>
                  <Card.Img 
                    src={event.image} 
                    alt={event.title}
                    className="h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col md={7}>
                  <Card.Body className="d-flex flex-column h-100">
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text className="text-muted small">{event.description}</Card.Text>
                    
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between mb-2">
                        <div>
                          <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-muted" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div>
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-muted" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center">
                        <Badge bg="success" className="fs-6">₹{event.price}</Badge>
                        <Button variant="danger">Book Now</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;