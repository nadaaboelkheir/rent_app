import React from 'react'


import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Header, Textinput } from '../components';
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, Images, SIZES, FONTS } from '../../constants';


const Congratulation = ({ navigation }) => {

    return (
        <>
            <View style={styles.main_View}>





                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("./CorrectMark1.jpg")} resizeMode={"cover"}

                        style={styles.photo_View}
                    />
                </View>
                <View style={{}}>
                    <Text style={[FONTS.semiBold_Text, { fontSize: RFPercentage(4), color: COLORS.Green }]}>
                        تهنئه !
                    </Text>

                </View>

                <View style={{ width: RFPercentage(50), height: RFPercentage(20), alignItems: "center", justifyContent: "center", marginBottom: RFPercentage(10) }}>
                    <Text style={styles.Text_2}>
                        لقد نجحت في تغيير كلمه المرور الان
                    </Text>
                    <Text style={FONTS.Small_Text}>
                        يمكنك الان تسجيل الدخول
                    </Text>
                </View>




                <TouchableOpacity style={styles.button_view}

                    onPress={() => {
                        navigation.navigate('Login')
                    }}

                >
                    <Text style={[styles.Button_Text, FONTS.semiBold_Text]}>
                        اذهب الي تسجيل الدخول
                    </Text>

                </TouchableOpacity>









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
    photo_View: {
        justifyContent: "center",
        alignItems: "center",
        // height: RFPercentage(35),
        backgroundColor: COLORS.black,

    }
    ,
    Text_1: {
        fontFamily: 'Changa-Bold',
        fontSize: RFPercentage(4),

        color: COLORS.black
    },
    Text_2: {
        fontFamily: 'Changa-Bold',
        fontSize: SIZES.RegFont,

        color: COLORS.Green
    },
    Button_Text: {
        color: COLORS.white
    },
    button_view: {
        width: RFPercentage(40),
        height: RFPercentage(7),
        backgroundColor: COLORS.Green,
        borderRadius: SIZES.ButtonRadius,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center'
    },
})

export default Congratulation;