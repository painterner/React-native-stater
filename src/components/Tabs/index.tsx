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
import { AppText } from "../Text";
import { COLORS, MARGINS } from "../../style";

export interface ITabOption {
  label: string;
}
interface Props {
  options: ITabOption[];
  value?: ITabOption;
  onPress: (option: ITabOption) => void;
}

/**
 * onBoarding screen
 * @constructor
 */
export const AppTabs = (props: Props) => {
  const { t } = useTranslation();

  const ra = 20;
  const leftRadius = {
    borderTopLeftRadius: ra,
    borderBottomLeftRadius: ra,
  };
  const rightRadius = {
    borderTopRightRadius: ra,
    borderBottomRightRadius: ra,
  };

  const getRadius = (index: number, last: number) => {
    let result = {};
    if (index === 0) {
      result = { ...result, ...leftRadius };
    }
    if (index === last) {
      result = { ...result, ...rightRadius };
    }
    return result;
  };

  const getActiveStyle = (option: ITabOption) => {
    let result: any = {
      // width: 100/props.options.length + '%'
    };
    if (props.value && option.label === props.value.label) {
      result = { ...result, backgroundColor: COLORS.DarkGreen };
    }
    return result;
  };
  const getActiveTabStyle = (option: ITabOption) => {
    let result: any = {};
    if (props.value && option.label === props.value.label) {
      result = { ...result, color: COLORS.White };
    }
    return result;
  };

  return (
    <View style={_styles.container}>
      {props.options.map((option, index) => (
        <TouchableOpacity
          style={[
            _styles.touchable,
            getActiveStyle(option),
            getRadius(index, props.options.length - 1),
          ]}
          key={index}
          onPress={() => props.onPress(option)}
        >
          <AppText style={[_styles.tab, getActiveTabStyle(option)]}>
            {option.label}
          </AppText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: MARGINS.side,
    marginRight: MARGINS.side,
  },
  touchable: {
    backgroundColor: COLORS.Gary,

    paddingVertical: 10,
    flex: 1,
    marginVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    color: COLORS.DarkGreen,
  },
});
