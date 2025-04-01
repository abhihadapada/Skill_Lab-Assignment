import { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} className="py-2">
      <Container fluid>
        <Navbar.Brand href="/" className="me-4">
          <span className="text-danger fw-bold">BookMyShow</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="navbarScroll" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/movies" className="mx-2">Movies</Nav.Link>
            <Nav.Link href="/events" className="mx-2">Events</Nav.Link>
            <Nav.Link href="/sports" className="mx-2">Sports</Nav.Link>
            <Nav.Link href="#" className="mx-2">Offers</Nav.Link>
          </Nav>
          
          <Form className="d-flex mx-3">
            <FormControl
              type="search"
              placeholder="Search for movies, events, etc."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
          
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
              <FontAwesomeIcon icon={faUser} className="me-1" /> Sign In
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Login</Dropdown.Item>
              <Dropdown.Item href="#">Register</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;