import "react-native-gesture-handler";

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";


import { NavigationContainer } from "@react-navigation/native";
import { Edit_profile, History_profile, Main_profile, ResetPass, ViewProblem, WriteProblem } from "../Profile";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
      <Stack.Navigator initialRouteName="Main_profile">
        <Stack.Screen
          name="Main_profile"
          component={Main_profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Edit_profile"
          component={Edit_profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPass"
          component={ResetPass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="WriteProblem"
        component={WriteProblem}
        options={{headerShown:false}}
        />
        <Stack.Screen
          name="ViewProblem"
          component={ViewProblem}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History_profile"
          component={History_profile}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
    
  );
};

export { ProfileStack }