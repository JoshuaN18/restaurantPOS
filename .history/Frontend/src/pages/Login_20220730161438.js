import React from 'react'
import {Button, Col, Container, Form, Row} from "react-bootstrap"

const Login = () => {
  return (
    // div styling taken from stackoverflow, can adjust later
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> 
        <div className="p-3">
        <Row>
          <Col lg={12} md={6} sm={12}>
            <Form>
              <Form.Group controlID="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Email"/>
              </Form.Group>
              <Form.Group controlID="formBasicPassword">
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>

              <Button variant="primary btn-block" type="submit">Login</Button>
            </Form>
          </Col>

          <Col lg={4} md={6} sm={12}>
          </Col>
        </Row>
      </div>
    </div>
    // <>
    //    <Container className="mt-5">
        // <Row>
        //   <Col lg={4} md={6} sm={12}>
        //     <Form>
        //       <Form.Group controlID="formBasicEmail">
        //         <Form.Control type="email" placeholder="Enter Email"/>
        //       </Form.Group>
        //       <Form.Group controlID="formBasicPassword">
        //         <Form.Control type="password" placeholder="Password"/>
        //       </Form.Group>

        //       <Button variant="primary btn-block" type="submit">Login</Button>
        //     </Form>
        //   </Col>

        //   <Col lg={4} md={6} sm={12}>
        //   </Col>
        // </Row>
    //   </Container> 
    
    // </>

  )
}

export default Login