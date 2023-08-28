import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { Statues } from "../../components";
import { COLORS, FONTS, Icons, Images, SIZES } from "../../constants";




const VIEW_image = () => {
    const [profile_image , setprofile_image] = useState(Images.user_Image) 
      return (
        <>
            <Statues />


            <Text>scaac</Text>
            
        </>
    );
}



export default VIEW_image;