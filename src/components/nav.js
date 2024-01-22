import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import logo from '../images/businesslogo.png';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img id="logo" src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="ms-auto  d-flex justify-content-end">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>ABOUT</Nav.Link>
              <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>SERVICES</Nav.Link>
              <Nav.Link  href="#register" className={activeLink === 'register' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('register')}>REGISTER</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
        </Container>
        
      </Navbar>
    </Router>
  )
}