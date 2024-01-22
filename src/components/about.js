import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import business from '../images/business.jpg';

import '../App.css';

export default function About() {
  return (
    <section id='about' className='container pt-5 mt-4 my-3'>
      <hr />
      <Container className='mt-1'>
        <Row>
          <Col xs={12} md={6} xl={6} className='parag'>
            <h1 className='section-title mt-3'>About us</h1>
            <p className='mt-3 paragraphe w-100'>
              At Business, we specialize in crafting comprehensive and effective digital marketing strategies to propel your business to new heights.
            </p>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <img src={business} className='img-fluid about-img' alt="Business" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
