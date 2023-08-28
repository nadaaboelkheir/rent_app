import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppDrawer from "./Drawer";
import { Home } from "../Home";
import SplashScreen from "../Splash/Mainsplash";
import AuthStack from "./AuthStack";
import Intro from "../Intro/IntroSlider_Page";
import AppTap from "./BottomTab";

const Stack = createStackNavigator();



const MainNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
        />

        <Stack.Screen
          name="Auth"
          component={AuthStack}
        />

        <Stack.Screen
          name="Home"
          component={AppTap}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export { MainNavigation }