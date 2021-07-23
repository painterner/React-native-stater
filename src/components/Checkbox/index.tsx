import { Any } from "../types";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../style";

const okIcon = require("../assets/icons/ok.png");

export interface CheckboxProps {
  value: boolean;
  onChange: (v: boolean) => void;
  style?: Any;
}

/**
 * Check box
 */
export const Checkbox = (props: CheckboxProps) => {
  const isSelect = props.value;
  return (
    <TouchableOpacity
      onPress={() => props.onChange(!props.value)}
      style={[_styles.root, props.style, isSelect && _styles.rootActive]}
    >
      {isSelect && <Image source={okIcon} style={_styles.okIcon} />}
    </TouchableOpacity>
  );
};

const _styles = StyleSheet.create({
  root: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: COLORS.DarkGary,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  rootActive: {
    borderColor: COLORS.DarkGreen,
    backgroundColor: COLORS.DarkGreen,
  },
  okIcon: { width: 15, height: 15 },
});

export interface CheckboxProps {
  value: boolean;
  onChange: (v: boolean) => void;
  style?: Any;
  children?: React.ReactNode;
}
