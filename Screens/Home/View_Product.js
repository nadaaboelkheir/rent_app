import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SwipeListView } from 'react-native-swipe-list-view';

import { COLORS, FONTS, Icons, SIZES } from '../../constants';
import { SliderBox } from "react-native-image-slider-box"
import { Rating } from 'react-native-ratings';
import { ConfirmButton, Statues } from '../../components';
import { useSelector, } from "react-redux";

import axios from 'axios';








const View_Product = ({ route, navigation }) => {
  const { productArray,ind } = route.params;
  // const state = useSelector((state) => (state.products.Categories[index].Products))
  const [product, setProduct] = useState({})


  const [dark, setdark] = useState(false);
  const [ImageArr, setImageArr] = useState('')
  const [count, setCount] = useState(1)
  const [maxCount, setmaxCount] = useState(product.item_Avalable_Quantity)

  // const [product_name, setproduct_name] = useState(product.item_name)
  // const [PriceBeforeDeduction, setPriceBeforeDeduction] = useState(product.item_price)
  const [PriceAfterDeduction, setPriceAfterDeduction] = useState('product.finallyPrice')
  // const [Location, setLocation] = useState(product.item_place)
  const [commercial_number, setcommercial_number] = useState('product.RentInfo.commercial_number')
  // const [DateOfJoin, setDateOfJoin] = useState(product.item_date)
  // const [detalis_Text, setdetalis_Text] = useState(product.item_description)
  const [Ad_number, setAd_number] = useState('product.RentInfo.Ad_Number')


  const GetMYDAta = () => {
     axios.post('https://tranningrent.000webhostapp.com/Rent/Data_Item.php', { ID_item:ind})
        .then(function (res) {
           console.log(res.data)
           setProduct(res.data)
        })
}



useEffect(() => {
    GetMYDAta()
    // alert(JSON.stringify(product.item_image))
}, [])
  

  const Line = () => {
    return (
      <Text numberOfLines={1} style={{ color: dark ? COLORS.white : COLORS.black }}>
        _____________________________________________________________
      </Text>)
  }

  console.log(product)

  return (
    <>
      <Statues />

      <ImageHeaderScrollView
        maxHeight={SIZES.height * 0.35}
        headerContainerStyle={{ backgroundColor: dark ? COLORS.black : COLORS.white, }}
        minHeight={40}
        bouncesZoom={true}

        renderFixedForeground={() => (
          <>

            <View style={styles.HeaderIcon_View} >
              <TouchableOpacity onPress={() => console.log("tap!!")}>
                <Image source={Icons.share} style={[styles.Share_Icon, { tintColor: dark ? COLORS.white : COLORS.black }]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Image source={Icons.left_arrow} style={[styles.Share_Icon, { tintColor: dark ? COLORS.white : COLORS.black }]} />
              </TouchableOpacity>
            </View>

            <SliderBox
              images={ImageArr}
              // autoplay={false}
              dotStyle={styles.dotStyle}
              dotColor={COLORS.LightGreen}
              circleLoop={true}
              style={styles.SliderBox}
            // onCurrentImagePressed={() => { this.props.navigation.navigate("EventDetails") }} 
            /> 


          </>



        )}
      >
        <View style={{ padding: RFPercentage(2), backgroundColor: dark ? COLORS.black : COLORS.white, }}>

          <View style={styles.productName_Line}>
            <Text style={[FONTS.Bold_Text, { color: dark ? COLORS.white : COLORS.black }]}>{product.item_name}</Text>
            <View style={styles.Counter_View}>
              <Text
                onPress={() => { { count > 1 ? setCount(count - 1) : null } }}
                style={styles.minus_buton}>ــ</Text>
              <Text style={styles.counter_num}>{count <= 9 ? 0 : null}{count}</Text>
              <TouchableOpacity disabled={count >= maxCount ? true : false} onPress={() => { setCount(count + 1) }}>
                <Text style={styles.Plus_buton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.PriceCounter}>
            <Text style={[FONTS.semiBold_Text, { color: COLORS.Green }]}>{PriceAfterDeduction}ج</Text>
            <Text style={[styles.Product_Price, { color: dark ? COLORS.white : COLORS.black }]}> {product.item_price}ج </Text>
          </View>

          <View style={styles.productName_Line}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={Icons.location} style={[styles.location_Icon, { tintColor: dark ? COLORS.white : COLORS.black }]} />
              <Text style={[FONTS.Small_Text, { color: dark ? COLORS.white : COLORS.black }]}>  {product.item_place}  </Text>
            </View>
          </View>

          <Line />


          <View style={styles.LightGreen_View}>
            <Text style={FONTS.semiBold_Text}>التـفاصــيل</Text>
       
          </View>

          <Text style={[FONTS.Small_Text, styles.margin_text, { color: dark ? COLORS.white : COLORS.black }]}>{product.item_description}</Text>

          <Line />


          <View style={styles.LightGreen_View}>
            <Text style={FONTS.semiBold_Text}>المؤجـــر</Text>
          </View>

          <Text style={[FONTS.Small_Text, styles.margin_text, { color: dark ? COLORS.white : COLORS.black }]}>عضــو مـنـذ :  {product.item_date}</Text>
          <Text style={[FONTS.Small_Text, styles.margin_text, { color: dark ? COLORS.white : COLORS.black }]}>رقـــم السـجـــل التـجاري :  {commercial_number}</Text>
          <Text onPress={() => { alert('pressed') }} style={[FONTS.semiBold_Text, styles.visitProfile_Text]}>اطــلــع عــلي المــلف الشــخــصي</Text>

          <Line />


          <Text style={[FONTS.Small_Text, styles.margin_text, { color: dark ? COLORS.white : COLORS.black }]}>رقـــم الاعــلان : {Ad_number}</Text>

          <Line />


        </View>


        <View style={{ height: RFPercentage(12.5), justifyContent: 'center', backgroundColor: dark ? COLORS.black : COLORS.white }}>
          <ConfirmButton
            ConfirmButtonText='احــجــز الــان '
            Confirm_onPress={() => { navigation.navigate('CheckOut') }}
            ConfirmButton_Styles={{ marginTop: RFPercentage(-2) }}
          />
        </View>

      </ImageHeaderScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  HeaderIcon_View:
  {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: RFPercentage(3),
    alignItems: 'center'
  },
  Share_Icon:
  {
    height: RFPercentage(3),
    width: RFPercentage(3),
    marginTop: RFPercentage(1)
  },

  productName_Line:
  {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Counter_View:
  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFPercentage(1),
    backgroundColor: COLORS.smooth_color,
    width: SIZES.width * .3,
    height: RFPercentage(4.5),
    borderRadius: 7.5
  },
  minus_buton:
  {
    marginTop: -RFPercentage(1),
    fontSize: RFPercentage(4),
    fontWeight: 'bold'
  },
  counter_num:
  {
    fontSize: RFPercentage(2.6),
    fontWeight: 'bold'
  },
  Plus_buton:
  {
    marginTop: -RFPercentage(.75),
    fontSize: RFPercentage(4),
    fontWeight: 'bold',
    color: COLORS.Green
  },
  location_Icon:
  {
    height: RFPercentage(2.2),
    width: RFPercentage(2.2),
    marginTop: RFPercentage(.5)
  },
  PriceCounter:
  {
    flexDirection: "row",
    alignItems: 'center'
  },
  LightGreen_View:
  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RFPercentage(1),
    backgroundColor: COLORS.LightGreen,
    marginTop: RFPercentage(1.5),
    width: SIZES.width * .3,
    height: RFPercentage(4.5),
    borderRadius: 7.5
  },
  margin_text:
  {
    marginTop: RFPercentage(1.5)
  },
  visitProfile_Text:
  {
    marginTop: RFPercentage(1.5),
    color: COLORS.Green
  },
  cart_Style2:
  {
    marginLeft: RFPercentage(1.8),
    tintColor: COLORS.white,
    height: RFPercentage(3),
    width: RFPercentage(3),
  },

  dotStyle:
  {
    width: 1,
    height: 10,
    paddingHorizontal: 5
  },
  Product_Price:
  {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'dashed',
    textDecorationColor: COLORS.Green,
    marginLeft: RFPercentage(1.5),
    fontSize: RFPercentage(2.2)
  },
  SliderBox:
  {
    height: RFPercentage(28),
    width: SIZES.width * .95,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: RFPercentage(1.5),
    alignSelf: 'center',
    
  },
  button_view:
  {
    paddingHorizontal: RFPercentage(2),
    flexDirection: 'row',
    height: RFPercentage(7),
    backgroundColor: COLORS.Green,
    borderRadius: SIZES.ButtonRadius,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: RFPercentage(2)
  },
})


export default View_Product