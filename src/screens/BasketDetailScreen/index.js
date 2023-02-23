import { View, StyleSheet, Text, FlatList } from "react-native";

import BasketDishItem from "../../components/BasketDishItem/Index";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const BasketDetailScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={{ fontSize: 19, fontWeight: "bold", marginTop: 20 }}>
        your items
      </Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator}></View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>create order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },

  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 60,
  },
});

export default BasketDetailScreen;
