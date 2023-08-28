
import React, { useEffect, useState } from 'react'


import { RFPercentage } from "react-native-responsive-fontsize";
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import { COLORS, FONTS, Images } from '../../constants';
import { Header, Statues } from '../../components';
import { useSelector, } from "react-redux";




const Catigories = ({ navigation, route }) => {
    CategoriesArr
    var { CategoriesArray } = route.params;

    const state = useSelector((state) => (state.products))

    const [dark, setdark] = useState(state.dark);
    const [CategoriesArr, setCategoriesArr] = useState(CategoriesArray)

    useEffect(() => {
        // console.log(state.Categories)
    }, [])
    return (
        <>
            <Statues />

            <View style={[styles.bgView, { backgroundColor: dark ? COLORS.black : COLORS.white, }]}>


                <Header
                    Header_name='الــفئـــــات'
                    onPress={() => { navigation.goBack() }}
                />



                <View style={styles.Categories_MainView}>

                    {CategoriesArr.map((item, index) => (
                        <>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Catigorie_Items'
                                ,
                                    {
                                        Item_index: item.category_id,
                                        name:item.category_name
                                    }
                                )

                            }} style={{ alignItems: 'center' }}>
                                <Image source={Images.user_Image} style={styles.CategoriesImageFlatlist} />
                                <Text style={[styles.CategoriesTextFlatlist, { color: dark ? COLORS.LightGreen : COLORS.Green }, FONTS.Small_Text]}>{item.category_name}</Text>
                            </TouchableOpacity>
                        </>
                    ))}
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({

    bgView: {
        flex: 1,
        alignItems: 'center'
    },

    Categories_MainView:
    {
        marginTop: RFPercentage(2.5),
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    CategoriesImageFlatlist:
        {
            height: RFPercentage(12.5),
            width: RFPercentage(12.5),
            borderRadius: RFPercentage(10),
            backgroundColor: COLORS.smooth_color,
            marginHorizontal: RFPercentage(1.5)
        },
    CategoriesTextFlatlist:
    {
        marginVertical: RFPercentage(1.75),
        color: COLORS.Green
    },

})

export default Catigories
