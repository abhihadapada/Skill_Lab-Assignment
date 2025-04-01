import { useState } from 'react';
import { Container, Row, Col, Form, Table, Button, Badge } from 'react-bootstrap';
import { faFilter, faSort, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieCard from '../components/MovieCard';

const moviesData = [
  {
    id: 1,
    title: 'Avengers: Endgame',
    genre: 'Action',
    releaseDate: '2023-04-26',
    rating: 4.8,
    price: 300,
    image: 'https://source.unsplash.com/random/200x300'
  },
  {
    id: 2,
    title: 'The Batman',
    genre: 'Action',
    releaseDate: '2023-03-04',
    rating: 4.5,
    price: 280,
    image: 'https://source.unsplash.com/random/200x300'
  },
  {
    id: 3,
    title: 'Jurassic World',
    genre: 'Adventure',
    releaseDate: '2023-06-10',
    rating: 4.2,
    price: 250,
    image: 'https://source.unsplash.com/random/200x300'
  },
  {
    id: 4,
    title: 'Minions: Rise of Gru',
    genre: 'Animation',
    releaseDate: '2023-07-01',
    rating: 4.0,
    price: 200,
    image: 'https://source.unsplash.com/random/200x300'
  },
  {
    id: 5,
    title: 'Top Gun: Maverick',
    genre: 'Action',
    releaseDate: '2023-05-27',
    rating: 4.7,
    price: 320,
    image: 'https://source.unsplash.com/random/200x300'
  },
  {
    id: 6,
    title: 'Doctor Strange',
    genre: 'Fantasy',
    releaseDate: '2023-05-06',
    rating: 4.3,
    price: 290,
    image: 'https://source.unsplash.com/random/200x300'
  },
  {
    id: 7,
    title: 'Lightyear',
    genre: 'Animation',
    releaseDate: '2023-06-17',
    rating: 4.1,
    price: 220,
    image: 'https://source.unsplash.com/random/200x300'
  },
  {
    id: 8,
    title: 'Black Panther',
    genre: 'Action',
    releaseDate: '2023-11-11',
    rating: 4.9,
    price: 350,
    image: 'https://source.unsplash.com/random/200x300'
  }
];

const Movies = () => {
  const [view, setView] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('latest');

  const filteredMovies = moviesData.filter(movie => {
    if (filter === 'all') return true;
    return movie.genre.toLowerCase() === filter.toLowerCase();
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sort === 'latest') {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    } else if (sort === 'rating') {
      return b.rating - a.rating;
    } else if (sort === 'price-low') {
      return a.price - b.price;
    } else if (sort === 'price-high') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Movies</h2>
        <div>
          <Button 
            variant={view === 'grid' ? 'primary' : 'outline-primary'} 
            size="sm" 
            className="me-2"
            onClick={() => setView('grid')}
          >
            Grid View
          </Button>
          <Button 
            variant={view === 'table' ? 'primary' : 'outline-primary'} 
            size="sm"
            onClick={() => setView('table')}
          >
            Table View
          </Button>
        </div>
      </div>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Group controlId="filter">
            <Form.Label>
              <FontAwesomeIcon icon={faFilter} className="me-2" />
              Filter by Genre
            </Form.Label>
            <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Genres</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="fantasy">Fantasy</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="sort">
            <Form.Label>
              <FontAwesomeIcon icon={faSort} className="me-2" />
              Sort By
            </Form.Label>
            <Form.Select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="latest">Latest Releases</option>
              <option value="rating">Highest Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {view === 'grid' ? (
        <Row className="g-4">
          {sortedMovies.map(movie => (
            <Col key={movie.id} md={3} sm={6}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Poster</th>
              <th>Movie</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedMovies.map(movie => (
              <tr key={movie.id}>
                <td>
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    style={{ width: '50px', height: '75px', objectFit: 'cover' }} 
                  />
                </td>
                <td>{movie.title}</td>
                <td><Badge bg="secondary">{movie.genre}</Badge></td>
                <td>{new Date(movie.releaseDate).toLocaleDateString()}</td>
                <td>
                  <Badge bg="warning" text="dark">
                    <FontAwesomeIcon icon={faStar} className="me-1" />
                    {movie.rating}
                  </Badge>
                </td>
                <td>₹{movie.price}</td>
                <td>
                  <Button variant="danger" size="sm">Book Now</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Movies;