import { View, Text, FlatList, Image } from "react-native";

import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem/Index";
import styles from "./Styles";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.screen}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.title}>{order.status} &#8226; 2 days ago</Text>

          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItems={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
