import "react-native-gesture-handler";
 
import React from "react";
 
import { createStackNavigator } from "@react-navigation/stack";
 

import SplashScreen from "../SplashScreen";
import NoInternet from "../NoInternet";
 
const Stack = createStackNavigator();
 
const LostConnection = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NoInternet"
        component={NoInternet}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

export {LostConnection}