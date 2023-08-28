import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Line } from "react-native-svg";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useSelector } from "react-redux";
import { Header, Statues } from "../../components";
import { COLORS, FONTS, Icons, Images, SIZES } from "../../constants";

{/* <Text onPress={()=>{this.props.navigation.navigate('ResetPass')}} style={[{ alignSelf: 'center',color:this.state.dark?COLORS.white:COLORS.Green },FONTS.Reg_Text]}>تغيير كـــــلمه الســـــر</Text> */ }

const Main_profile = ({ route, navigation }) => {
    const state = useSelector((state) => (state.products))
    const [dark, setdark] = useState(state.dark);

    const [image, setImage] = useState(Images.user_Image)
    const [name, setName] = useState('ahmed khalifa')
    const [Firstmodel, setFirstmodel] = useState(

        [

            {

                name: "السجل ",
                image: Icons.history,
                navi: 'History_profile'
            },
            {

                name: "الشكاوي ",
                image: Icons.complaints,
                navi: 'WriteProblem'
            },
            {

                name: "المراجعات ",
                image: Icons.Reviews,
                navi: 'ss'
            },

        ])
    const [secondModel, setSecondModel] = useState([

        {

            name: "تـعديــل كلمـه المـرور",
            image: Icons.Edit_profile,
            navi: 'ResetPass'
        },
        {

            name: "تسجيل الخروج",
            image: Icons.logout,
            navi: 'Auth'
        }
    ])

    const Emptyline = () => {
        return (
            <Text numberOfLines={1} style={{ color: COLORS.smooth_color, paddingVertical: RFPercentage(1) }} >
                {/* ______________________________________________________ */}
                ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
            </Text>
        )
    }

    const FirstFlatList = () => {
        return (
            <>
                {
                    Firstmodel.map((item, index) => (
                        <>


                            <TouchableOpacity onPress={() => {
                                navigation.replace(item.navi)
                            }}
                                style={styles.Button_style} >
                                <View style={styles.view_in_button_style}>
                                    <View style={{ height: RFPercentage(6), width: RFPercentage(6), borderRadius: 7.5, backgroundColor: COLORS.smooth_color, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={item.image} style={[styles.Button_icon_start]} />
                                    </View>
                                    <Text style={[FONTS.Reg_Text, { color: dark ? COLORS.white : COLORS.Green, marginLeft: RFPercentage(2) }]} > {item.name}</Text>
                                </View>

                                <Image source={Icons.SpicialleftArrow} style={[styles.Button_icon_end, { tintColor: dark ? COLORS.white : COLORS.black }]} />
                            </TouchableOpacity>

                        </>
                    ))
                }
            </>
        )
    }

    const SecondFlatlist = () => {
        return (
            <>
                {secondModel.map((item, index) => (
                    <>


                        <TouchableOpacity onPress={() => {
                            navigation.replace(item.navi)
                        }}
                            style={styles.Button_style} >
                            <View style={styles.view_in_button_style}>
                                <View style={{ height: RFPercentage(6), width: RFPercentage(6), borderRadius: 7.5, backgroundColor: COLORS.smooth_color, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={item.image} style={[styles.Button_icon_start]} />
                                </View>
                                <Text style={[FONTS.Reg_Text, { color: dark ? COLORS.white : COLORS.Green, marginLeft: RFPercentage(2) }]} > {item.name}</Text>
                            </View>

                            <Image source={Icons.SpicialleftArrow} style={[styles.Button_icon_end, { tintColor: dark ? COLORS.white : COLORS.black }]} />
                        </TouchableOpacity>

                    </>
                ))}
            </>
        )
    }
    return (
        <>
            <Statues />

            <Header Header_name="الملف الشخصي" />
            <View style={{ flex: 1, backgroundColor: dark ? COLORS.black : COLORS.white }}>
                <ScrollView>


                    <View style={{ height: RFPercentage(27), marginBottom: RFPercentage(5) }}>
                        <View style={{
                            alignSelf: 'center', margin: RFPercentage(2), height: RFPercentage(22), width: RFPercentage(22), justifyContent: 'center', borderRadius: RFPercentage(100), borderWidth: RFPercentage(.3), borderColor: COLORS.Green
                        }}>
                            <Image source={image} style={styles.photo_user_button}>

                            </Image>
                        </View>
                        <Text style={[FONTS.semiBold_Text, styles.user_name, { color: dark ? COLORS.white : COLORS.black }]} >{name}</Text>

                    </View>

                    <TouchableOpacity onPress={() => { navigation.navigate('Edit_profile') }} style={{ flexDirection: 'row', padding: RFPercentage(1.15), backgroundColor: COLORS.Green, alignSelf: 'center', borderRadius: RFPercentage(5) }}>
                        <Text style={[FONTS.Reg_Text, { color: COLORS.white }]}>تعديل الملف الشخصي </Text>
                        <Image source={Icons.SpicialleftArrow} style={[{
                            height: RFPercentage(4), width: RFPercentage(4), marginLeft: RFPercentage(3), tintColor: COLORS.white
                        }]} />
                    </TouchableOpacity>
                    <View style={{ alignItems: "center", justifyContent: 'space-between', marginTop: RFPercentage(5) }}>



                        <Emptyline />
                        <FirstFlatList />



                        <Emptyline />
                        <SecondFlatlist />

                    </View>
                </ScrollView>
            </View>
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
        // backgroundColor: COLORS.Purple,
        padding: RFPercentage(3),
        borderBottomEndRadius: RFPercentage(8),
        borderBottomStartRadius: RFPercentage(8)
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
        width: SIZES.width * .8,
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
        height: RFPercentage(2.5),
        marginRight: RFPercentage(4),
        width: RFPercentage(2.5),
    },
    Button_icon_start:
    {
        //  backgroundColor :"#0d0",
        height: RFPercentage(4),
        width: RFPercentage(4),
        tintColor: COLORS.Green

    },
    photo_user_button: {
        alignSelf: "center",
        height: RFPercentage(20),
        width: RFPercentage(20),
        borderRadius: RFPercentage(50),
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
    }


})
export default Main_profile