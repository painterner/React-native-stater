import React from "react";
import { StyleSheet, View } from "react-native";
import { getParameter, getNumberStyleParameter } from "src/common/react-helper";
import { COLORS, CommonStyles, MARGINS } from "../../style";
import { Any } from "../../types";
interface CardBoxProps {
  padding?: Any;
  margin?: Any;
  border?: Any;
  children?: Any;
  shadow?: boolean;
  style?: Any;
}

/**
 * card shadow box
 * @constructor
 */
export const Card = (props: CardBoxProps) => {
  const padding = getNumberStyleParameter(
    props.padding,
    MARGINS.card,
    "padding"
  );
  const margin = getNumberStyleParameter(props.margin, MARGINS.card, "margin");
  const shadow = getParameter(props.shadow, true);
  const border = getParameter(props.border, true);
  return (
    <View
      style={[
        _styles.root,
        shadow && CommonStyles.shadow,
        shadow && _styles.shadow,  // for displaying shadow
        !shadow && border && _styles.border,
        padding,
        margin,
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
};

const _styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.White,
    borderRadius: 5,
  },
  shadow: {

  },
  border: {
    borderWidth: 1,
    borderColor: COLORS.BorderGray,
  },
});
