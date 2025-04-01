import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Events from './pages/Events';
import Sports from './pages/Sports';
import './index.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;