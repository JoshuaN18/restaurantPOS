import React from 'react'
import {Button, Col, Container, Form, Row} from "react-bootstrap"

const Login = () => {
  return (
    <div class="container-fluid" className="text-center">
        <Row>
          <Col lg={4} md={6} sm={12}>
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