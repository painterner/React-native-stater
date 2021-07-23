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
import * as icons from "../../icons";
import { AppImage } from "../../components/Image";
import { COLORS, MARGINS } from "../../style";

interface Props {
  color?: string
  left?: boolean;
  style?: any;
  onPress?: () => void;
}

/**
 * ModalCloseIcon component
 * @constructor
 */
export const ModalCloseIcon = (props: Props) => {
  const { t } = useTranslation();

  const [w, h] = [30, 30];

  let posStyle: any = {
    position: "absolute",
  };
  posStyle = {
    ...posStyle,
    left: "auto",
    right: MARGINS.side,
    top: MARGINS.side,
  };
  if (props.left) {
    posStyle = {
      ...posStyle,
      left: MARGINS.side,
      right: "auto",
      top: MARGINS.side,
    };
  }

  return (
    <AppImage
      style={{ ...posStyle, ...props.style }}
      onPress={props.onPress}
      source={icons.closeIcon}
      width={w}
      height={h}
      tintColor={props.color || COLORS.Black}
    ></AppImage>
  );
};

const _styles = StyleSheet.create({
  container: {},
});
