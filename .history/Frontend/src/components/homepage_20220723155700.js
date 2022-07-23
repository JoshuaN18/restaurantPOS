import React from 'react'
import image from '../pictures/chef-restaurant-logo-publicdomainvectors.svg';
import {Button} from 'react-bootstrap';
const Homepage = () => {
  return (
    
    <div className='text-center'>
        <div className="display-3"> Cubed restaurant services</div>
        <div className="display-6"> Optimizing restaurant businesses</div>
        <img src={image} width="600"></img>
        <Button> Order now</Button>
    </div>
    //placeholder for qr scanner
    
  )
}

export default Homepage
