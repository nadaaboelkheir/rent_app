import React from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, SIZES, FONTS } from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';

function Textinput(props) {
    return (
        <>
            <View style={styles.textinput_View}

            >
                <AntDesign name={props.iconName} size={RFPercentage(3)} color={COLORS.Green} style={styles.Icon_Style} />
                <TextInput
                    value={props.value}
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType}
                    style={[FONTS.Small_Text, props.textinputStyle, styles.textinput_style, { fontSize: RFPercentage(2.28) }]}
                    secureTextEntry={props.secureTextEntry}
                    editable={props.editable}
                    placeholderTextColor={props.placeholderTextColor}

                    onChangeText={props.onChangeText}


                />

                <TouchableOpacity
                    onPress={props.OnpressSecurity}
                    style={{ width: RFPercentage(5) }}
                >

                    <Entypo
                        name={props.PassIconName}
                        size={RFPercentage(3)}
                        style={styles.Icon_Style}
                    />

                </TouchableOpacity>

            </View>

        </>
    )

}


const ConfirmButton = (props) => {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.Confirm_onPress}
            style={[styles.ConfirmButtonStyle, props.ConfirmButton_Styles]} >
            <Text style={[FONTS.semiBold_Text, { color: COLORS.white }]}>{props.ConfirmButtonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        textinput_style: {
            width: SIZES.width * .65,
            marginLeft: RFPercentage(1.8),

        },
        textinput_View: {
            alignItems: "center",
            // justifyContent: "space-between",
            width: SIZES.width * .85,
            flexDirection: "row",
            borderBottomWidth: RFPercentage(.1),
            borderBottomColor: COLORS.Green,
            marginBottom: RFPercentage(5),
            fontSize: RFPercentage(3)
        },
        Icon_Style: {
            marginLeft: RFPercentage(1),

        },
        ErrorText_View: {
            width: "100%",
        },
        ConfirmButtonStyle:
        {
            paddingVertical: RFPercentage(.5),
            width: SIZES.width * .85,
            height: RFPercentage(8),
            backgroundColor: COLORS.Green,
            borderRadius: 15,
            alignItems: "center",
            alignSelf: 'center',
            justifyContent: "center",
            // marginTop:RFPercentage(3.5)
        },
    }
)


export {
    Textinput,
    ConfirmButton
}

