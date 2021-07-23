import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as _ from "lodash";
import { AppCircle } from "../Layout/Circle";
import { SvgInfo } from "../Svgs/Info";

interface Props {
  cs?: "small" | "middle" | "big";
  style?: any;
  color?: string;
  onPress?: () => void;
}

/**
 * IconInfo component
 * @constructor
 */
export const IconInfo = (props: Props) => {
  const { t } = useTranslation();

  let cs = 20;
  let vW = 5;
  let vh = 15;

  if (props.cs === "middle") {
  }

  return (
    <View style={[_styles.container, props.style]}>
      <AppCircle size={cs} color={props.color}>
        <View style={[{ width: vW, height: vh }]}>
          <SvgInfo></SvgInfo>
        </View>
      </AppCircle>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {},
});
