import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
  } from "react-native";
  import React, { createRef, useState } from "react";
  import { useTranslation } from "react-i18next";
  import * as _ from "lodash";
  import { AppCircle } from "../Layout/Circle";
  import { SvgInfo } from "../Svgs/Info";
import { SvgStar } from "../Svgs/Star";
  
  interface Props {
    cs?: "small" | "middle" | "big";
    color: string;
    style?: any;
    onPress?: () => void;
  }
  
  /**
   * IconInfo component
   * @constructor
   */
  export const IconStar = (props: Props) => {
    const { t } = useTranslation();
  
    let cs = 20;
    let vW = 15;
    let vh = 15;
  
    if (props.cs === "middle") {
      cs = 30;
      vW = 25;
      vh = 25;
    }

    const colorProps = props.color? {color: props.color} : {}
  
    return (
      <View style={[_styles.container, props.style]}>
        <AppCircle size={cs} {...colorProps}>
          <View style={[{ width: vW, height: vh }]}>
            <SvgStar color={"white"}></SvgStar>
          </View>
        </AppCircle>
      </View>
    );
  };
  
  const _styles = StyleSheet.create({
    container: {},
  });
  