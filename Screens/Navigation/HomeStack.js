import "react-native-gesture-handler";

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";


import { Catigories, Catigorie_Items, Home, View_Product } from "../Home";
import { NavigationContainer } from "@react-navigation/native";
import CheckOut from "../Home/CheckOut";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Catigories"
          component={Catigories}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Catigorie_Items"
          component={Catigorie_Items}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="View_Product"
          component={View_Product}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { HomeStack }