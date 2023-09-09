import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/Home/HomeScreen";
import SearchScreen from "./screens/Search/SearchScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import NotificationsScreen from "./screens/Notifications/NotificationsScreen";
import Ionic from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
          backgroundColor: "black",
        },

        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = focused ? "home-sharp" : "home-outline";
            size = focused ? size + 8 : size + 2;
          } else if (route.name === "SearchScreen") {
            iconName = focused ? "search" : "ios-search-outline";
          } else if (route.name === "Reels") {
            iconName = focused
              ? "caret-forward-circle"
              : "caret-forward-circle-outline";
          } else if (route.name === "NotificationsScreen") {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "ios-person-circle" : "ios-person-outline";
          }

          return <Ionic name={iconName} size={size} color={colour} />;
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
};

const SignedInStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInStack;
