import React, {useState} from "react";
import { View, StyleSheet, ViewProps} from "react-native";


interface Props extends ViewProps {
    children?: React.ReactNode;
    onPress?: () => {}
}

export const Tester1Screen  = ({...props}: Props) => {

    return null;
}

const _styles = StyleSheet.create({
    title: {

    },
    desc: {
        
    }
})