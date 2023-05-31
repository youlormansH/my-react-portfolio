import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand to="/" as={Link}>Youlormans</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/about" as={Link}>About</Nav.Link>
            <Nav.Link to="/portfolio" as={Link}>Portfolio</Nav.Link>
            <Nav.Link to="/poject" as={Link}>Project</Nav.Link>
            <Nav.Link to="/resume" as={Link}>resume</Nav.Link>
            <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;