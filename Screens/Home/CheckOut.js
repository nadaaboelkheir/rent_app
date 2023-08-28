import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { ConfirmButton, Header, Statues, Textinput } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { useSelector,  } from "react-redux";
import AntDesign from 'react-native-vector-icons/AntDesign'
import DatePicker from 'react-native-date-picker-light';

const CheckOut = ({route,navigation}) => {
    const state = useSelector((state) => (state.products))
    const [dark, setdark] = useState(state.dark);


    const [year, setYear] = useState((new Date()).getFullYear())

    const [monthes, setmonthes] = useState(["January " + year, "February " + year, "March " + year, "April " + year, "May " + year, "June " + year, "July " + year, "August " + year, "September " + year, "October " + year, "November " + year, "December " + year])
    const [monthIndex, setMonthIndex] = useState((new Date()).getMonth())
    const [month, setmonth] = useState(monthes[monthIndex])
    const [SelectedDate, setSelectedDate] = useState(null)
    const [DateArr, setDateArr] = useState([])
    const [numOfDay, setnumOfDay] = useState(0)

    useEffect(() => {
        // console.log(monthIndex)
        // console.log(numOfDay)
        // console.log(SelectedDate)
        // console.log(DateArr)
    }, [])

    return (
        <>
        <Statues/>
        <View style={[styles.bgView, { backgroundColor: dark ? COLORS.black : COLORS.white, }]}>
                <Header
                    Header_name='الــحــجـز'
                    onPress={() => { navigation.goBack() }}
                />


                <View style={styles.CategoriesText}>
                    <Text style={[FONTS.semiBold_Text,{color:dark?COLORS.white:COLORS.black}]}>يــوم الــحــجـز</Text>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[FONTS.Reg_Text, { color: COLORS.Green }]}>{month}</Text>
                        <AntDesign size={RFPercentage(2.5)} name="paperclip" color={COLORS.Green} style={{ marginLeft: RFPercentage(1) }} />
                    </TouchableOpacity>
                </View>

<ScrollView>

                <DatePicker locale={'es-mx'} selected={(date) => {
                    setmonth(date.month)
                    setSelectedDate(date)
                    setDateArr(date)
                }
                }
                ></DatePicker>



                <Textinput
                    value={numOfDay}
                    onChangeText={(value) => {
                        setnumOfDay(value)
                    }}
                    placeholderTextColor={dark?COLORS.white:COLORS.black}
                    placeholder='عــدد أيـام الحــجـز'
                    iconName='calendar'
                    keyboardType="numeric"
                />

</ScrollView>
                <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <ConfirmButton
                        ConfirmButtonText='اذهــب الـي الـتـسـوق'
                        Confirm_onPress={()=>{navigation.navigate('HomeScreen')}}
                    />
                </View>


            </View>
        </>
    )
}
const styles = StyleSheet.create(
    {

        bgView:
        {
            flex: 1,
            padding: RFPercentage(1)
        },
        CategoriesText:
        {
            flexDirection: 'row',
            marginTop: RFPercentage(3),
            marginBottom: RFPercentage(7.5),
            justifyContent: 'space-between',
        },
    }
)
export default CheckOut