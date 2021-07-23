import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppText } from "../Text";
import { COLORS, MARGINS } from "../../style";

interface Props {
  children?: any;
  onPress?: () => void;
  bottomBorder?: boolean;
  style?: any;
}

/**
 * BarNext component
 * @constructor
 */
export const BarNext = ({ bottomBorder = true, ...props }: Props) => {
  const { t } = useTranslation();

  let bottomBorderStyle = {};
  if (bottomBorder) {
    bottomBorderStyle = {
      borderBottomColor: COLORS.BorderGray,
      borderBottomWidth: 1,
    };
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={[props.style]}>
      <View style={[_styles.container, bottomBorderStyle]}>
        <View style={_styles.content}>{props.children}</View>

        <Image
          style={_styles.image}
          source={require("../../assets/icons/select-arrow.png")}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 5,
    marginHorizontal: MARGINS.side,
  },
  content: {
    flexDirection: "row",
  },
  image: {
    width: 30,
    height: 30,
  },
});
