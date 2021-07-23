import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { useNavigation } from "react-navigation-hooks";
import { useTranslation } from "react-i18next";
import { color } from "react-native-reanimated";

interface Props {
  size: number;
  color?: string;
  children?: any;
  onPress?: () => void;
}

/**
 * circle component, default is that children will be in center of this circle
 * @constructor
 */
export const AppCircle = (props: Props) => {
  const { t } = useTranslation();
  const { navigate, goBack, getParam } = useNavigation();

  return (
    <View
      style={[
        _styles.container,
        {
          width: props.size,
          height: props.size,
          borderRadius: props.size,
          backgroundColor: props.color || "gray",
        },
      ]}
    >
      {props.children}
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});
