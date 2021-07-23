import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Svg, { Path } from "react-native-svg";

interface Props {
  color?: string;
  onPress?: () => void;
}

/**
 * onBoarding screen
 * @constructor
 */
export const SvgStar = (props: Props) => {
  const { t } = useTranslation();

  let fill = props.color || "#303030"

  return (
    <Svg viewBox="0 0 13 12">
      <Path
        id="polygon_1"
        data-name="polygon 1"
        d="M6.5,0,8.807,3.551,13,4.584,10.234,7.811,10.517,12,6.5,10.444,2.483,12l.284-4.189L0,4.584,4.192,3.551Z"
        fill={fill}
      />
    </Svg>
  );
};

const _styles = StyleSheet.create({
  container: {},
});
