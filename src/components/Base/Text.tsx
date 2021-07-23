import { Any, AppStyleProp } from "../../types";
import {
  Text,
  TextProps,
  TouchableOpacity,
  StyleSheet,
  View,
  StyleProp,
  TextStyle,
} from "react-native";
import { get, omit, upperFirst } from "lodash";
import React from "react";
import { COLORS, CommonStyles } from "../../style";


interface AppTextProps extends TextProps {
  children?: Any;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  uppercase?: boolean;
}

/**
 * Text component
 */
export const AppText = (props: AppTextProps) => {
  const computedStyle: AppStyleProp = {};
  
  function styleParse(style: any) {
    let flat = {}
    if(!style) {
      return flat
    }
    if(style.length){
      for(let s of style){
        flat = {...flat, ...styleParse(s)}
      }
      return flat
    }
    return style
  }

  const propStyle = styleParse(props.style)

  const key = `${ get(propStyle, "fontFamily") || "OpenSans"}${upperFirst(get(propStyle, "fontWeight") || "")}`;
  computedStyle.fontFamily = key;
  
  return (
    <Text {...omit(props || {}, "style")} style={[_styles.text, propStyle, computedStyle]}>
      {props.children}
    </Text>
  );
};

interface AppLinkTextProps extends AppTextProps{
  bold?: boolean;
  underline?: boolean;
  onPress: () => void;
}
/**
 * Link Text component
 * @param props
 */
export const AppLinkText = (props: AppLinkTextProps) => {
  let dynStyle: StyleProp<TextStyle> = {
  }
  if(props.underline) {
    dynStyle.textDecorationLine = 'underline'
  }
  if(props.bold){
    dynStyle.fontWeight = "bold"
  }

  return (
    <TouchableOpacity style={[_styles.linkContainer]} onPress={props.onPress}>
      <AppText
        style={[_styles.btnTxt,  dynStyle, props.style]}
      >
        {props.children}
      </AppText>
    </TouchableOpacity>
  );
};

const _styles = StyleSheet.create({
  linkContainer: { padding: 0},
  text: { paddingVertical: 0 , fontSize: 12, fontFamily: 'OpenSans'},
  btnTxt: { fontSize: 13, color: COLORS.Red},
});
