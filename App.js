import React, { useEffect, useState } from 'react'
import 'react-native-gesture-handler';


import { Provider, } from 'react-redux';
import store from './Screens/Store';
import { MainNavigation } from './Screens/Navigation/MainNavigation';
import { HomeStack } from './Screens/Navigation/HomeStack';



const App = () => {

 
  return (
    <>

      <Provider store={store}>
        <HomeStack />
      </Provider>
    </>
  )


}

export default App