import React from 'react'
import image from '../pictures/chef-restaurant-logo-publicdomainvectors.svg';
<<<<<<< Updated upstream
import {Button} from 'react-bootstrap';
const Homepage = () => {
  return (
    
    <div className='text-center'>   
        <div className="display-3"> Cubed restaurant services</div>
        <div className="display-6"> Optimizing restaurant businesses</div>
        <Button href="./menu"> Order now</Button>
=======
import {Button, Col} from 'react-bootstrap';
import "./Homepage.css";

const Homepage = () => {
  return (
    
    <div className="container square-box d-flex justfiy-content-center align-items-center ">
      <div className='homepage'>
        <Col>
          <div className="display-5"> Cubed Restaurant Services</div>
          <div className="display-6"> Optimizing Restaurant Businesses </div>
        </Col>
        <Col>
          <Button variant='light' href="./menu"> Order now</Button>
        </Col>
        </div>
>>>>>>> Stashed changes
    </div>
    //placeholder for qr scanner
    
  )
}

export default Homepage
