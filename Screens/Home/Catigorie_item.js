
import React, { useEffect, useState } from 'react'


import { RFPercentage } from "react-native-responsive-fontsize";
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Image, TextInput, ScrollView } from 'react-native'
import { COLORS, FONTS, Icons, Images, SIZES } from '../../constants';
import { Header, Statues } from '../../components';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { EmptyproductArr, UpdateproductArr } from '../Store/ProductsAction';




const Catigorie_Items = ({ route, navigation }) => {
    var { catogery_id, name } = route.params;
    const state = useSelector((state) => (state.products))


    const search_fun = (value) => {
        let arr = productArray
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].item_name.toLowerCase().includes(value.toLowerCase())) {
                arr[i].item_show = "1"
            } else {
                arr[i].item_show = "0"
            }
        }
        setproductArray(arr)
    }



    const [dark, setdark] = useState(state.dark);
    const [CategorieName, setCategorieName] = useState(name)
    const [SearchValue, setSearchValue] = useState('')


    const [productArray, setproductArray] = useState([]
        // state.Categories[catogery_id].Products
        )


    const GetMYDAta = () => {
        axios.post('https://tranningrent.000webhostapp.com/Rent/items.php', { catogery_id:catogery_id })
            .then(function (res) {
               console.log(res.data)
                setproductArray(res.data)
            })
    }



    useEffect(() => {
        GetMYDAta()
    }, [])
    return (
        <>
            <Statues />

            <View style={[styles.bgView, { backgroundColor: dark ? COLORS.black : COLORS.white, }]}>

                <Header
                    Header_name={CategorieName}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />

                <TextInput
                    value={SearchValue}
                    onChangeText={(value) => {
                        setSearchValue(value)
                        search_fun(value)
                    }}
                    placeholder='مـا الــلـذي تــبحـث عنــه........!'
                    style={[styles.SerchBar, FONTS.Small_Text]}
                />
                <ScrollView>
                    <View style={styles.Categories_MainView}>

                        {(productArray).map((item, index) => (
                            <>
                                {item.item_show == "1" ?
                                    (
                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate('View_Product',
                                                {
                                                    ind: index+1,
                                                    productArray                                                }
                                            )
                                            
                                        }} style={[styles.product_View, { backgroundColor: dark ? COLORS.LightGreen : COLORS.smooth_color, }]}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                                                <View style={[styles.Deduction_View, { backgroundColor: dark ? (item.item_Deduction_Value == 0 ? COLORS.LightGreen : COLORS.DarkGreen) : (item.item_Deduction_Value == 0 ? COLORS.smooth_color : COLORS.Green) }]}>
                                                    {item.item_Deduction_Value == 0
                                                        ?
                                                        null
                                                        :
                                                        (
                                                            <Text style={styles.Deduction_Text}>خــصــم{item.item_Deduction_Value}%</Text>
                                                        )
                                                    }
                                                </View>


                                            </View>

                                            <Image
                                             source={{uri:item.item_image}}
                                              style={styles.product_Image} />
                                            <Text style={[styles.productName, FONTS.Reg_Text]}>{item.item_name}</Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={[styles.finallyPrice, FONTS.Bold_Text, { color: dark ? COLORS.white : COLORS.Green }]}> {item.item_price}ج </Text>

                                                {item.Deduction_Value == 0
                                                    ?
                                                    null
                                                    :
                                                    (
                                                        <Text style={[styles.Product_Price, { color: dark ? COLORS.DarkGreen : COLORS.black }]}> {item.finallyPrice}ج </Text>
                                                    )
                                                }
                                                <TouchableOpacity onPress={() => { alert('add To cart') }}
                                                    style={styles.cart_View}>
                                                    <Text style={[styles.productName, FONTS.Small_Text]}> </Text>
                                                </TouchableOpacity>
                                            </View>

                                        </TouchableOpacity>
                                    )
                                    :
                                    (null)
                                }


                            </>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    bgView: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center'
    },

    SerchBar:
    {
        width: SIZES.width * .9,
        height: RFPercentage(6),
        backgroundColor: COLORS.smooth_color,
        marginTop: RFPercentage(3),

        borderRadius: 10,
        paddingHorizontal: RFPercentage(2.5)
    },
    Categories_MainView:
    {
        marginTop: RFPercentage(2.5),
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    product_View:
    {
        height: RFPercentage(32.5),
        width: SIZES.width * .39,
        backgroundColor: COLORS.smooth_color,
        marginTop: RFPercentage(3),
        borderRadius: 15,
        marginHorizontal: RFPercentage(1.5),
    },
    Deduction_View:
    {
        height: RFPercentage(4),
        width: SIZES.width * .19,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15
    },
    Deduction_Text: {
        color: COLORS.white,
        fontSize: RFPercentage(2)
    },
    product_Image:
    {
        height: RFPercentage(12.5),
        width: RFPercentage(12.5),
        borderRadius:15,
        alignSelf: 'center',
        marginTop: RFPercentage(4.5)
    },
    productName:
    {
        alignSelf: 'center',
        marginTop: RFPercentage(2),
    },
    Product_Price:
    {
        marginTop: RFPercentage(1),
        textDecorationLine: 'line-through',
        textDecorationStyle: 'dashed',
        textDecorationColor: COLORS.Green
    },

    cart_View:
    {
        height: RFPercentage(6),
        width: RFPercentage(6),
        // backgroundColor: COLORS.Green,
        marginLeft: RFPercentage(3.3),
        // marginTop: RFPercentage(-1.35),
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    finallyPrice:
    {
        marginTop: RFPercentage(0),
    },
    Plus_buton:
    {
        marginTop: -RFPercentage(.75),
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        color: COLORS.white
    },
    button_view:
    {
        flexDirection: 'row',
        margin: RFPercentage(2),
        alignItems: "center",
        justifyContent: "center",
    },

})

export default Catigorie_Items
