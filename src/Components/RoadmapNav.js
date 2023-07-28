import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Styles/RoadmapNav.css'
import Arrowleft from '../assets/shared/icon-arrow-left.svg'



const RoadmapNav = () => {
  return (
    <div>

<Navbar  expand="sm" className='my-3  Nav--Roadmap' >
    <Container >
      <Link  to="../../" className='RoadmapGoback'><img src={Arrowleft} alt='<' className='RoadmapGoback--icon text-white' /><span className='text-white'>Go back</span></Link>
       <h3  className='text-white  RoadmapNav--text'>Roadmap</h3>
  
        <Nav 
           className="me-auto my-2 my-lg-0 d-flex  "
          style={{ maxHeight: '1px' }} >
      </Nav>
       <Form className="d-flex">
        <Link to={'../Feedbackedit'}> <Button  className='Roadmapnavbtn'>+ Add Feedback</Button></Link> 
        </Form>
    </Container>
   </Navbar> 
    </div>
  )
}

export default RoadmapNav