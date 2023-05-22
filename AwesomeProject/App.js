import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { MapScreen } from "./Screens/MapScreen";
import { Home } from "./Screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./fonts/Roboto-Medium.ttf"),
  });

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerStyle: {
              height: 0,
            },
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: {
              height: 0,
            },
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              height: 0,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
