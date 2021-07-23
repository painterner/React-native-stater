import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, CommonStyles } from "../style";
import { Any } from "../types";
interface CardButtonProps {
  children?: Any;
  style?: Any;
  onPress: () => void
}

/**
 * card shadow box
 * @constructor
 */
export const CardButton = (props: CardButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[CommonStyles.shadow, _styles.root, props.style]}>
      <View style={_styles.sub}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

const _styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.White,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  sub: {
    flex: 1
  }
});
