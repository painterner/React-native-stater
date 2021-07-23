import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
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
    cy = cy
  } else {
    cy = cy + ov
  }

  const w = props.width;
  const r = props.r;
  const cx = props.cx;

  return (
    <Svg viewBox={`0 0 ${props.width} ${r*2 + ov}`} preserveAspectRatio="none">
      <Defs>
        <ClipPath id="clip">
          {/* <Circle cx={props.cx} cy={cy} r={props.r}></Circle> */}
          <Path
            d={`M 0 0 L ${cx} 0 L ${cx} ${cy - r} 
                A ${r} ${r} 0 0 0 ${cx} ${cy + r}
                A ${r} ${r} 0 0 0 ${cx} ${cy - r}
                
                L ${w} 0
                L ${w} ${r*2 + ov}
                L ${0} ${r*2 + ov}
                Z
            `}
          ></Path>
        </ClipPath>
      </Defs>

      <Rect
        x="0"
        y="0"
        width={`${props.width}`}
        height={`${r*2 + ov}`}
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
