import { View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import React, { createRef, useState } from "react";
import { ScreenWrapper } from "../../components/Screen";
import { useNavigation } from "react-navigation-hooks";
import { askForExitAndroid, useAndroidBack } from "../../components/Hooks";
import { useTranslation } from "react-i18next";
import * as constants from "../../constants";
import Svg, {
  Path,
  Symbol,
  Circle,
  Use,
  Image,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  G,
  Ellipse,
  Rect,
  Polygon,
  Text,
} from "react-native-svg";

interface Props {
  width?: number;
  flagFill?: string;
  backgroundOpacity?: string;
  onPress?: () => void;
}

/**
 * Scanning Mask Svg component
 * @constructor
 */
export const ScanningMaskSvg = (props: Props) => {
  // base window size
  const base = 300;

  // flag size configs
  const fgw = 10;
  const fgl = 100;
  const fgr = 30;

  // flag position configs
  const mgv = 20;
  const mgh = 10;
  const ov = 2;
  const lt = { x: mgv - ov, y: mgh - ov };
  const rt = { x: base - mgv + ov, y: mgh - ov };
  const lb = { x: mgv - ov, y: base - mgh + ov };
  const rb = { x: base - mgv + ov, y: base - mgh + ov };

  return (
    <Svg viewBox={`0 0 ${base} ${base}`}>
      <Defs>
        <Defs>
          <Path
            id="flag"
            d={`M ${lt.x} ${fgl} V ${lt.y + fgr} 
                  A ${fgr} ${fgr} 0 0 1 ${lt.x + fgr} ${lt.y} 
                  H ${fgl} v ${fgw} H ${lt.x + fgr}
                  A ${fgr - fgw} ${fgr - fgw} 0 0 0 ${lt.x + fgw} ${lt.y + fgr} 
                  V ${fgl}
                  Z`}
            fill={`${props.flagFill || "white"}`}
          ></Path>
        </Defs>
        <ClipPath id="clip">
          <G scale="1" x="0" y="0">
            {/* <Polygon points="20,60 20,80 50,70" /> */}
            <Path
              id="background"
              d={`M ${lt.x + ov} ${lt.y + fgr + ov} 
                  A ${fgr} ${fgr} 0 0 1 ${lt.x + fgr + ov} ${lt.y + ov}
                  H ${rt.x - fgr - ov}
                  A ${fgr} ${fgr} 0 0 1 ${rt.x - ov} ${rt.y + fgr + ov}
                  V ${rb.y - fgr - ov}
                  A ${fgr} ${fgr} 0 0 1 ${rb.x - fgr - ov} ${rb.y - ov}
                  H ${lb.x + fgr + ov}
                  A ${fgr} ${fgr} 0 0 1 ${lb.x + ov} ${lb.y - fgr - ov}
                  
                  H 0
                  V ${base}
                  H ${base}
                  V ${0}
                  H ${0}
                  V ${lb.y - fgr - ov}
                  H ${lb.x + ov}

                  Z`}
            ></Path>
          </G>
        </ClipPath>
      </Defs>
      <Rect
        x="0"
        y="0"
        width={`${base}`}
        height={`${base}`}
        fill="black"
        opacity={`${props.backgroundOpacity || "0.5"}`}
        clipPath="url(#clip)"
      />
      <Use href="#flag" transform="scale(1,1) translate(0, 0)" />
      <Use href="#flag" transform="scale(1,-1) translate(0, -300)" />
      <Use href="#flag" transform="scale(-1,1) translate(-300, 0)" />
      <Use href="#flag" transform="scale(-1,-1) translate(-300, -300)" />
    </Svg>
  );
};

const _styles = StyleSheet.create({
  container: {},
});
