import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

// import { MapScreen } from "./MapScreen";
import { PostsScreen } from "./PostsScreen";
import { CreatePostScreen } from "./CreatePostsScreen";
import { CommentsScreen } from "./CommentsScreen";
import { ProfileScreen } from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerLeft: () => {
          if (
            route.name === "Коментарі" ||
            route.name === "Створити публікацію"
          ) {
            return (
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={{ marginLeft: 10 }}
                onPress={() => navigation.goBack()}
              />
            );
          } else {
            return null;
          }
        },
        headerRight: () => {
          if (route.name === "Публікації") {
            return (
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                style={{ marginRight: 21 }}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              />
            );
          } else {
            return null;
          }
        },
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#FF6C00",
        tabBarLabelStyle: { display: "none" },
      })}
    >
      <MainTab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Створити публікацію"
        component={CreatePostScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.btnLinkToCreate}>
              <AntDesign name="plus" size={size} color={"#FFF"} />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Коментарі"
        component={CommentsScreen}
        options={{ tabBarButton: () => null }}
      />
      <MainTab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
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
  btnLinkToCreate: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
  },
});
