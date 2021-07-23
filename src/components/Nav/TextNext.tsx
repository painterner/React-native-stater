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
 * TextNext component
 * @constructor
 */
export const TextNext = ({ bottomBorder = false, ...props }: Props) => {
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
        <View style={_styles.content}>
          <AppText style={_styles.text}>{props.children}</AppText>
        </View>

        <Image
          style={_styles.image}
          source={require("../../assets/icons/right-arrow.png")}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 5,
    marginHorizontal: MARGINS.side,
    marginLeft: "auto",
    marginRight: 0,
  },
  content: {
    flexDirection: "row",
  },
  text: {
    color: COLORS.DarkGreen,
    marginRight: 10,
    fontWeight: 'bold'
  },
  image: {
    width: 20,
    height: 20,
    tintColor: COLORS.DarkGreen,
  },
});
