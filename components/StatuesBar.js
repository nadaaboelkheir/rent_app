import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { COLORS } from "../constants";


function Statues(props) {

    const state = useSelector((state) => (state.products))
    const [dark, setdark] = useState(state.dark);

    useEffect(()=>{
        // console.log(state)
    })
    return (
        <>
            <StatusBar backgroundColor={dark ? COLORS.black : COLORS.white} barStyle={dark ? 'light-content' : 'dark-content'} />

        </>
    )
}
export default Statues