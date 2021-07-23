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
import Svg, { Circle, ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface Props {
  width: number;
  cx: number;
  r: number;
  top: boolean; // position relative tooltip
  mt?: number; // margin to tooltip
  backgroundOpacity?: number;
  onPress?: () => void;
}

/**
 * SvgWalkThrought component
 * @constructor
 */
export const SvgWalkThroughMask = (props: Props) => {
  const { t } = useTranslation();

  const ov = props.mt || 3;

  let cy = props.r;
  if (props.top) {
    cy = (cy - ov) / 2;
  } else {
    cy = (cy - ov) / 2 + ov;
  }

  return (
    <Svg viewBox={`0 0 ${props.width} ${props.r + ov}`}>
      <Defs>
        <ClipPath id="clip">
          <Circle cx={props.cx} cy={cy} r={props.r}></Circle>
        </ClipPath>
      </Defs>

      <Rect
        x="0"
        y="0"
        width={`${props.width}`}
        height={`${props.r + ov}`}
        fill="black"
        opacity={`${props.backgroundOpacity || "0.5"}`}
        clipPath="url(#clip)"
      />
    </Svg>
  );
};

const _styles = StyleSheet.create({
  container: {},
});
