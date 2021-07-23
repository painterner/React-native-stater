import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { useNavigation } from "react-navigation-hooks";
import { useTranslation } from "react-i18next";
import Svg, { Path } from "react-native-svg";

interface Props {
  onPress?: () => void;
}

/**
 * onBoarding screen
 * @constructor
 */
export const ProfileScreen = (props: Props) => {
  const { t } = useTranslation();
  const { navigate, goBack, getParam } = useNavigation();

  return (
    <Svg viewBox="0 0 30 30">
      <Path d="M 0 0 L 30 30 Z" stroke="#000000" strokeWidth="1"></Path>
      <Path d="M 30 0 L 0 30 Z" stroke="#000000" strokeWidth="1"></Path>
    </Svg>
  );
};

const _styles = StyleSheet.create({
  container: {},
});
