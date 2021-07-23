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
import { ModalStyles, TextStyles } from "../../../style";
import { AppText } from "../../../components/Text";
import { FeatureToggler } from "../../../components/FeatureToggler";
import { cameraIcon } from "../../../icons";
import { BottomBackNext } from "../../../components/Nav/BottomBackNext";

interface Props {
  openCamera: () => any
  onNext: () => void;
}

/**
 * onBoarding screen
 * @constructor
 */
export const ScanningAccessModalContent = (props: Props) => {
  const { t } = useTranslation();
  const { navigate, goBack, getParam } = useNavigation();
  const [value, setValue] = useState(false);

  useAndroidBack({
    onBackEvt: () => {
      goBack();
      return true;
    },
  });

  const cameraToggle = (v: boolean)  => {
    setValue(v)
    if(v){
      props.openCamera()
    }
  }

  return (
    <View style={[ModalStyles.container, _styles.container]}>
      <AppText style={TextStyles.infoText}>
        Please allow access to use the camera on this device
      </AppText>
      <FeatureToggler
        icon={cameraIcon}
        setValue={(v) => cameraToggle(v)}
        value={value}
        onPress={() => {}}
      ></FeatureToggler>
      <BottomBackNext next={{onPress: () => {props.onNext()}}}></BottomBackNext>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {},
});
