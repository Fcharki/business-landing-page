import { Container, Row, Col } from "react-bootstrap";
import logo from '../images/businesslogo.png';
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer className="footer pt-5">
      <Container>
        <Row className="align-items-center">
          <Col size={6} sm={4}>
            <img src={logo} alt="Logo" id="logo2"/>
          </Col>
          <Col size={6} sm={4}>
          <div className="social-icon mx-0 my-3">
                      <a href="https://fr.linkedin.com/"><FaLinkedin /></a>
                      <a href="https://twitter.com"><FaTwitter /></a>
                      <a href="https://www.facebook.com"><FaFacebook /></a>
                      <a href="https://m.youtube.com"><FaYoutube /></a>
            </div>
          </Col>
          <Col size={6} sm={4}><p className="mx-2">&copy;Business | Fadma Charki 2024.</p></Col>
        </Row>
      </Container>
    </footer>
  )
}