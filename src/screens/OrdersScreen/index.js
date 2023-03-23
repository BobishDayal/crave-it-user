import { View, FlatList } from "react-native";

import OrderListItem from "../../components/OrderListItem";
import { userOrderContext } from "../../Context/OrderContext";

const OrdersScreen = () => {
  const { orders } = userOrderContext();
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;
