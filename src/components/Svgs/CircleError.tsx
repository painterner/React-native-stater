import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { ScreenWrapper } from "../../components/Screen";
import { useNavigation } from "react-navigation-hooks";
import { askForExitAndroid, useAndroidBack } from "../../components/Hooks";
import { useTranslation } from "react-i18next";
import * as constants from "../../constants";
import Svg, { Path, Symbol, Circle, Use } from "react-native-svg";

interface Props {
  onPress?: () => void;
  style?: any;
}

/**
 * CircleError component
 * @constructor
 */
export const SvgCircleError = (props: Props) => {
  const { t } = useTranslation();
  const { navigate, goBack, getParam } = useNavigation();

  useAndroidBack({
    onBackEvt: () => {
      goBack();
      return true;
    },
  });

  return (
    <View style={[_styles.container, props.style]}>
      <Svg viewBox="0 0 144.969 144.969">
        <Path
          id="unit_18"
          data-name="unit 18"
          d="M804.395-539.026a51.009,51.009,0,0,1-9.621-2.987,51.237,51.237,0,0,1-8.706-4.726A51.6,51.6,0,0,1,778.482-553a51.624,51.624,0,0,1-6.259-7.585,51.264,51.264,0,0,1-4.726-8.706,50.989,50.989,0,0,1-2.986-9.621,51.636,51.636,0,0,1-1.042-10.33,51.637,51.637,0,0,1,1.042-10.33,51,51,0,0,1,2.986-9.621,51.253,51.253,0,0,1,4.726-8.706,51.61,51.61,0,0,1,6.259-7.586,51.63,51.63,0,0,1,7.585-6.259,51.236,51.236,0,0,1,8.706-4.726,51.009,51.009,0,0,1,9.621-2.987,51.633,51.633,0,0,1,10.33-1.041,51.635,51.635,0,0,1,10.33,1.041,51,51,0,0,1,9.621,2.987,51.235,51.235,0,0,1,8.707,4.726,51.629,51.629,0,0,1,7.585,6.259,51.611,51.611,0,0,1,6.259,7.586,51.253,51.253,0,0,1,4.726,8.706,51.032,51.032,0,0,1,2.987,9.621,51.636,51.636,0,0,1,1.041,10.33,51.636,51.636,0,0,1-1.041,10.33,51.027,51.027,0,0,1-2.987,9.621,51.263,51.263,0,0,1-4.726,8.706A51.625,51.625,0,0,1,850.967-553a51.608,51.608,0,0,1-7.585,6.259,51.235,51.235,0,0,1-8.707,4.726,51,51,0,0,1-9.621,2.987,51.637,51.637,0,0,1-10.33,1.041A51.638,51.638,0,0,1,804.395-539.026Zm10.33-10.6A39.687,39.687,0,0,0,853.582-581.5H775.867A39.686,39.686,0,0,0,814.724-549.623Zm39.18-45.51a39.681,39.681,0,0,0-39.18-33.724,39.681,39.681,0,0,0-39.179,33.724Z"
          transform="translate(-86.957 1065.237) rotate(-45)"
          fill="#ff747c"
        />
      </Svg>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
  },
});
