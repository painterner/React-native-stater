import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
  } from "react-native";
  import React, { createRef, useState } from "react";
  import { ScreenWrapper } from "../../components/Screen";
  import { useNavigation } from "react-navigation-hooks";
  import { askForExitAndroid, useAndroidBack } from "../../components/Hooks";
  import { useTranslation } from "react-i18next";
  import * as constants from "../../constants"
import { AppText } from "../Text";
import { COLORS, CommonStyles } from "../../style";
import { ITabOption } from ".";
  
  interface Props {
    options: ITabOption[];
    value?: ITabOption | undefined;
    onPress: (option: ITabOption) => void
  }
  
  /**
  * Slider tabs component 
  * example: scanning screen/swith between 'QR SCAN' and 'MANUAL'
  * @constructor
  */
  export const AppSliderTabs = ({ ...props}: Props) => {
    const { t } = useTranslation();
  
    const getRadius = (index: number, last: number) => {
      let result = {borderRadius: 20};
      return result;
    };
    const getActiveStyle = (option: ITabOption) => {
        let result = {}
        if(props.value && option.label === props.value.label) {
            result = {backgroundColor: COLORS.DarkGreen, color: COLORS.White}
        }
        return result
    }

    const onPress = (option: ITabOption) => {
        props.onPress!(option)
    }
  
    return (
      <View style={_styles.container}>
        {props.options.map((option, index) => (
            <TouchableOpacity style={_styles.touchable} key={index} onPress={() => onPress(option)}>
              <AppText
                style={[_styles.tab, getRadius(index, props.options.length - 1), getActiveStyle(option)]}
              >
                {option.label}
              </AppText>
            </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  const _styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: 'white',
      opacity: 1,
      borderRadius: 20,
      justifyContent: 'space-between',
      alignContent: 'center',
      flex: 1
    },
    touchable: {
      flex: 1,
    },
    tab: {
      flex: 1,
      textAlignVertical: 'center',
      textAlign: 'center'
    },
  });
  