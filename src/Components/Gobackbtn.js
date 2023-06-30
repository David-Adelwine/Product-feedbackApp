import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Goback.css'
import Arrowleft from '../Assets/shared/icon-arrow-left.svg'
import { Link } from 'react-router-dom';


const Gobackbtn = () => {
  return (
    <Navbar  expand="lg" className='Gobacknav'>
    <Container>
      <Navbar.Brand href="#home" className='Goback'> <Link to="../../Roadmap"><img src={Arrowleft} alt='<' className='Goback--icon'/> Go Back </Link></Navbar.Brand>  
        <Nav className="me-auto">
        < Link  to="../../Feedbackdetails"><button className='Gobackbtn'>Edit Feedback</button> </Link>
        </Nav>
    </Container>
  </Navbar>
  )
}

export default Gobackbtn