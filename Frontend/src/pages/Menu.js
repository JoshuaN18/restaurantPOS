import React from 'react'
import {Button} from 'react-bootstrap';
import RestaurantInfo from '../components/RestaurantInfo'
import {getFakeRestaurant} from '../service/restaurantApis'
const Menu = () => {
  let restaurant = getFakeRestaurant();
  console.log(restaurant)
  return (
    <div> 
        {/* <h1 className='text-center'>Menu</h1>
        <div>Breakfast </div>
        <h2>Burger</h2>
        <h3>A classic cheeseburger. <span> $5.99 </span> </h3>
        <div>Lunch </div>
        <div>Dinner </div>
        <Button variant="light">Add</Button>
        <hr
        style={{
          background: 'white',
          color: 'white',
          borderColor: 'blue',
          height: '5px',
        }}
      />
        <h1 className="text-center">Cart</h1>
        <Button variant="light">Delete</Button> */}
        <RestaurantInfo params={restaurant}></RestaurantInfo>


    </div>
    
    // <!-- different sections for differernt types of food -->

    // <!-- each item will need a name, image (if possible), description and price and quantity and be able to be selected -->

   //  <!-- add button would be the price, with a quantity selector next to it -->
    
  )
}

export default Menu