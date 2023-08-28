import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Textinput, Small_Button, ConfirmButton } from '../../components';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Dialog from "react-native-dialog";
import FontAwesomeIcon from 'react-native-vector-icons/AntDesign';

import { COLORS, SIZES, FONTS } from '../../constants';
function SignUp({ navigation }) {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState('');

    const [ShowEmail_error, setShowEmail_error] = useState(false);
    const [ShowUser_error, setShowUser_error] = useState(false);
    const [ShowPhone_error, setShowPhone_error] = useState(false);
    const [ShowPass_error, setShowPass_error] = useState(false);
    const [securty_password, setsecurty] = useState(true);

    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (re.test(String(email).toLowerCase().trim()))
    }
    const isValidpassword = (password) => {
        var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        return pass.test((password));

    }

    const isValidname = (name) => {
        const re = /^([a-zA-Z0-9\s_\u0600-\u06FF]).{0,30}$/
        //  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        return re.test((String(name).toLowerCase()).trim());
    }
    const isValidphone = (phone) => {
        var pho = /^01[0125][0-9]{8}$/gm;
        return pho.test((phone).trim());

    }
    const validate_sign = () => {
        if (isValidname(name)) {

            setShowUser_error(false)

        } else {
            setShowUser_error(true)
        }
        ////////////////
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
        // ////////////////////////////
        if (isValidphone(phone)) {

            setShowPhone_error(false)
        } else {
            setShowPhone_error(true)
        }

        if (isValidpassword(password) && isValidphone(phone) && isValidEmail(email) && isValidname(name)) {
            // navigation.navigate("Login")
            showDialog()
        }
    }

    // ////////////////////////////////////////////////
    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };
    const handleCancel = () => {
        setVisible(false);
    };
    // ///////////////////////////////////////////////////


    return (
        <>

            <View style={styles.main_View}>


                <View style={styles.h1_view}>
                    <Text style={styles.h1_Style}>
                        إنشاء حساب
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.Reset_View}>


                            <Textinput
                                placeholder='اسم المستخدم '
                                iconName='user'
                                PassIconName={""}
                                ShowIconName="times-circle-o"
                                value={name}
                                onChangeText={(value) => {
                                    setname(name => name = value)
                                }}
                            />

                            {
                                ShowUser_error == true ?
                                    <View style={styles.Error_View}>
                                        <Text style={styles.Error_Style}>اسم المستخدم غير صحيح</Text>
                                    </View> :
                                    null

                            }




                            <Textinput
                                placeholder='البريد الالكتروني  '
                                iconName='mail'
                                PassIconName={""}
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

                            <Textinput
                                placeholder='رقم الهاتف '
                                iconName='phone'
                                PassIconName={""}
                                value={phone}
                                onChangeText={
                                    (value) => {
                                        setphone(phone => phone = value)
                                    }
                                }
                            />
                            {
                                ShowPhone_error == true ?
                                    <View style={styles.Error_View}>
                                        <Text style={styles.Error_Style}>رقم الهاتف  غير صحيح</Text>
                                    </View> :
                                    null

                            }
                            <Textinput
                                placeholder="كلمه السر "
                                iconName='lock'

                                PassIconName={securty_password == true ? 'eye-with-line' : 'eye'}
                                OnpressSecurity={() => {
                                    setsecurty(securty_password => !securty_password)
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










                            {/* //////////////////////////////////////////////////////////////////////// */}
                            <Dialog.Container visible={visible}>
                                <Dialog.Title style={FONTS.Bold_Text}> تأكيد انشاء الحساب </Dialog.Title>
                                <Dialog.Description style={FONTS.Small_Text}>
                                    هل انت متاكد من معلومات انشاء الحساب ؟

                                </Dialog.Description>
                                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                                    <Dialog.Button style={styles.Dialog_Style} label="نعم متاكد , سجل الان " onPress={() => {
                                        navigation.navigate("Login")
                                    }} />
                                    <Dialog.Button style={styles.Dialog_Style} label="ليس متأكد " onPress={() => {
                                        handleCancel()
                                    }} />
                                </View>
                            </Dialog.Container>
                            {/* //////////////////////////////////////////////////////////////////// */}










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
                    </View>



                    <View style={{ justifyContent: "space-between", alignItems: "center" }}>
                        <ConfirmButton
                            ConfirmButtonText="إنشاء حساب "
                            Confirm_onPress={() => { navigation.navigate('') }}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[{ color: COLORS.black, marginVertical: RFPercentage(2) }, FONTS.Small_Text]} >  لديك حساب بالفعل ؟ </Text>
                            <Text onPress={() => {
                                navigation.navigate('Login')
                            }} style={[{ color: COLORS.Green }, FONTS.Small_Text]} > تسجيل دخول </Text>
                        </View>

                    </View>

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
        // justifyContent: "space-around",
        padding: RFPercentage(2),
        paddingVertical: RFPercentage(5),
        width: SIZES.width * .9,
        backgroundColor: COLORS.smooth_color,
        borderRadius: SIZES.ButtonRadius,
        marginVertical: RFPercentage(3),

    },
    h1_view: {
        width: SIZES.width,
        padding: RFPercentage(3),
        marginTop: RFPercentage(5)
    },
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
        // justifyContent: "center",
        alignItems: "center",
        marginTop: RFPercentage(1.5),
        width: RFPercentage(40),

    }
    ,

    Error_Style:
        [FONTS.Small_Text,
        {
            color: COLORS.DarkRed,
            fontSize: RFPercentage(1.7)
        }
        ],
    Error_View: {
        marginRight: RFPercentage(20)
    },
    Dialog_Style: [
        FONTS.semiBold_Text,
        { color: COLORS.Green }
    ]
})

export default SignUp;
