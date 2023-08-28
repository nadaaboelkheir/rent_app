import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
const COLORS = {
    
    black: '#000',
    white: 'white',
   
    Babyblue: '#13ebeb',
    DarkBabyblue: '#017070',
    LightBabyblue: '#85c3c3',

    Green: '#17a657',
    DarkGreen: '#055c2c',
    LightGreen: '#3fe98b',

    Orange: '#b76f11',
    DarkOrange: '#704002',
    LightOrange: '#e7a755',

    Red: '#f00',
    LightRed: '#ff4f7e',
    DarkRed: '#d9365e',

    Purple: '#8720a1',
    DarkPurple: '#4b045c',
    LightPurple: '#d379e9',

   smooth_color:'#e6ffe1'
}

const SIZES = {
    // global sizes
    SmallFont: RFPercentage(2),
    RegFont: RFPercentage(2.3),
    BoldFont: RFPercentage(2.7),
   
    ButtonRadius:RFPercentage(1.25),
    // app dimensions
    width,
    height,
};
const FONTS = {
    Reg_Text: {
        fontFamily: 'Changa-Regular',
        fontSize: SIZES.RegFont,
    },
   Bold_Text:{
    fontFamily: 'Changa-Bold',
    fontSize: SIZES.BoldFont,
   },
   semiBold_Text:{
    fontFamily: 'Changa-SemiBold',
    fontSize: SIZES.RegFont,
   },
   Small_Text:{
    fontFamily: 'Changa-Regular',
    fontSize: SIZES.SmallFont,
   },
    fontFamily: 'Changa-SemiBold',
};


export {
    COLORS,
    SIZES,
    FONTS
}