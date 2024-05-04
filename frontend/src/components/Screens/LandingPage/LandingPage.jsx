import React from 'react'
import {Button, Col, Container,Row} from 'react-bootstrap'
import "./LandingPage.css"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate=useNavigate()
  return (

      <Container  className='landing'>
        <Row><h2>Welcome Notes are safe here</h2></Row>
        <Row><Col><Button className='m-1' variant="primary" onClick={()=>navigate("/login")}>Login</Button></Col>
        <Col><Button className='m-1' variant="primary">SignUP</Button></Col></Row>
      </Container>
  
  )
}

export default LandingPage
