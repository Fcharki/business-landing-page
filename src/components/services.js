import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import business from '../images/businessimg.jpg';
import '../App.css';
import { BsArrowRightCircleFill } from 'react-icons/bs';

export default function Services() {
  return (
    <section id='services' className='container pt-5 mt-5 my-4'>
      <hr />
      <Container className='mt-2'>
        <Row className=''>
          <Col xs={12} md={6} xl={6}>
            <img src={business} className='img-fluid service-img' alt='Business Services' />
          </Col>
          <Col xs={12} md={6} xl={6} className='mt-5'>
            <h1 className='section-title'>Services</h1>
            <ul className='list-unstyled'>
              <li className='services'>
                <BsArrowRightCircleFill className='mx-1' />
                Search Engine Optimization (SEO)
              </li>
              <li className='services'>
                <BsArrowRightCircleFill className='mx-1' />
                Social Media Management
              </li>
              <li className='services'>
                <BsArrowRightCircleFill className='mx-1' />
                Content Creation and Marketing
              </li>
              <li className='services'>
                <BsArrowRightCircleFill className='mx-1' />
                Pay-Per-Click (PPC) Advertising
              </li>
              <li className='services'>
                <BsArrowRightCircleFill className='mx-1' />
                Analytics and Reporting
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
