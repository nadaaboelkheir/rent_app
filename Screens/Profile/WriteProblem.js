import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import { COLORS, FONTS, Icons, SIZES } from '../../constants';
import { ConfirmButton, Header, Statues } from '../../components';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useSelector } from 'react-redux';

const WriteProblem = ({ navigation }) => {
  const state = useSelector((state) => (state.products))
  const [dark, setdark] = useState(state.dark);

  const [proplem_des, setproplem_des] = useState('')

  return (
    <>
      <Statues />

      <View style={[styles.main_View, { backgroundColor: dark ? COLORS.black : COLORS.white, }]}>
        <Header
          Image_Source={Icons.ProblemHistory}
          onPress={() => { navigation.replace('Main_profile')  }}
          Sec_onPress={() => { navigation.navigate('ViewProblem') }}
          Header_name=" الشكاوي"
        />

        <ScrollView showsVerticalScrollIndicator={false}>

          <TextInput
            style={[styles.TextInput_style, FONTS.Reg_Text,]}
            placeholder="  ادخل مشكلتك ......."
            multiline={true}
            value={proplem_des}
            onChangeText={value => {
              setproplem_des(value)
            }}
          />


        </ScrollView>
        <View style={{ height: RFPercentage(12.5), justifyContent: 'center' }}>
          <ConfirmButton
            ConfirmButtonText='ارســـال'
            ConfirmButton_Styles={{ marginTop: RFPercentage(-2) }}
          />
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  main_View: {
    flex: 1,
    alignItems: 'center',
  },
  TextInput_style: {
    padding: RFPercentage(2.5),
    width: SIZES.width * 0.875,
    backgroundColor: COLORS.smooth_color,
    borderRadius: 10,
    marginTop: RFPercentage(7.5)
  },

  button_view: {
    width: RFPercentage(25),
    paddingVertical: RFPercentage(2),
    backgroundColor: COLORS.Green,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: RFPercentage(10),
    borderRadius: 15,
  },
  Button_Text: {
    fontSize: SIZES.RegFont,
    color: COLORS.white,
  },
});
export default WriteProblem