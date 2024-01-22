import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import image from '../images/home1.jpg';

export default function Home() {
  return (
    <section id='home' className='homepage container pt-3 mb-3 mt-5'>
      <Container className='mt-4 pt-4'>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} xl={6}>
            <img src={image} className='poster img-fluid mt-5 pt-5' alt="home" />
          </Col>
          <Col xs={12} md={6} xl={6} className='p-3'>
            <div className='py-2 mt-1'>
              <h2>Enhance your online presence</h2>
              <h5>Partner with us to unlock the full potential of digital marketing.</h5>
            </div>
            <Row className='pb-2 mt-2'>
              <Button href='#register' id='btn' className="w-50 btn btn-yellow btn-outline-primary text-dark fw-bold mx-3 px-3">Work with us</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
