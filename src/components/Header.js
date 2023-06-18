import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../styles/Header.css'

const Header = () => {
  return (
      <Row>
        <Col sm='12' className='justify-content-center text-center'>
          <div className='title'>Restaurant Menu</div>
          <div className='underline'></div>
        </Col>
        
      </Row>
  );
}

export default Header;
