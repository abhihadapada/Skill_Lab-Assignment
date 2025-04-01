import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { faTrophy, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sportsData = [
  {
    id: 1,
    title: 'IPL Cricket Match',
    teams: 'Mumbai Indians vs Chennai Super Kings',
    date: '2023-05-15',
    venue: 'Wankhede Stadium, Mumbai',
    price: 2000,
    image: 'https://picsum.photos/600/400'
  },
  {
    id: 2,
    title: 'International Football',
    teams: 'India vs Bangladesh',
    date: '2023-06-20',
    venue: 'Salt Lake Stadium, Kolkata',
    price: 1500,
    image: 'https://picsum.photos/600/400'
  },
  {
    id: 3,
    title: 'Badminton Tournament',
    teams: 'PV Sindhu vs Saina Nehwal',
    date: '2023-07-10',
    venue: 'Indoor Stadium, Hyderabad',
    price: 1200,
    image: 'https://picsum.photos/600/400'
  },
  {
    id: 4,
    title: 'Tennis Championship',
    teams: 'International Players',
    date: '2023-08-05',
    venue: 'RK Khanna Stadium, Delhi',
    price: 2500,
    image: 'https://picsum.photos/600/400'
  },
  {
    id: 5,
    title: 'Kabaddi League',
    teams: 'Patna Pirates vs Bengal Warriors',
    date: '2023-07-22',
    venue: 'Arena Stadium, Ahmedabad',
    price: 800,
    image: 'https://picsum.photos/600/400'
  },
  {
    id: 6,
    title: 'Hockey Championship',
    teams: 'India vs Pakistan',
    date: '2023-09-01',
    venue: 'Major Dhyan Chand Stadium, Delhi',
    price: 1000,
    image: 'https://picsum.photos/600/400'
  }
];

const Sports = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4">Sports Events</h2>
      
      <Row className="g-4">
        {sportsData.map(event => (
          <Col key={event.id} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={event.image} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex align-items-center mb-2">
                  <FontAwesomeIcon icon={faTrophy} className="text-warning me-2" />
                  <Card.Title className="mb-0">{event.title}</Card.Title>
                </div>
                <Card.Text className="text-muted small">{event.teams}</Card.Text>
                
                <div className="mt-auto">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-muted" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-muted" />
                      <span>{event.venue.split(',')[0]}</span>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <Badge bg="success" className="fs-6">₹{event.price}</Badge>
                    <Button variant="danger" size="sm">Book Tickets</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sports;