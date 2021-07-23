import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageProps,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";
import React, { createRef, useState } from "react";
import * as _ from "lodash";
import { getImageSrc } from "../common/util";

interface Props {
  src: any;
  tintColor?: string;
  default?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ImageStyle>;
  onPress?: () => void;
}

/**
 * AppImage component
 * @constructor
 */
export const AppImage = (props: Props) => {

  const onPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };
  const src = getImageSrc(props.src)

  const tc = props.tintColor ? { tintColor: props.tintColor } : {};

  const Comp: any = props.onPress ? TouchableOpacity : View;
  const op = props.onPress? {onPress: onPress}: {}
  return (
    <Comp
      {...op}
      style={[_styles.container, props.containerStyle]}
    >
      <Image style={[!props.default && _styles.imageFull, tc, props.style]} source={src} ></Image>
    </Comp>
  );
};

const _styles = StyleSheet.create({
  container: {},
  imageFull: {
    width: "100%",
    height: "100%",
  },
});
