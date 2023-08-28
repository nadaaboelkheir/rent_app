import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useSelector } from "react-redux";
import { ConfirmButton, Textinput,Header, Statues } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";

const ResetPass = (props) => {
    const state = useSelector((state) => (state.products))
    const [dark, setdark] = useState(state.dark); 
    
    const [oldPass, setoldPass] = useState('');
    const [NewPass, setNewPass] = useState('');
    const [ConfirmNewPass, setConfirmNewPass] = useState('');

    return (
        <>
                    <Statues />

            <View style={[styles.bgView, { backgroundColor: dark ? COLORS.black : COLORS.white, }]}>
                <Header
                 onPress={() => { props.navigation.replace('Main_profile')  }}
                    Header_name='تـغــير كلـمه المــرور'
                />


                <View style={styles.Container}>

                    <Textinput
                        value={oldPass}
                        placeholder='كلـمه الـمـرور القـديـمـه'
                        iconName='lock'
                        placeholderTextColor={dark ? COLORS.white : COLORS.black}
                        onChangeText={(value) => {
                            setoldPass(value)
                        }}
                        textinputStyle={{ color: dark ? COLORS.white : COLORS.black }}
                    />
                    <Textinput
                        value={NewPass}
                        placeholder='كلـمه الـمـرور الجــديــده'
                        iconName='lock'
                        placeholderTextColor={dark ? COLORS.white : COLORS.black}
                        onChangeText={(value) => {
                            setNewPass(value)
                        }}
                        textinputStyle={{ color: dark ? COLORS.white : COLORS.black }}
                    />
                    <Textinput
                        value={ConfirmNewPass}
                        placeholder='تــأكـــيد كلـمه الـمـرور الجــديــده'
                        iconName='lock'
                        placeholderTextColor={dark ? COLORS.white : COLORS.black}
                        onChangeText={(value) => {
                            setConfirmNewPass(value)
                        }}
                        textinputStyle={{ color: dark ? COLORS.white : COLORS.black }}
                    />

                    <ConfirmButton
                        ConfirmButtonText='تـأكــيــد'
                        ConfirmButton_Styles={{ marginTop: RFPercentage(7.5), }}
                    />

                </View>


            </View>


        </>
    )
}


const styles = StyleSheet.create(
    {

        bgView:
        {

            flex: 1,
            alignItems: 'center'

        },
        Container:
        {
            alignItems: 'center',
            justifyContent: 'center',
            height: SIZES.height,
        },

    }
)


export default ResetPass