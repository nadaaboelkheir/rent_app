import React from 'react'


import {View, StyleSheet } from 'react-native'
import { COLORS } from '../constants';
import { Header } from './components';




const Templete = () => {

  return (
    <>
      <View style={styles.main_View}>

        <Header
         Header_name='الصفحه الرئيسيه'
         Icon_name='back'
         />

        {/* 

           code Here.........................................

        */}

      </View>
    </>
  )
}

const styles = StyleSheet.create({

  main_View: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center'
  },

})

export default Templete