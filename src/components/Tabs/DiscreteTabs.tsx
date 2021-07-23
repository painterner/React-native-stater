import {
    View,
    StyleSheet,
  } from "react-native";
  import React, { createRef, useState } from "react";
  import { AppText } from "../Base/Text";
  import { COLORS, MARGINS } from "../../style";
  import { AppTouchable } from "../Base/Touchable";
import { AppStyleProp } from "src/types";
  
export interface ITabOption {
    label: string;
    value: any;
  }

  interface Props {
    options: ITabOption[];
    value: ITabOption;
    style?: AppStyleProp;
    onChange: (option: ITabOption) => void;
  }
  
  /**
   * Discrete Tabs
   * @constructor
   */
  export const DiscreteTabs = (props: Props) => {
  
    const isActive = (option: ITabOption) => {
      return props.value && option.label === props.value.label;
    };
  
    return (
      <View style={[_styles.container, props.style]}>
        {props.options.map((option, index) => (
          <AppTouchable
            style={[
              _styles.touchable,
              isActive(option) && _styles.activeTouchable,
            ]}
            key={index}
            onPress={() => props.onChange(option)}
          >
            <AppText style={[_styles.tab, isActive(option) && _styles.activeTab]}>
              {option.label}
            </AppText>
          </AppTouchable>
        ))}
      </View>
    );
  };
  
  const _styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      height: 36
    },
    touchable: {
      backgroundColor: COLORS.White,
      borderWidth: 1,
      borderColor: COLORS.BorderGray,
      borderRadius: 8,
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center",
      padding: 12
    },
    activeTouchable: {
      backgroundColor: COLORS.Red
    },
    tab: {
      fontSize: 12,
      color: COLORS.Black,
    },
    activeTab: {
      color: COLORS.White
    }
  });
  