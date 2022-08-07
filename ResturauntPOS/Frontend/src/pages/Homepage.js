import React from 'react'
import {Button} from 'react-bootstrap';
const Homepage = () => {
  return (
    
    <div className='text-center'>   
        <div className="homepage">
          <img></img>
          <div className="display-3"> Cubed Restaurant Services</div>
          <div className="display-6 p-3"> Enhance your Business</div>
          <Button variant="light" href="./menu" size="lg"> Order now</Button>
        </div>
    </div>
    //placeholder for qr scanner
    
  )
}

export default Homepage
