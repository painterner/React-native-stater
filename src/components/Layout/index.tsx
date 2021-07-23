import _ from "lodash";
import React, { useState } from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { getNumberStyleParameter, getParameter } from "src/common/react-helper";
import { useOrientation } from "src/hooks/useOrientation";
import { CommonStyles, MARGINS } from "src/style";
import { AppStyleProp } from "src/types";
import { ScreenWrapper, ScreenWrapperProps } from "./Screen";

interface LayoutPageProps extends ScreenWrapperProps {
  padding?: boolean;
  children: React.ReactNode;
}

interface Props extends ViewProps {
  children?: React.ReactNode;
}

export const LayoutPage = ({ ...props }: LayoutPageProps) => {
  const orientation = useOrientation()
  let paddingStyle: AppStyleProp = getNumberStyleParameter(
    props.padding,
    orientation==='landscape'? MARGINS.landscapeSide : MARGINS.side,
    "paddingHorizontal"
  );

  return (
    <ScreenWrapper
      topColor={props.topColor}
      color={props.color}
      auth={props.auth}
      statusLight= {props.statusLight}
      style={[paddingStyle, props.style]}
    >
      {props.children}
    </ScreenWrapper>
  );
};
export const LayoutCenter = ({ ...props }: Props) => {
  return (
    <View style={[CommonStyles.flexCenter, props.style]}>{props.children}</View>
  );
};
export const LayoutRowMiddle = ({ ...props }: Props) => {
  return <View style={[_styles.rowCenter, props.style]}>{props.children}</View>;
};
export const LayoutRowFlex1 = ({ ...props }: Props) => {
  return (
    <View style={[_styles.fullRow, props.style]}>
      <View style={[CommonStyles.flex1]}>{props.children}</View>
    </View>
  );
};

const _styles = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  fullRow: {
    flexDirection: "row",
  },
});
