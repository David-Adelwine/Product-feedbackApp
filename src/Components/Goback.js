import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Goback.css'
import Arrowleft from '../Assets/shared/icon-arrow-left.svg'
import { Link } from 'react-router-dom';
const Goback = () => {
  return (
    <div>
      <Navbar  expand="lg" className='Gobacknav'>
    <Container>
      <Navbar.Brand href="#home" className='Goback'> <Link to="../../Home"><img src={Arrowleft} alt='<' className='Goback--icon'/> Go Back </Link></Navbar.Brand>  
    </Container>
  </Navbar>
    </div>
  )
}

export default Goback