import React, { useEffect, useState } from 'react'


import { Text, View, StyleSheet, Image, TextInput, FlatList, ScrollView, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONTS, Icons, Images, SIZES } from '../../constants';
import { SliderBox } from "react-native-image-slider-box"
import { useSelector, useDispatch } from "react-redux";
import { Statues } from '../../components';
import axios from 'axios';

function Home(props) {
    useEffect(() => {
        FetchData()
    }, [])

    const FetchData = () => {
        axios.get('https://tranningrent.000webhostapp.com/Rent/Select_categories.php')
            .then(function (res) {
                setCategoriesArr(res.data.categories)
            })
    }

    const state = useSelector((state) => (state.products))
    const firstIndex = 0
    const [CategoriesArr, setCategoriesArr] = useState([])
    const [productArr, setproductArr] = useState(state.Categories[firstIndex].Products)
    const [UserName, setUserName] = useState('أحمد خليفه')
    const [SearchValue, setSearchValue] = useState('')
    const [ImageArr, setImageArr] = useState([Images.Banner1, Images.Banner2, Images.Banner3])




    const search_fun = (value) => {
        let arr = productArr
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].item_name.toLowerCase().includes(value.toLowerCase())) {
                arr[i].item_show = "1"
            } else {
                arr[i].item_show = "0"
            }
        }
        setproductArr(arr)
    }


    const CategoriesList = () => {
        return (
            <>
                <FlatList

                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={CategoriesArr}
                    // pagingEnabled={true}
                    // pagination={true}
                    renderItem={({ item, index }) =>
                    (
                        <>
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate('Catigorie_Items',
                                    {
                                        catogery_id: item.category_id,
                                        name: item.category_name
                                    }
                                )
                            }} style={{ alignItems: 'center' }}>
                                <Image source={item.categories_image} style={styles.CategoriesImageFlatlist} />
                                <Text style={styles.CategoriesTextFlatlist}>{item.category_name}</Text>
                            </TouchableOpacity>
                        </>
                    )
                    }
                />
            </>
        )
    }

    const ProductsList = () => {
        return (
            <>
                <FlatList
                    data={productArr}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                    (
                        <>
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate('View_Product',
                                    {
                                        index: firstIndex,
                                        ind: index,
                                    }
                                )
                            }} style={styles.product_View}>

                                <View style={styles.Deduction_View}>
                                    {item.Deduction_Value == 0
                                        ?
                                        null
                                        :
                                        (
                                            <Text style={styles.Deduction_Text}>خــصــم{item.Deduction_Value}%</Text>
                                        )
                                    }
                                </View>

                                <Image source={item.Images[0]} style={styles.product_Image} />
                                <Text style={styles.productName}>{item.item_name}</Text>
                                <View style={styles.PriceRow}>
                                    <Text style={styles.finallyPrice}> {item.finallyPrice}ج </Text>

                                    {item.Deduction_Value == 0
                                        ?
                                        null
                                        :
                                        (
                                            <Text style={styles.Product_Price}> {item.item_price}ج </Text>
                                        )
                                    }
                                    <TouchableOpacity onPress={() => { alert('add To cart') }}
                                        style={styles.cart_View}>
                                        <Image source={Icons.shopping_cart} style={[styles.cart_Style2]} />
                                    </TouchableOpacity>
                                </View>

                            </TouchableOpacity>
                        </>
                    )
                    }

                />
            </>
        )
    }

    return (
        <>
            <Statues />

            {state.Statues != 'succes' ?
                (
                    <>

                        <View style={styles.bgView}>

                            {/* Header..................... */}
                            <View style={styles.mainHeaderView}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={Images.user_Image} style={styles.userImage} />
                                    <View style={styles.Header_Text}>
                                        <Text style={styles.Welcome_Text}>مرحبا</Text>
                                        <Text style={styles.UserName_Text}>{UserName}</Text>
                                    </View>
                                </View>

                            </View>

                            {/* Search bar............ */}
                            <TextInput
                                value={SearchValue}
                                onChangeText={(value) => { setSearchValue(value) }}
                                placeholder='مـا الــلـذي تــبحـث عنــه........!'
                                style={styles.SerchBar}
                            />

                            <View style={{ height: RFPercentage(2) }}></View>


                            <ScrollView
                                showsVerticalScrollIndicator={false}>
                                {/* Categories.......... */}
                                <View style={styles.CategoriesText}>
                                    <Text style={styles.BigText}>الــفئـــــات</Text>
                                    <Text onPress={() => {
                                        props.navigation.navigate('Catigories',{CategoriesArray:CategoriesArr})
                                    }} style={styles.ViewAll_Text}>عــرض الـجـــميــع</Text>
                                </View>


                                {/* Catigories List............... */}
                                <View style={styles.Categories_MainView}>
                                    <CategoriesList />
                                </View>



                                {/* Offer Banner............... */}
                                <SliderBox
                                    images={ImageArr}
                                    autoplay={true}
                                    dotStyle={styles.dotStyle}
                                    dotColor={COLORS.LightGreen}
                                    circleLoop={true}
                                    style={styles.SliderBox}
                                // onCurrentImagePressed={() => { this.props.navigation.navigate("EventDetails") }} 
                                />



                                {/* products .................. */}
                                <View style={styles.CategoriesText}>
                                    <Text style={styles.BigText}>الـاكثر تـداول</Text>
                                </View>


                                {/* Products Items.............. */}
                                <View style={{ flexDirection: 'row' }}>
                                    <ProductsList />
                                </View >


                                <View style={{ height: RFPercentage(2) }}></View>
                            </ScrollView >

                        </View >
                    </>
                )
                :
                (<>
                    <ActivityIndicator size={25}></ActivityIndicator>
                </>)
            }


        </>
    )
}

const styles = StyleSheet.create(
    {

        bgView:
        {
            flex: 1,
            paddingHorizontal: RFPercentage(1),
            paddingTop: RFPercentage(1),
            backgroundColor: COLORS.white
        },
        mainHeaderView:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        Welcome_Text:
            [
                FONTS.Bold_Text,
                {
                    color: COLORS.black
                }
            ],
        UserName_Text:
            [
                FONTS.Reg_Text,
                {
                    color: COLORS.black
                }
            ],
        BigText: [
            FONTS.semiBold_Text,
            {
                color: COLORS.black
            }
        ],
        PriceRow:
        {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        ViewAll_Text:
            [
                FONTS.Small_Text,
                {
                    color: COLORS.Green
                }
            ],
        userImage:
        {
            height: RFPercentage(7),
            width: RFPercentage(7)
        },
        Header_Text:
        {
            marginLeft: RFPercentage(2.5),
            height: RFPercentage(4),
            marginTop: RFPercentage(-.5)
        },
        Dark_button:
        {
            height: RFPercentage(7.5),
            width: RFPercentage(7.5),
            marginRight: RFPercentage(2)

        },
        cart_Style:
        {
            height: RFPercentage(4),
            width: RFPercentage(4),
            marginLeft: RFPercentage(3)
        },
        SerchBar:
            [{
                width: SIZES.width * .85,
                height: RFPercentage(6),
                marginTop: RFPercentage(3),
                borderRadius: 10,
                alignSelf: 'center',
                paddingHorizontal: RFPercentage(2.5),
                backgroundColor: COLORS.smooth_color

            },
            FONTS.Small_Text
            ],
        CategoriesText:
        {
            flexDirection: 'row',
            marginTop: RFPercentage(2.5),
            justifyContent: 'space-between',
        },
        Categories_MainView:
        {
            marginTop: RFPercentage(2.5),
            justifyContent: 'space-between'
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
            [{
                marginTop: RFPercentage(1.5),
                color: COLORS.Green,
            },
            FONTS.Small_Text
            ],
        dotStyle:
        {
            width: 1,
            height: 10,
            paddingHorizontal: 5
        },
        SliderBox:
        {
            height: RFPercentage(22),
            width: SIZES.width * .95,
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: RFPercentage(3)
        },
        product_View:
        {
            height: RFPercentage(32.5),
            width: SIZES.width * .35,
            marginTop: RFPercentage(3),
            borderRadius: 15,
            marginHorizontal: RFPercentage(1.5),
            backgroundColor: COLORS.smooth_color
        },
        Deduction_View:
        {
            height: RFPercentage(4),
            width: SIZES.width * .19,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomEndRadius: 15,
            borderTopStartRadius: 15,
            backgroundColor: COLORS.Green
        },
        Deduction_Text: {
            color: COLORS.white,
            fontSize: RFPercentage(2)
        },
        product_Image:
        {
            height: RFPercentage(12.5),
            width: RFPercentage(12.5),
            alignSelf: 'center',
            marginTop: RFPercentage(2)
        },
        productName:
            [{
                alignSelf: 'center',
                marginTop: RFPercentage(2),

            },
            FONTS.Small_Text
            ],
        Product_Price:
        {
            marginTop: RFPercentage(3.5),
            textDecorationLine: 'line-through',
            textDecorationStyle: 'dashed',
            textDecorationColor: COLORS.Green
        },
        cart_Style2:
        {
            marginLeft: RFPercentage(1.8),
            marginTop: RFPercentage(1.1),
            tintColor: COLORS.white,
            height: RFPercentage(3),
            width: RFPercentage(3),
        },
        cart_View:
        {
            height: RFPercentage(6),
            width: RFPercentage(6),
            marginLeft: RFPercentage(3.3),
            marginTop: RFPercentage(2.65),
            borderBottomEndRadius: 15,
            borderTopStartRadius: 15,
            backgroundColor: COLORS.Green
        },
        finallyPrice:
            [{
                marginTop: RFPercentage(2),
                color: COLORS.Green,

            },
            FONTS.Bold_Text
            ]
    }
)

export default Home