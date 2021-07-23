import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    Switch
  } from "react-native";
  import React, { createRef, useState } from "react";
  import { ScreenWrapper } from "../components/Screen";
  import { useNavigation } from "react-navigation-hooks";
  import { askForExitAndroid, useAndroidBack } from "../components/Hooks";
  import { useTranslation } from "react-i18next";
  import * as constants from "../constants"
import { AppText } from "./Text";
import { COLORS } from "../style";
import { Any } from "../types";
  
interface Props {
    tip?: string;
    name?: string;
    icon?: any,
    value: boolean,
    setValue: (v: boolean) => void
    onPress?: () => void
  }
  
  /**
  * onBoarding screen
  * @constructor
  */
  export const FeatureToggler = (props: Props) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation()
  
  useAndroidBack({
    onBackEvt: () => {
      askForExitAndroid();
      return true;
    },
    name: "normal-back",
  });

  const renderRow = (tip: string, title: string, icon: Any) => {
    return (
      <View style={_styles.row}>
        {icon && <Image source={icon} style={_styles.rowIcon} />}
        <View style={_styles.rowTxt}>
          <AppText size={13} color={COLORS.DarkGary}>
            {tip}
          </AppText>
          <AppText size={16}>{title}</AppText>
        </View>
        <Switch
          thumbColor={COLORS.White}
          trackColor={{
            false: COLORS.InputBorderColor,
            true: COLORS.DarkGreen,
          }}
          value={!!props.value}
          onValueChange={(v) => props.setValue(v)}
          style={_styles.switch}
          tintColor={"red"}
        />
      </View>
    );
  };
  
  // t("setup.camera_tip
  // t("setup.camera")
  return renderRow(
        props.tip!,
        props.name!,
        props.icon,
      )
  
  };
  
  const _styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 20,
      paddingHorizontal: 18,
    },
    rowIcon: { width: 21, height: 21, marginRight: 12 },
    rowTxt: { flex: 1 },
    switch: { ...Platform.select({ ios: { transform: [{ scale: 0.8 }] } }) },
  });
  