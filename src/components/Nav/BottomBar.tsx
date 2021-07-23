import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { createRef, useEffect, useState } from "react";
import { useNavigation } from "react-navigation-hooks";
import { useTranslation } from "react-i18next";
import Svg from "react-native-svg";
import { AppText } from "../Text";
import { IconStar } from "../icons/IconStar";
import * as icons from "../../icons"
import { AppImage } from "../Image";
import { COLORS, MARGINS } from "../../style";

export interface IBottomBarItemProps {
  label: string;
  icon: any;
  style?: any;
}
interface Props {
  value: IBottomBarItemProps;
  onPress: (v: IBottomBarItemProps) => void;
  style?: any;
}

const config: IBottomBarItemProps[] = [
  {
    label: "HOME",
    icon: () => <AppImage width={24} height={24} source={icons.home2Icon}></AppImage>,
  },
  {
    label: "POINTS",
    icon: () => <AppImage width={24} height={24}  source={icons.starHollowIcon}></AppImage>,
  },
  {
    label: "",
    style: { marginTop: -30, },
    icon: () => <AppImage width={60} height={60}  source={icons.scanButtonIcon}></AppImage>,
  },
  {
    label: "GIFTS",
    icon: () => <AppImage width={24} height={24}  source={icons.giftIcon}></AppImage>,
  },
  {
    label: "HELP",
    icon: () => <AppImage  width={24} height={24} source={icons.helpIcon}></AppImage>,
  },
];

/**
 * BottomBar component
 * @constructor
 */
export const BottomBar = (props: Props) => {
  const { t } = useTranslation();
  const { navigate, goBack, getParam } = useNavigation();

  const value = props.value || config[0]
  useEffect(() => {
    props.onPress(config[0])
  }, [])
  return (
    <View style={[_styles.container, props.style]}>
      {config.map((c, index) => (
        <TouchableOpacity
          style={[_styles.item,c.style]}
          key={index}
          onPress={() => props.onPress(c)}
        >
          {c.icon()}
          <AppText style={_styles.text}>{c.label}</AppText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: "auto",
    bottom: 0,
    paddingBottom: 10,
    width: "100%",
    height: 100,
    paddingHorizontal: MARGINS.side*2,
    backgroundColor: COLORS.White
  },
  item :{
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 12
  }
});
