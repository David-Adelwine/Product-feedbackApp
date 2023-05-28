import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import { Link } from 'react-router-dom';
import suggestion from '../Assets/suggestions/icon-suggestions.svg'





const Navigation = () => {
  return (
    <div>

<Navbar  expand="sm" className='my-3  Nav--Postion' >
      <Container >
        <Navbar.Brand href="#" className='text-white Navigation--text'><img src={suggestion} alt='icon'/>  0 suggestions</Navbar.Brand>
  
          <Nav 
            className="me-auto my-2 my-lg-0 d-flex Move--Links "
            style={{ maxHeight: '1px' }} >
            <Nav.Link href="#action2" className='text-white Navigation--text' >Sortby:</Nav.Link>
            <NavDropdown className='Nav--card' title="Most Upvotes" id="navbarScrollingDropdown">
              <Link to='/Roamap' >
              <NavDropdown.Item >Most Upvotes</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Least Upvotes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Most Comments
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Least Comments
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button  className='homebtn'>+ Add FeedBack</Button>
          </Form>
      </Container>
    </Navbar> 




    </div>
  )
}

export default Navigation
