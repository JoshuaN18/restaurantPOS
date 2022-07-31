import React from 'react'
import Typography from '@mui/material/Typography';
const RestaurantInfo = (props) => {
    const { name, image, price, reviews, rating, categories } =
    props.params;
    console.log(image);
    let formattedCategories = "";
    categories.map((cat) => formattedCategories = formattedCategories + cat + " • ")

    const description = `${formattedCategories} ${
        price ? price : ""
    } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
    <div>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </div>
  )
}

const RestaurantImage = (props) => (
    <img src={props.image} width= "100%" height= '180' />
  );
  
  const RestaurantName = (props) => (
    <Typography
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Typography>
  );
  
  const RestaurantDescription = (props) => (
    <Typography
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {props.description}
    </Typography>
  );

export default RestaurantInfo
