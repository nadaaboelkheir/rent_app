
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import { Congratulation, ForgotPass, Login, Page_otp, ResetPass, SignUp } from '../Auth'
import { COLORS } from '../../constants';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    // <NavigationContainer> 

    <>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPass"
          component={ResetPass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPass"
          component={ForgotPass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Page_otp"
          component={Page_otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Congratulation"
          component={Congratulation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </>

    // </NavigationContainer>
  );
}

export default AuthStack;