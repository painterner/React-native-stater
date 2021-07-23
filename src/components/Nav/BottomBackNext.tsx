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
import { AppButton, AppButtonProps } from "../Button";

interface ItemConfigProps extends AppButtonProps {
  onPress?: () => void,
  show?: boolean;
  icon?: boolean;
  title?: string;
  disable?: boolean;
}
interface Props {
  back?: ItemConfigProps;
  next: ItemConfigProps;
}

/**
 * BottomBackNext component
 * @constructor
 */
export const BottomBackNext = ({ ...props }: Props) => {
  const { t } = useTranslation();

  let nextProps = { }
  if(props.next.icon) {
    nextProps = {...nextProps, icon: 'next'}
  }

  return (
    <View style={_styles.container}>
      <AppButton
        icon={"back"}
        negative
        disabled={props.back?.disable}
        title={t("common.back")}
        onPress={props.back?.onPress}
        style={_styles.first}
      />
      <AppButton
        {...nextProps}
        disabled={props.next.disable}
        title={t(`common.${props.next.title || 'next'}`)}
        onPress={() => {props.next.onPress!()}}
        style={_styles.last}
      />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  first: {
    marginLeft: 0,
    marginRight: 'auto'
  },
  last: {
    marginLeft: 'auto',
    marginRight: 0
  }
});
