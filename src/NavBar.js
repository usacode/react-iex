import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={NavLink} to="/" title="This is the home page.">
        IexDemo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/return" title="Daily return.">
            Return
          </Nav.Link>
          <Nav.Link as={NavLink} to="/alpha" title="Get alpha.">
            Alpha
          </Nav.Link>

          <Nav.Link as={NavLink} to="/volatility" title="Get volatility.">
            Volatility
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
