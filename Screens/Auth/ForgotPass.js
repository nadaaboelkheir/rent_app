import React, { useReducer, useState } from 'react'


import { View, StyleSheet, Text, TextInput, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { ConfirmButton, Header, Small_Button, Textinput } from '../../components';
import FontAwesomeIcon from 'react-native-vector-icons/Fontisto';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, SIZES, FONTS } from '../../constants';



function ForgotPass({ navigation }) {
    const [email, setemail] = useState('');
    const [ShowEmail_error, setShowEmail_error] = useState(false);



    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (re.test(String(email).toLowerCase().trim()))


    }

    const validate_Forgot = () => {
        if (isValidEmail(email)) {

            setShowEmail_error(false)
        }
        else {
            setShowEmail_error(true)
        }
        if (isValidEmail(email)) {
            navigation.navigate('Page_otp')
        }
    }



    return (
        <>

            <View style={styles.main_View}>

                <View style={styles.h1_view}>
                    <Text style={styles.h1_Style}>
                        هل نسيت كلمه المرور ؟
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.Reset_View}>
                        <Textinput
                            placeholder="ادخل بريدك الالكتروني"
                            iconName='mail'
                            value={email}
                            onChangeText={(value) => {
                                setemail(email => email = value)
                            }}
                        />

                        {
                            ShowEmail_error == true ?
                                <View style={styles.Error_View}>
                                    <Text style={styles.Error_Style}>البريد الالكتروني غير صحيح</Text>
                                </View> : null

                        }


                    </View>




                    <ConfirmButton
                        ConfirmButtonText="ارسال"
                        Confirm_onPress={() => { navigation.navigate('Page_otp') }}
                    />


                </ScrollView>
            </View>

        </>
    )
}

const styles = StyleSheet.create({

    main_View: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    Reset_View: {
        alignItems: "center",
        paddingVertical: RFPercentage(5),
        width: SIZES.width * .9,
        backgroundColor: COLORS.smooth_color,
        borderRadius: SIZES.ButtonRadius,
        marginVertical: RFPercentage(15),
        alignSelf: "center"


    },
    h1_view: {
        width: SIZES.width,
        padding: RFPercentage(3),
        marginTop: RFPercentage(5)
    }
    ,
    h1_Style: [
        FONTS.semiBold_Text,
        {
            fontSize: RFPercentage(3.5),
            color: COLORS.Green
        }
    ],
    h2_view: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: RFPercentage(5)

    },
    Error_Style:
        [FONTS.Small_Text,
        {
            color: COLORS.DarkRed,
            fontSize: RFPercentage(1.7)
        }
        ],
    Error_View: {
        marginRight: RFPercentage(20)
    }






})

export default ForgotPass;