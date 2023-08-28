import React, { useState } from "react";
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar, TouchableOpacity, StyleSheet } from 'react-native';


import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, FONTS, SIZES } from '../../constants';
import { Header, Statues } from '../../components';
import Under_complete_order from "./UnCompleteOrders";
import Complete from "./CompleteOrders"
import { useSelector } from "react-redux";




const Tab = createMaterialTopTabNavigator();

export default function History_profile({navigation}) {
    const state = useSelector((state) => (state.products))
    const [dark, setdark] = useState(state.dark);
    return (
        <>
            <Statues />

            <Header Header_name=" السجل"
                onPress={() => { navigation.replace('Main_profile') }}
            />

            <Tab.Navigator initialRouteName="مكتمل"
                screenOptions={{
                    tabBarContentContainerStyle: {
                        backgroundColor: dark ? COLORS.DarkGreen : COLORS.white,
                    },
                    // tabBarPressColor:{},
                    tabBarLabelStyle: {
                        fontSize: RFPercentage(2.5),
                        fontFamily: FONTS.fontFamily,
                        color: dark ? COLORS.white : COLORS.black,
                    }
                }
                } >
                <Tab.Screen name="تحت التنفيذ" component={Under_complete_order} />
                <Tab.Screen name="مكتمل" component={Complete} />
            </Tab.Navigator>
        </>
    );
}
const styles = StyleSheet.create({


    Header_View:
    {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: RFPercentage(23),
        width: SIZES.width,
        marginTop: RFPercentage(-2.5),
        backgroundColor: COLORS.white,
        padding: RFPercentage(3),
    },

    back_Icon:
    {
        height: RFPercentage(3),
        width: RFPercentage(2.5),
        marginTop: RFPercentage(1.5)
    },
    FakeButton_style:
    {
        width: RFPercentage(0),
    },

    FakeView_style:
    {
        height: 0,
        marginTop: RFPercentage(-13)
    },

    HeaderText_style:
    {
        fontSize: RFPercentage(3.5),
        fontFamily: 'Changa-Medium'
    },
    Button_style: {
        // backgroundColor : "#00F",
        paddingVertical: RFPercentage(.5),
        width: SIZES.width * .9,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    view_in_button_style: {
        flexDirection: 'row',
        alignItems: "center"
    }
    ,
    Button_icon_end:
    {
        height: RFPercentage(3),
        marginRight: RFPercentage(4),
        width: RFPercentage(2.5),
    },
    Button_icon_start:
    {
        //  backgroundColor :"#0d0",
        height: RFPercentage(4),
        width: RFPercentage(4),
        marginLeft: RFPercentage(3),
        tintColor: COLORS.Green

    },
    photo_user_button: {
        alignSelf: "center",
        height: RFPercentage(25),
        margin: RFPercentage(2),
        width: RFPercentage(25),
        borderRadius: RFPercentage(50),
        backgroundColor: "#000"
    },
    user_name: {
        textAlign: "center",
        justifyContent: "center",
    },
    line: {
        height: RFPercentage(.1),
        backgroundColor: COLORS.black,
        width: SIZES.width * .9,
        alignSelf: "center"
    },
    Button_style_shop: {
        paddingVertical: RFPercentage(.5),
        width: SIZES.width * .8,
        height: RFPercentage(8),
        backgroundColor: COLORS.Green,
        margin: RFPercentage(3),
        borderRadius: RFPercentage(3),
        alignItems: "center",
        justifyContent: "center"
    },
    text_style: {
        textAlign: "center",
    }


})