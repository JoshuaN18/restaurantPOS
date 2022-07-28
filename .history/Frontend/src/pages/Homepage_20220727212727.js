import React from 'react'
import image from '../pictures/chef-restaurant-logo-publicdomainvectors.svg';
import {Button} from 'react-bootstrap';
import "./Homepage.css";
const Homepage = () => {
  return (
    
    <div className='text-center'>   
        <div className="homepage">
          <div className="display-3"> Cubed Restaurant Services</div>
          <div className="display-6 p-3"> Optimizing businesses</div>
          <Button variant="light" href="./menu" size="lg"> Order now</Button>
        </div>
    </div>
    //placeholder for qr scanner
    
  )
}

export default Homepage
