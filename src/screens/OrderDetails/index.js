import { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";

import BasketDishItem from "../../components/BasketDishItem/Index";
import { userOrderContext } from "../../Context/OrderContext";
import styles from "./Styles";
import { ActivityIndicator } from "react-native-paper";

const OrderDetailsHeader = ({ order }) => {
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

const OrderDetails = ({ id }) => {
  const [order, setOrder] = useState();
  const { getOrder } = userOrderContext();

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, []);

  if (!order) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }

  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={order.dishes}
      renderItems={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
