import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'



const Navigation = () => {
  return (
    <div>

<Navbar  expand="sm" className='my-3 w-75  Nav--Postion' >
      <Container >
        <Navbar.Brand href="#">0 suggestions</Navbar.Brand>
  
          <Nav 
            className="me-auto my-2 my-lg-0 d-flex Move--Links"
            style={{ maxHeight: '1px' }} >
            <Nav.Link href="#action2">Sortby:</Nav.Link>
            <NavDropdown title="Most Upvotes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button  className='homebtn'>+ AddFeedBack</Button>
          </Form>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation
