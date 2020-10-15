import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'

const NavBar = () => {
    return (    
    <Navbar bg="dark" variant="dark" expand="xl" className="row">
        <Container>
    <Navbar.Brand className="navbar-brand ml-lg-5"><img src={logo} alt="Copandi" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="navbar-items" >
    <Nav className="container-fluid">
        <NavLink className="nav-link" exact to="/">
          Te koop
        </NavLink>
        <NavLink className="nav-link" to="/apartments">
          Te huur
        </NavLink>
        <NavLink className="nav-link" to="/nieuwbouw">
          Nieuwbouw
        </NavLink>
        <NavLink className="nav-link" to="/ik-ben-op-zoek">
          Ik ben op zoek
        </NavLink>        
        <NavLink className="nav-link" to="/team">
          Team
        </NavLink>        
        <NavLink className="nav-link" to="/prijzen">
          Prijzen
        </NavLink>        
        <NavLink className="nav-link" to="/blog">
          Blog
        </NavLink>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
);
}
 
export default NavBar;