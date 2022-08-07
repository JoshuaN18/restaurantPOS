const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
  
  const FoodImage = ({ marginLeft, ...props }) => (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
          marginLeft: marginLeft,
        }}
      />
    </View>
  );