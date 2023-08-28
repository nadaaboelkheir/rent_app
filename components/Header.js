import React, { useState } from 'react'


import { Text, View, StatusBar, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useSelector, } from "react-redux";
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, Icons, SIZES } from '../constants';



const Header = (props) => {
    const state = useSelector((state) => (state.products))

    const [score1, setscore1] = useState(1)
    const [score2, setscore2] = useState(5)
    const [arr, setArr] = useState([])
    const addScore=()=>{
        arr.push(score1)
        arr.push(score2)
        console.log(arr)
    }


    const [dark, setdark] = useState(state.dark);
    return (
        <>
            <View style={[styles.Header_View, { backgroundColor: dark ? COLORS.black : COLORS.white, }]}>

                
                <TouchableOpacity onPress={props.onPress}>
                    <Image source={Icons.left_arrow} style={[styles.back_Icon, { tintColor: dark ? COLORS.white : COLORS.black, }]} />
                </TouchableOpacity>
                <View >
                    <Text style={[styles.HeaderText_style, { color: dark ? COLORS.white : COLORS.black, }]}>{props.Header_name}</Text>
                </View>

                <TouchableOpacity onPress={props.Sec_onPress}>
                    <Image source={props.Image_Source} style={[styles.Sec_Icon, { tintColor: dark ? COLORS.white : COLORS.black, }]} />
                </TouchableOpacity>

            </View>
            <View style={styles.FakeView_style}></View>

        </>
    )
}
const styles = StyleSheet.create({


    Header_View:
    {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: RFPercentage(23),
        width: SIZES.width,
        marginTop: RFPercentage(-2.5),
        padding: RFPercentage(3),
    },

    back_Icon:
    {
        height: RFPercentage(3),
        width: RFPercentage(2.5),
        marginTop: RFPercentage(1.5)
    },
    Sec_Icon:
    {
        height: RFPercentage(3.75),
        width: RFPercentage(3.75),
        marginTop: RFPercentage(1.5)
    },
    FakeButton_style:
    {
        // width: RFPercentage(0),
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


})

export default Header