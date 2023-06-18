import React from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navBar.css'
import {useState} from 'react'

const NavBar = ({search}) => {
  const [searchValue, setsearchValue] = useState('');
  const onSearch =()=>{
    search(searchValue)
    setsearchValue('')
  }
  return (
    <Row>
      <Navbar bg="dark" expand="lg" sticky='top' variant='dark'>
      <Container>
        <Navbar.Brand href="#">
          <div className='brand-name'>
            Chef's Specials
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setsearchValue(e.target.value)}
              value={searchValue}
            />
            <button onClick={()=>onSearch()} className='btn-search'>Search</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </Row>
  );
}

export default NavBar;
