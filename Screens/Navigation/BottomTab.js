
import 'react-native-gesture-handler';
import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { Catigories, Home } from '../Home';
import { COLORS } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
// import { Home } from '../Home';
import { createStackNavigator } from "@react-navigation/stack";
import { Edit_profile } from '../Profile';
import { ProfileStack } from './ProfileStack';
import { HomeStack } from './HomeStack';

const Tab = createMaterialBottomTabNavigator();






function AppTap() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
       
      }}

activeColor = "#fff"
barStyle = {{ backgroundColor: COLORS.LightGreen, borderTopEndRadius: RFPercentage(3) }}
      >
  <Tab.Screen
    name="Home"
    component={HomeStack}
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ),
    }}
  />

{/* <Tab.Screen
          name="Notifiations"
          component={Home}
          options={{
            tabBarLabel: 'cart',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={26} />
            ),
          }}
        /> */}

<Tab.Screen
  name="Profile"
  component={ProfileStack}
  options={{
    tabBarLabel: 'Profile',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="account" color={color} size={26} />
    ),
  }}
/>
      </Tab.Navigator >
  );
}


// const Stack = createStackNavigator();


// function Homee() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Profile" component={Home} />
//       <Stack.Screen name="Catigories" component={Catigories} />
//     </Stack.Navigator>
//   );
// }

// function AppTap() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="Home" component={Homee} />
//         <Tab.Screen name="EditPost" component={Edit_profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
export default AppTap;
