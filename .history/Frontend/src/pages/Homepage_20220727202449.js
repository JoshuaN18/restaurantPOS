import React from 'react'
import image from '../pictures/chef-restaurant-logo-publicdomainvectors.svg';
import {Button} from 'react-bootstrap';
import "./Homepage.css";
const Homepage = () => {
  return (
    
    <div className='text-center'>   
        <div clasNam="homepage">
        <div className="display-3"> Cubed restaurant services</div>
        <div className="display-6"> Optimizing restaurant businesses</div>
        <Button href="./menu"> Order now</Button>
        </div>
    </div>
    //placeholder for qr scanner
    
  )
}

export default Homepage
