import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { ScreenWrapper } from "../../../components/Screen";
import { useNavigation } from "react-navigation-hooks";
import { askForExitAndroid, useAndroidBack } from "../../../components/Hooks";
import { useTranslation } from "react-i18next";
import * as constants from "../../../constants";
import { AppInput } from "../../../components/Input";
import { FormValues } from "../../../types";
import { CommonStyles } from "../../../style";

type CodeInputValue = string;

interface Props {
  values: CodeInputValue[];
  disabled?: boolean;
  errMsg?: string;
  textStyle?: any;
  style?: any;
  valuesChange: (values: CodeInputValue[]) => void;
  onPress?: () => void;
}

/**
 * Scanning code inpout componet
 * @constructor
 */
export const ScanningCodeInput = ({ values = ['','',''], ...props }: Props) => {
  const { t } = useTranslation();

  const onValuesChange = (value: CodeInputValue, index: number) => {
    if (value && value.length > 3) {
      return;
    }
    values[index] = value;
    props.valuesChange(values);
  };

  return (
    <View style={[_styles.container, props.style]}>
      {values.map((value, key) => (
        <AppInput
          txtStyle={props.textStyle}
          errMsg={props.errMsg}
          style={[{width: 100, marginLeft: 10}]}
          key={key}
          value={values[key]}
          onValueChange={(v) => onValuesChange(v, key)}
        ></AppInput>
      ))}
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    ...CommonStyles.flexRow,
    justifyContent: 'center'
  },
});
