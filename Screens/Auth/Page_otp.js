import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SMSVerifyCode from "react-native-sms-verifycode";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, SIZES, FONTS } from '../../constants';
import { ConfirmButton, Header, Small_Button, Textinput } from '../../components';



function Page_otp({ navigation }) {

    const [verifycode, setverifycode] = useState('');
    const onInputCompleted = (text) => {
        // alert("hello");

    }

    // const sendcodeFun = () => {
    //     alert("hello");
    //     // navigation.navigate('Congratulation')
    // }
    const reset = () => {
        setverifycode.reset()
        setverifycode({ codeText: '' })
    }

    return (
        <>
            <View style={{ flex: 1, alignItems: "center", backgroundColor: COLORS.white, paddingHorizontal: RFPercentage(1.8) }}>

                <Text
                    style={[FONTS.semiBold_Text, { fontSize: RFPercentage(3), color: COLORS.Green, marginTop: RFPercentage(10) }]}
                >
                    تحقق من الكود المرسل
                </Text>
                <ScrollView>
                    <View style={{
                        alignItems: "center",
                        padding: RFPercentage(2),
                        paddingVertical: RFPercentage(5),
                        width: SIZES.width * .9,
                        backgroundColor: COLORS.smooth_color,
                        borderRadius: SIZES.ButtonRadius,
                        marginVertical: RFPercentage(7.5),
                        alignSelf: "center",
                    }}>
                        <Text
                            style={[FONTS.Reg_Text,{marginBottom:RFPercentage(10)}]}
                        >
                              ادخل الكود المكون من 4 ارقام
                        </Text>

                        <SMSVerifyCode
                            ref={(ref) => (setverifycode(verifycode) > ref)}
                            
                            verifyCodeLength={4}
                            containerPaddingVertical={10}
                            containerPaddingHorizontal={50}
                            codeViewBorderColor={COLORS.white}
                            onInputCompleted={onInputCompleted()}
                            focusedCodeViewBorderColor={COLORS.Green}
                            codeFontSize={22}
                            codeColor={COLORS.Green}
                            autoFocus={true}
                            containerBackgroundColor={COLORS.smooth_color}
                        />
                        <Text style={[FONTS.Reg_Text,{color:COLORS.Green,marginTop:RFPercentage(2.5)}]}>اعاده ارسال</Text>
                    </View>


                    <View style={{ alignItems: "center", justifyContent: 'center', height: RFPercentage(25) }}>
                    <ConfirmButton
                        ConfirmButtonText="تأكيد "
                        Confirm_onPress={() => { navigation.navigate('Congratulation') }}
                    />
                </View>

                </ScrollView>
                
            </View>
        </>
    );
}
const styles = StyleSheet.create({

});
export default Page_otp;
