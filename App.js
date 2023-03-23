import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react-native";

import RootNavigator from "./src/Navigation";
import AuthContextProvider from "./src/Context/AuthContext";
import BasketContextProvider from "./src/Context/BasketCotext";
import OrderContextProvider from "./src/Context/OrderContext";

Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
  return (
    <NavigationContainer>
      <View>
        <AuthContextProvider>
          <BasketContextProvider>
            <OrderContextProvider>
              <RootNavigator />
            </OrderContextProvider>
          </BasketContextProvider>
        </AuthContextProvider>

        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
