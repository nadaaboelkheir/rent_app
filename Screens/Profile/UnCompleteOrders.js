import React, { useState } from "react";
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar, TouchableOpacity, StyleSheet } from 'react-native';


import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, FONTS, SIZES } from '../../constants';
import { ConfirmButton, Header, Statues } from '../../components';
import { useSelector } from "react-redux";


function UnCompleteOrders() {

    const state = useSelector((state) => (state.products))
    const [dark, setdark] = useState(state.dark);

    const [orderarr, setorderarr] = useState([
        {
            statues: "Waiting",
            orders_table: {

                order_id: "123",
                num_days: "5",
                time_date: "sun 13 nov"
            }

        },
        {
            statues: "Waiting",
            orders_table: {

                order_id: "142",
                num_days: "52",
                time_date: "sun 23 nov"
            }


        },
        {
            statues: "Waiting",
            orders_table: {

                order_id: "142",
                num_days: "52",
                time_date: "sun 23 nov"
            }


        },
        {
            statues: "done",
            orders_table: {

                order_id: "142",
                num_days: "52",
                time_date: "sun 23 nov"
            }


        }
    ])
    return (

        <View style={{ flex: 1, backgroundColor:dark?COLORS.black: COLORS.white }}>
                        <Statues />

            <ScrollView>
                <View style={{ justifyContent: "space-between", alignItems: "center" }}>

                    {orderarr.filter(function (item) {
                        return item.statues != "done";
                    }).map((items, index) => (
                        <>
                            <View style={[styles.Huge_view_style_order]}>
                                <View style={[styles.view_style_order]}>
                                    <Text style={[styles.text_style, { marginRight: RFPercentage(10) }, FONTS.Bold_Text]}>رقم الطلب</Text>
                                    <Text style={[styles.text_style, FONTS.Reg_Text, { textAlign: "left", width: SIZES.width * .3 }]}>{items.orders_table.order_id}</Text>
                                </View>

                                <View style={[styles.view_style_order]}>
                                    <Text style={[styles.text_style, { marginRight: RFPercentage(11) }, FONTS.Bold_Text]}>عدد الايام</Text>
                                    <Text style={[styles.text_style, FONTS.Reg_Text, { textAlign: "left", width: SIZES.width * .3 }]}>{items.orders_table.num_days} الايام</Text>
                                </View>

                                <View style={[styles.view_style_order]}>
                                    <Text style={[styles.text_style, { marginRight: RFPercentage(15) }, FONTS.Bold_Text]}>الحالة </Text>
                                    <Text style={[styles.text_style, FONTS.Reg_Text, { textAlign: "left", width: SIZES.width * .3 }]}>{items.statues}</Text>
                                </View>

                                <View style={[styles.view_style_order]}>
                                    <Text style={[styles.text_style, { marginRight: RFPercentage(14) }, FONTS.Bold_Text]}>الميعاد</Text>
                                    <Text style={[styles.text_style, FONTS.Reg_Text, { textAlign: "left", width: SIZES.width * .3 }]}>{items.orders_table.time_date}</Text>
                                </View>
                            </View>

                        </>
                    ))}



                </View>
            </ScrollView>
            <View style={{  alignItems: "center",height:RFPercentage(12.5),justifyContent:'center' }}>
                <ConfirmButton
                    ConfirmButtonText='اذهــب الـي الـتـسـوق'
                    ConfirmButton_Styles={{marginTop:RFPercentage(-2)}}
                />
            </View>
        </View>
    );
}





export default UnCompleteOrders

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

        borderRadius: RFPercentage(3),
        alignItems: "center",
        justifyContent: "center"
    },
    text_style: {
        textAlign: "center",
    },
    view_style_order: {
        flexDirection: "row",
        paddingVertical: RFPercentage(1)
        , alignItems: "center"
    }, 
    Huge_view_style_order: {
        backgroundColor: COLORS.smooth_color,
        width: SIZES.width * .8,
        marginVertical: RFPercentage(2),
        padding: RFPercentage(3)
        , borderRadius: 15
    }


})