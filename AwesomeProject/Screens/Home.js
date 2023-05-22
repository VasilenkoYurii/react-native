import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

import { MapScreen } from "./MapScreen";

const MainTab = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Map" component={MapScreen} />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 85,
    paddingLeft: 80,
    paddingRight: 80,
  },
  tabIconWrapperStyle: {
    position: "absolute",
    top: 9,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 5,
    paddingBottom: 20,
  },
  tabIconStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 23,
    paddingRight: 23,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 20,
  },
});
