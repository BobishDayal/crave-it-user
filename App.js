import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <RootNavigator />
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}
