import { StyleSheet, FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";

import RestaurantItem from "../../components/RestaurantItem";
import { Restaurant } from "../../models";

export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  // const fetchRestaurants = async () => {
  //   const results = await DataStore.query(Restaurant);
  //   setRestaurants(results);
  //};

  useEffect(() => {
    // fetchRestaurants();
    DataStore.query(Restaurant).then(setRestaurants);
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
