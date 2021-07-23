import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { ScreenWrapper } from "../components/Screen";
import { useNavigation } from "react-navigation-hooks";
import { askForExitAndroid, useAndroidBack } from "../components/Hooks";
import { useTranslation } from "react-i18next";
import * as constants from "../constants";
import { ImgSrc } from "../models/IImagSrc";

export interface AppAvatarProps {
  src: ImgSrc;
  name?: string;
  size?: number;
  leftBottomSrc?: ImgSrc;
  rightBottomSrc?: ImgSrc;
  style?: any;
}

/**
 * Avatar component
 * @constructor
 */
export const AppAvatar = ({size=50, ...props}: AppAvatarProps) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  useAndroidBack({
    onBackEvt: () => {
      askForExitAndroid();
      return true;
    },
    name: "normal-back",
  });

  const _styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size * 0.5,
    },
    leftBottomSrc: {
      position: "absolute",
      width: size * 0.3,
      height: size * 0.3,
      borderRadius: Math.round(size * 0.15),
      left: 0,
      top: "auto",
      bottom: 0,
    },
    rightBottomSrc: {
      position: "absolute",
      width: size * 0.3,
      height: size * 0.3,
      borderRadius: Math.round(size * 0.15),
      right: 0,
      top: "auto",
      bottom: 0,
    },
  });

  return (
    <View style={[_styles.container, props.style]}>
      <Image
        style={_styles.container}
        source={props.src.img || { uri: props.src.src }}
      ></Image>
      <Image
        style={_styles.leftBottomSrc}
        source={props.leftBottomSrc?.img || { uri: props.leftBottomSrc?.src }}
      ></Image>
      <Image
        style={_styles.rightBottomSrc}
        source={props.rightBottomSrc?.img || { uri: props.rightBottomSrc?.src }}
      ></Image>
    </View>
  );
};
