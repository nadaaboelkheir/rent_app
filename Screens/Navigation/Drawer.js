
import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import AppTap from './BottomTab';

const Drawer = createDrawerNavigator();


function AppDrawer() {
    return (
        <Drawer.Navigator initialRouteName='HomeScreen'
            screenOptions={{ headerShown: false }}
        >

            <Drawer.Screen
                name="AppTap"
                options={{ drawerLabel: 'Home' }}
                component={AppTap}
            />

       

        </Drawer.Navigator>
    );
}

export default AppDrawer;



