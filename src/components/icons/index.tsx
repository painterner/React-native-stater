import React, {useState} from "react";
import { View, StyleSheet, ViewProps} from "react-native";
import { COLORS } from "src/style";
import { AppImage } from "../Image";
import * as icons from "src/icons"
import { AppStyleProp } from "src/types";


interface Props extends ViewProps {
    name: string;
    default?: boolean;
    children?: React.ReactNode;
    onPress?: () => void;
    onMultiplePress?: (index: number) => void;
}

export const AppIcon  = ({...props}: Props) => {

    const renderIcon = () => {
        switch(props.name) {
            case "close":
                return <AppImage onPress={props.onPress} src={icons.closeIcon} default></AppImage>
            case "chevron-left":
                return <AppImage onPress={props.onPress} src={icons.chevronLeftIcon} default></AppImage>
            case "chevron-right":
                return <AppImage onPress={props.onPress} style={[{transform: [{rotate: '180deg'}]}]} src={icons.chevronLeftIcon} default></AppImage>
            default:
                return null
        }
    }

    const getDefault = () => {

    }
    if(!props.default) {
        return (
            <View style={props.style}>
                {renderIcon()}
            </View>
        )
    }

    let styles: AppStyleProp = {}
    switch(props.name) {
        case 'filter': 
            styles = {padding: 10, backgroundColor: COLORS.Orange, height: 40, width: 40}
            break;
        case 'plus-square': 
            styles = {padding: 10}
            break;
        case 'chevron-right': 
            styles = {padding: 5, backgroundColor: COLORS.LightGary, width: 24, height: 24}
            break;
        case "plus":
            styles = {padding: 5, borderWidth:1, borderColor: COLORS.BorderGray, width: 24, height: 24}
            break;
        default: 
            return null

    }

    return (
        <View style={[_styles.center, styles, props.style]}>
            {renderIcon()}
        </View>
    )

}

const _styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    // headerIcon: {
    //     width: 24, 
    //     height: 24
    // },
    eye: {
        width: 22,
        height: 16,
        tintColor: COLORS.TxtGray
    }
})