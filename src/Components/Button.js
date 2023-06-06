import React from 'react'
import '../Styles/Button.css'
import Navbar  from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';



const Button = () => {
  return (
    <div>
      <Navbar>
        <Container>
        <Form className="d-flex">
        <Button className='btn'>+ Add Feedback</Button>
        </Form>
        </Container>
      </Navbar>

    </div>
  )
}

export default Button