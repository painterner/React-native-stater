import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { AppText } from "./../Text";
import { useTranslation } from "react-i18next";
import { COLORS, CommonStyles, MARGINS } from "../../style";
import { useAndroidBack } from "../Hooks";
import { useNavigation } from "react-navigation-hooks";
const backIcon = require("../../assets/icons/right-arrow.png");
const closeIcon = require("../../assets/icons/close.png");

interface CancelNavProps {
  onBack?: () => void;
}

/**
 * cancel navigation bar
 * @constructor
 */
export const CancelNav = (props: CancelNavProps) => {
  const { t } = useTranslation();
  const { goBack } = useNavigation();
  const backFunc = () => (props.onBack ? props.onBack() : goBack());

  const onAndroidBackFunc = () => {
    backFunc();
    return true;
  };

  useAndroidBack({
    onBackEvt: onAndroidBackFunc,
    name: "cancel-back",
  });

  return (
    <View style={_styles.root}>
      <TouchableOpacity style={_styles.btn} onPress={backFunc}>
        <Image source={closeIcon} style={_styles.closeIcon} />
        <AppText style={_styles.cancelTxt}>{t("common.cancel")}</AppText>
      </TouchableOpacity>
    </View>
  );
};

interface NavBarProps extends CancelNavProps {
  title: string;
}

/**
 * normal navigation bar
 * @constructor
 */
export const NavBar = (props: NavBarProps) => {
  const { goBack } = useNavigation();
  const backFunc = () => (props.onBack ? props.onBack() : goBack());

  const onAndroidBackFunc = () => {
    backFunc();
    return true;
  };

  useAndroidBack({
    onBackEvt: onAndroidBackFunc,
    name: "normal-back",
  });

  return (
    <View style={_styles.normalRoot}>
      <TouchableOpacity style={_styles.backBtn} onPress={backFunc}>
        <Image source={backIcon} style={_styles.backIcon} />
      </TouchableOpacity>
      <AppText font={"BN"} weight={"Bold"} style={_styles.title}>
        {props.title}
      </AppText>
    </View>
  );
};

interface NavBarActionProps extends CancelNavProps {
  navTitle: string;
  activonTitle: string;
  onPress: () => void;
}
export const NavBarAction = (props: NavBarActionProps) => {
  return(
  <View style={_styles.navbarAction}>
    <NavBar title={props.navTitle}></NavBar>
    <TouchableOpacity onPress={props.onPress} style={_styles.action}>
      <AppText style={[{color: COLORS.DarkGreen}]}>{props.activonTitle}</AppText>
    </TouchableOpacity>
  </View>
  )
};

const _styles = StyleSheet.create({
  btn: { alignItems: "center", flexDirection: "row" },
  cancelTxt: { fontSize: 14, textTransform: "uppercase" },
  closeIcon: { height: 24, width: 24 },
  root: {
    alignItems: "center",
    backgroundColor: COLORS.White,
    height: 56,
    justifyContent: "center",
  },
  normalRoot: {
    flexDirection: "row",
    height: 90,
    backgroundColor: COLORS.White,
    alignItems: "center",
  },
  title: { fontSize: 36, textTransform: "uppercase" },
  backBtn: {
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    tintColor: COLORS.DarkGreen,
    width: 15,
    height: 15,
    transform: [{ rotate: "180deg" }],
  },
  navbarAction: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  action: {
    marginRight: MARGINS.side
  }
});
