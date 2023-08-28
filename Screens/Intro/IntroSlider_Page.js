import React, { useState } from "react";
import { View, Text, Image, StatusBar, AsyncStorage } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useDispatch } from "react-redux";
import { COLORS, SIZES, FONTS, Images } from '../../constants';
import AuthStack from "../Navigation/AuthStack";
import { UpdateFirstLogin } from "../Store/ProductsAction";
const slides = [
    {
        id: 1,
        title: "ابلكيشن لتأجير الاشياء ",
        description: 'هذا الابلكيشن يساعد الناس والتجار في تأجير اشيائهم مثل الاجهزه الالكترونيه وغيرها ',
        image: Images.Intro1
    },
    {
        id: 2,
        title: 'ابلكيشن لتأجير الاشياء ',
        description: 'هذا الابلكيشن يساعد الناس والتجار في تأجير اشيائهم مثل الاجهزه الالكترونيه وغيرها ',
        image: Images.Intro1
    },
    {
        id: 3,
        title: 'ابلكيشن لتأجير الاشياء',
        description: 'هذا الابلكيشن يساعد الناس والتجار في تأجير اشيائهم مثل الاجهزه الالكترونيه وغيرها ',
        image: Images.Intro1
    }
]

export default function Intro({ navigation }) {
    const [showAuthPage, setShowAuthPage] = useState(false);

    const dispPatch = useDispatch()
    const buttonLabel = (label) => {

        return (

            <View style={{

                backgroundColor: COLORS.Green,
                width: RFPercentage(12),
                height: RFPercentage(5.5),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: RFPercentage(2)
            }}>
                <Text style={[{ color: COLORS.white }, FONTS.Small_Text]}>
                    {label}
                </Text>
            </View>
        )
    }

    if (!showAuthPage) {
        return (
            <>
                <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

                <AppIntroSlider
                    data={slides}
                    renderItem={({ item }) => {
                        return (
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                backgroundColor: COLORS.white
                            }}>
                                <Image
                                    source={item.image}
                                    style={{
                                        width: '100%',
                                        height: RFPercentage(50),
                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={[FONTS.Bold_Text, { color: COLORS.Green, }]}>
                                    {item.title}
                                </Text>
                                <View style={{ alignItems: "center", justifyContent: "center", width: "95%" }}>
                                    <Text style={FONTS.Small_Text}>
                                        {item.description}
                                    </Text>
                                </View>
                            </View>
                        )
                    }}
                    activeDotStyle={{
                        backgroundColor: COLORS.Green,
                        width: RFPercentage(4),
                    }}
                    showSkipButton
                    renderSkipButton={() => buttonLabel("تخطي")}
                    renderNextButton={() => buttonLabel("التالي ")}

                    renderDoneButton={() => buttonLabel("تم")}
                    onDone={() => {
                        setShowAuthPage(true)
                        dispPatch(UpdateFirstLogin(
                            {
                                FirstTime:false
                            }
                        ))
                        navigation.replace('Auth')
                    }}
                />
            </>
        )
    }

    return (
        <>
            <AuthStack />

        </>
    )
}