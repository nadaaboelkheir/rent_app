
import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Textinput, ConfirmButton } from '../../components';
import { COLORS, SIZES, FONTS } from '../../constants';
function ResetPass({ navigation }) {

    const [password, setpassword] = useState('');
    const [securty_password, setsecurty] = useState(true);

    const [securty_password_2, setsecurty_2] = useState(true);
    const [password_2, setpassword_2] = useState('');
    const [ShowPass_error, setShowPass_error] = useState(false);
    const [Equal_error, setEqual_error] = useState(false);

    const validate_ResetPass = () => {
        if (isValidpassword(password, password_2)) {
            setShowPass_error(false)
        }
        else {
            setShowPass_error(true)
        }
        if (password == password_2) {
            setEqual_error(false)
        } else {
            setEqual_error(true)
        }
        if (password == password_2 && isValidpassword(password, password_2)) {
            navigation.navigate('Congratulation')
        }
    }
    const isValidpassword = (password, password_2) => {
        var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        return pass.test(password, password_2);

    }


    return (
        <>

            <View style={styles.main_View}>

                <View style={styles.h1_view}>
                    <Text style={styles.h1_Style}>
                        تغيير كلمه المرور
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.Reset_View}>





                        <View style={styles.h2_view}>
                            <Text style={[FONTS.Reg_Text, { color: COLORS.Green }]}>
                                انت تستطيع تغيير كلمه السر وتاكيدها
                            </Text>
                        </View>



                        <Textinput
                            placeholder='كلمه السر الجديده '
                            iconName='lock'
                            PassIconName={securty_password == true ? 'eye-with-line' : 'eye'}
                            // secureTextEntry={securty_password}
                            OnpressSecurity={() => {
                                setsecurty(securty_password => !securty_password)
                            }}

                            value={password}
                            onChangeText={(value) => {
                                setpassword(password => password = value)

                            }}

                        />
                        {
                            ShowPass_error == true ?
                                <View style={styles.Error_View}>
                                    <Text style={styles.Error_Style}>كلمه المرور غير صحيح</Text>
                                </View> :
                                null

                        }

                        <Textinput
                            placeholder='تأكيد كلمه السر الجديده '
                            iconName='lock'
                            PassIconName={securty_password_2 == true ? 'eye-with-line' : 'eye'}
                            OnpressSecurity={() => {
                                setsecurty_2(securty_password_2 => !securty_password_2)
                            }}
                            // secureTextEntry={securty_password_2}
                            value={password_2}
                            onChangeText={
                                (value) => {
                                    setpassword_2(password_2 => password_2 = value)
                                }
                            }

                        />
                        {
                            Equal_error == true ?
                                <View style={styles.Error_View}>
                                    <Text style={styles.Error_Style}>كلمه المرور غير متساويه</Text>
                                </View> :
                                null

                        }

                    </View>



                </ScrollView>
                <View style={{ alignItems: "center", justifyContent: 'center', height: RFPercentage(12.5) }}>
                    <ConfirmButton
                        ConfirmButtonText="تغيير كلمه السر"
                        Confirm_onPress={() => { navigation.navigate('HomeScreen') }}
                    />
                </View>
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
        padding: RFPercentage(2),
        paddingVertical: RFPercentage(5),
        width: SIZES.width * .9,
        backgroundColor: COLORS.smooth_color,
        borderRadius: SIZES.ButtonRadius,
        marginVertical: RFPercentage(7.5),
        alignSelf: "center",
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

export default ResetPass;
