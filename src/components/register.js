import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import image from '../images/skuscraper.jpg';
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import '../App.css';

export default function Register () {
    return (
        <section id='register'  className='container register pt-3 mt-2 my-3'><hr/>
            <Container>
                <Row className='d-flex justify-content-center h-100'>
                <Col xs={12} md={6} xl={6} className='wrapper'>
                    <h3 className='text-center mt-1'>Get your first service for free!</h3>
                    <form className='text-center pt-2 mt-2'>
                        <input type='text' placeholder='Full name' className='m-2'/><br/>
                        <input type='email' placeholder='Email' className='m-2'/><br/>
                        <input type='url' placeholder='Business website' className='m-2'/><br/>
                        <button className='btn btn-yellow btn-warning border border-primary m-2'>Start for free</button>
                        <br/><div className="social">
                      <a href="https://fr.linkedin.com/"><FaLinkedin /></a>
                      <a href="https://twitter.com"><FaTwitter /></a>
                      <a href="https://www.facebook.com"><FaFacebook /></a>
                      <a href="https://m.youtube.com"><FaYoutube /></a>
                     </div>
                    </form>
                    </Col>
                    <Col>
                    <img src={image} className='img-fluid register-img h-100 mt-3 pb-4'/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}