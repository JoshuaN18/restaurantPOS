import { faker } from '@faker-js/faker';

export function getFakeRestaurant(){
  return {
    name: faker.commerce.productAdjective() + ' ' + faker.commerce.productMaterial(),
    image:
      faker.image.food(),
    categories: [faker.address.country(), faker.word.adjective()],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  };
}

export function getFakeRestaurantList(quantity){
  let restaurantList = Array();
  for(var i = 0; i < quantity; i++){
    restaurantList.push(getFakeRestaurant());
  }
  return restaurantList;
}