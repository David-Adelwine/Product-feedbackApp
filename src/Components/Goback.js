import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Goback.css'
import Arrowleft from '../Assets/shared/icon-arrow-left.svg'


const Goback = () => {
  return (
    <Navbar bg="light" expand="lg" className='Gobacknav'>
    <Container>
      <Navbar.Brand href="#home" className='Goback'> <img src={Arrowleft} alt='<' className='Goback--icon'/> Go Back</Navbar.Brand>
        <Nav className="me-auto">
          {/* <button className='Gobackbtn'>Edit Feedback</button> */}
        </Nav>
    </Container>
  </Navbar>
  )
}

export default Goback