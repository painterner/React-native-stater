import _ from "lodash";
import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  viewMode?: boolean;
  children: React.ReactNode;
}

export const AppTouchable = ({ children, ...props }: Props) => {
  if (props.viewMode) {
    const newProps = _.omit(props, "onPress");
    return <View {...newProps}>{children}</View>;
  }

  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};
