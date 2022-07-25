import React from 'react'
import image from '../pictures/chef-restaurant-logo-publicdomainvectors.svg';
import {Button} from 'react-bootstrap';
import "./Homepage.css";

const Homepage = () => {
  return (
    
    <div className='text-center'>
      <div className='homepage'>
        <div className="display-5"> Cubed Restaurant Services</div>
        <div className="display-6"> Optimizing Restaurant Businesses </div>
        <Button variant='light' href="./menu"> Order now</Button>
        </div>
    </div>
    //placeholder for qr scanner
    
  )
}

export default Homepage
