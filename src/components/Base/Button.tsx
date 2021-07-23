import { Any, AppStyleProp } from "../../types";
import {
  StyleSheet,
  TextInputProps,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import React from "react";
import { COLORS, CommonStyles } from "../../style";
import { AppText } from "./Text";
import { AppIcon } from "../icons";

export interface AppButtonProps extends TextInputProps {
  onPress?: () => void;
  title?: string;
  style?: Any;
  icon?: Any;
  left?: boolean;
  right?: boolean;
  negative?: boolean;
  disabled?: boolean;
  loading?: boolean;
  containerStyle?: AppStyleProp;
  disabledStyle?: any;
  disabledTextStyle?: any;
}

/**
 * App button
 * @param props the parent props
 * @constructor
 */
export const AppButton = (props: AppButtonProps) => {
  const isBack = props.icon === "back";
  const { loading } = props;
  const disabled = props.disabled || loading;
  return (
    <View style={[CommonStyles.flexRow, props.containerStyle]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={props.onPress}
        style={[
          _styles.root,
          disabled && _styles.rootDisabled,
          disabled && props.disabledStyle,
          props.style,
        ]}
      >
        {!loading && (
          <>
            {props.icon && props.left && <AppIcon name={props.icon}></AppIcon>}
            <AppText
              style={[
                _styles.txt,
                disabled && _styles.txtDisabled,
                disabled && props.disabledTextStyle,
              ]}
            >
              {props.title}
            </AppText>
            {props.icon && props.right && <AppIcon name={props.icon}></AppIcon>}
          </>
        )}
        {loading && <ActivityIndicator color={COLORS.Red} />}
      </TouchableOpacity>
    </View>
  );
};

const _styles = StyleSheet.create({
  icon: {
    height: 15,
    marginLeft: 14,
    marginRight: -8,
    width: 15,
    tintColor: COLORS.White,
  },
  iconDisabled: { tintColor: COLORS.DarkGary },
  iconBack: {
    transform: [{ rotate: "180deg" }],
    marginLeft: -8,
    marginRight: 14,
  },
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.Red,
    borderRadius: 11,
    flexDirection: "row",
    height: 60,
    paddingHorizontal: 22,
  },
  rootNegative: { backgroundColor: COLORS.Transparent },
  rootDisabled: { backgroundColor: COLORS.BUttonErrorBg },
  txt: {
    color: COLORS.White,
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
  },
  txtDisabled: { color: COLORS.White },
});
