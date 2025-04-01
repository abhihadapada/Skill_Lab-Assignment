import { Container } from 'react-bootstrap';
import CustomCarousel from '../components/Carousel';
import MovieCard from '../components/MovieCard';

const featuredMovies = [
  {
    image: 'https://via.placeholder.com/800x400?text=Movie+1',
    title: 'Avengers: Endgame',
    description: 'The epic conclusion to the Infinity Saga'
  },
  {
    image: 'https://via.placeholder.com/800x400?text=Movie+2',
    title: 'Spider-Man: No Way Home',
    description: 'The multiverse unleashes chaos'
  },
  {
    image: 'https://via.placeholder.com/800x400?text=Movie+3',
    title: 'The Batman',
    description: 'The Dark Knight returns'
  }
];

const trendingMovies = [
  {
    image: 'https://via.placeholder.com/300x450?text=Movie+A',
    title: 'Doctor Strange',
    genre: 'Action',
    rating: 4.5,
    description: 'Master of the mystic arts returns',
    price: 250
  },
  {
    image: 'https://via.placeholder.com/300x450?text=Movie+B',
    title: 'Black Panther',
    genre: 'Adventure',
    rating: 4.8,
    description: 'Wakanda forever',
    price: 300
  },
  {
    image: 'https://via.placeholder.com/300x450?text=Movie+C',
    title: 'Thor: Love and Thunder',
    genre: 'Comedy',
    rating: 4.2,
    description: 'God of thunder returns',
    price: 280
  },
  {
    image: 'https://via.placeholder.com/300x450?text=Movie+D',
    title: 'Ant-Man',
    genre: 'Sci-Fi',
    rating: 4.0,
    description: 'Small hero, big adventure',
    price: 220
  }
];

const upcomingEvents = [
  {
    image: 'https://via.placeholder.com/800x400?text=Event+1',
    title: 'Music Festival 2023',
    description: 'Biggest music festival of the year'
  },
  {
    image: 'https://via.placeholder.com/800x400?text=Event+2',
    title: 'Comedy Night',
    description: 'Laugh your heart out'
  },
  {
    image: 'https://via.placeholder.com/800x400?text=Event+3',
    title: 'Food Expo',
    description: 'Culinary delights from around the world'
  }
];

const Home = () => {
  return (
    <Container className="py-4">
      <CustomCarousel items={featuredMovies} title="Featured Movies" />
      
      <h3 className="mb-3">Trending Movies</h3>
      <div className="row g-4 mb-5">
        {trendingMovies.map((movie, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      
      <CustomCarousel items={upcomingEvents} title="Upcoming Events" />
    </Container>
  );
};

export default Home;