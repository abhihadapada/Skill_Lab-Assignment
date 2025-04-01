import { Form, Button, Dropdown } from 'react-bootstrap';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Mock search suggestions
  const suggestions = [
    "Avengers: Endgame",
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "John Wick 4",
    "Coldplay Concert",
    "IPL Cricket Match"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement actual search functionality here
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };

  return (
    <Form className="d-flex position-relative" onSubmit={handleSearch}>
      <Form.Control
        type="search"
        placeholder="Search for movies, events, plays, etc."
        className="me-2"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setShowSuggestions(e.target.value.length > 0);
        }}
      />
      {searchQuery && (
        <Button 
          variant="link" 
          className="position-absolute end-0 top-50 translate-middle-y me-5 text-secondary"
          onClick={clearSearch}
        >
          <FaTimes />
        </Button>
      )}
      <Button variant="outline-light" type="submit">
        <FaSearch />
      </Button>
      
      {showSuggestions && (
        <Dropdown.Menu show className="w-100 mt-1">
          {suggestions
            .filter(suggestion => 
              suggestion.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .slice(0, 5)
            .map((suggestion, index) => (
              <Dropdown.Item 
                key={index} 
                onClick={() => {
                  setSearchQuery(suggestion);
                  setShowSuggestions(false);
                }}
              >
                {suggestion}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      )}
    </Form>
  );
};

export default SearchBar;