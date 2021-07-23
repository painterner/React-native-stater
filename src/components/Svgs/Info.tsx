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
  color?: any;
  onPress?: () => void;
}

/**
 * SvgInfo component
 * @constructor
 */
export const SvgInfo = (props: Props) => {
  const { t } = useTranslation();
  const { navigate, goBack, getParam } = useNavigation();

  const h = 50;
  const h1 = 15;
  const h2 = 30;
  const w = 10;
  const ov = 3;
  const fille = props.color || 'white'
  return (
    <Svg viewBox={`0 0 ${w} ${h}`}>
      <Path
        fill={fille}
        d={`M 0 ${ov} 
            A ${ov} ${ov} 0 0 1 ${ov} 0
            L ${w - ov} 0
            A ${ov} ${ov} 0 0 1 ${w} ${ov}
            L ${w} ${h1 - ov}
            A ${ov} ${ov} 0 0 1 ${w - ov} ${h1}
            L ${ov} ${h1}
            A ${ov} ${ov} 0 0 1 0 ${h1 - ov} 
            Z`}
      ></Path>

      <Path
        transform={`translate(0, ${h1+5})`}
        fill={fille}
        d={`M 0 ${ov} 
            A ${ov} ${ov} 0 0 1 ${ov} 0
            L ${w - ov} 0
            A ${ov} ${ov} 0 0 1 ${w} ${ov}
            L ${w} ${h2 - ov}
            A ${ov} ${ov} 0 0 1 ${w - ov} ${h2}
            L ${ov} ${h2}
            A ${ov} ${ov} 0 0 1 0 ${h2 - ov} 
            Z`}
      ></Path>
    </Svg>
  );
};

const _styles = StyleSheet.create({
  container: {},
});
