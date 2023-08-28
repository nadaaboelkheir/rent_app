import React, { useState } from 'react'


import { View, StyleSheet, Text, TextInput, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Header, Textinput, ConfirmButton } from '../../components';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, SIZES, FONTS } from '../../constants';
import FontAwesomeIcon from 'react-native-vector-icons/AntDesign';


function Login({ navigation }) {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [securty_password, setsecurty] = useState(true);
    const [ShowPass_error, setShowPass_error] = useState(false);
    const [ShowEmail_error, setShowEmail_error] = useState(false);

    const validate_Login = () => {
        if (isValidEmail(email)) {

            setShowEmail_error(false)
        }
        else {
            setShowEmail_error(true)
        }
        // //////////////////////
        if (isValidpassword(password)) {

            setShowPass_error(false)
        } else {
            setShowPass_error(true)
        }
        // ///////////
        if (isValidpassword(password) && isValidEmail(email)) {
            navigation.navigate("SignUp")
        }

    }



    const isValidpassword = (password) => {
        var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        return pass.test(password);

    }

    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (re.test(String(email).toLowerCase().trim()))


    }
    return (
        <>

            <View style={styles.main_View}>

                <View style={styles.h1_view}>
                    <Text style={styles.h1_Style}>
                        تسجيل الدخول
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>


                    <View style={{ justifyContent: "space-between", alignItems: "center" }} >
                        <View style={styles.Reset_View}>




                            <Textinput
                                value={email}
                                placeholder='البريد الالكتروني  '
                                iconName='user'
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
                            <Textinput
                                placeholder="كلمه السر "
                                iconName='lock'
                                PassIconName={securty_password ? 'eye-with-line' : 'eye'}
                                OnpressSecurity={() => {
                                    setsecurty(!securty_password)
                                }}
                                secureTextEntry={securty_password}
                                value={password}
                                onChangeText={
                                    (value) => {
                                        setpassword(password => password = value)
                                    }
                                }

                            />

                            {
                                ShowPass_error == true ?
                                    <View style={styles.Error_View}>
                                        <Text style={styles.Error_Style}>كلمه المرور غير صحيح</Text>
                                    </View> :
                                    null

                            }

                            <View style={styles.Remember_Main_View}>

                                <Text style={[{ color: COLORS.Green }, FONTS.Small_Text]}
                                    onPress={() => {
                                        navigation.navigate('ForgotPass')
                                    }}
                                >
                                    هل نسيت كلمه المرور ؟
                                </Text>

                            </View>




                            <View style={styles.social_Main_View}>
                                <View style={styles.social_View}>
                                    <TouchableOpacity

                                    >
                                        <FontAwesomeIcon
                                            name={'facebook-square'}
                                            size={RFPercentage(4)}
                                            color={'blue'}
                                        />

                                    </TouchableOpacity>
                                    <TouchableOpacity

                                    >

                                        <FontAwesomeIcon
                                            name={'twitter'}
                                            size={RFPercentage(4)}
                                            color={'#2aa9e0'}
                                        />

                                    </TouchableOpacity>
                                    <TouchableOpacity

                                    >
                                        <FontAwesomeIcon
                                            name={'google'}
                                            size={RFPercentage(4)}
                                            color={'red'}
                                        />

                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>


                        <View style={{ justifyContent: "space-between", alignItems: "center", marginTop: RFPercentage(5) }}>
                            <ConfirmButton
                                ConfirmButtonText="تسجيل الدخول"
                                Confirm_onPress={() => { navigation.replace('Home') }}
                            />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[{ color: COLORS.black, marginVertical: RFPercentage(2) }, FONTS.Small_Text]} > هل ليس لديك حساب ؟ </Text>
                                <Text onPress={() => {
                                    navigation.navigate('SignUp')
                                }} style={[{ color: COLORS.Green }, FONTS.Small_Text]} > انشئ حساب</Text>
                            </View>

                        </View>



                    </View>

                </ScrollView>
            </View >

        </>
    )
}

const styles = StyleSheet.create({

    main_View: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },
    Reset_View: {
        alignItems: "center",
        paddingHorizontal: RFPercentage(2),
        paddingVertical: RFPercentage(5),
        width: SIZES.width * .9,
        backgroundColor: COLORS.smooth_color,
        borderRadius: 15,
        marginVertical: RFPercentage(5),



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
    social_View: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: RFPercentage(25)
    },
    social_Main_View: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: RFPercentage(5),
        width: RFPercentage(40),

    }
    ,
    Remember_Main_View: {
        alignItems: "flex-start",
        width: "100%",
        marginTop: RFPercentage(1)


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

export default Login;
