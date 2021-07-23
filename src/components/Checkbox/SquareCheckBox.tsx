import { Any } from "../types";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, CommonStyles } from "../style";
import { AppText } from "./Base/Text";
import { useState } from "react";
import { useEffect } from "react";

export interface CheckboxProps {
  value: boolean;
  onChange: (v: boolean) => void;
  style?: Any;
  children?: React.ReactNode;
}

/**
 * Check box
 */
export const Checkbox = (props: CheckboxProps) => {
  const [value, setValue] = useState(true)

  useEffect(() => {
    setValue(props.value)
  }, [props.value])
  return (
    <View style={[CommonStyles.flexRow]}>
        <TouchableOpacity
          onPress={() => {
            setValue(!value)
            props.onChange(!value)
          }}
          style={[_styles.root, props.style, value && _styles.rootActive]}
        >
        </TouchableOpacity>
        {props.children && <AppText style={[_styles.text]}>{props.children}</AppText>}
    </View>
  );
};

const _styles = StyleSheet.create({
  root: {
    width: 20,
    height: 20,
    borderWidth: 6,
    backgroundColor: '#9e9e9e',
    borderColor: COLORS.LightGary,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  rootActive: {
    backgroundColor: COLORS.White,
    borderColor: COLORS.Red,
  },
  text: {
    fontSize: 14
  }
});
