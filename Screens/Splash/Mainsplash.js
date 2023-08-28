import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { COLORS, Splash, } from '../../constants';
import { useSelector } from 'react-redux';

const SplashScreen = ({ navigation }) => {
  const state = useSelector((state) => (state.products))
  const [firstTime, setfirstTime] = useState(state.FirstTime)
  const [sign, setsign] = useState(state.sign)
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(firstTime ? 'Intro' : (sign?'Home':'Auth'))
    }, 3000);
  }, [])

  return (
    <>
      <StatusBar backgroundColor={COLORS.Green} barStyle={'light-content'} />
      <View style={styles.container}>
        <LottieView
          source={Splash}
          autoPlay
          loop

        // speed={0.5}
        />
      </View>
    </>
  );
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: COLORS.Green,
      alignItems: 'center',
    },
  });
export default SplashScreen