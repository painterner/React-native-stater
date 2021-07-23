import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useEffect, useState } from "react";
import { ScreenWrapper } from "/src/components/Screen";
import { useNavigation } from "react-navigation-hooks";
import { askForExitAndroid, useAndroidBack } from "/src/components/Hooks";
import { useTranslation } from "react-i18next";
import * as constants from "/src/constants";
import { ScanningAccessModalContent } from "./components/AccessModalContent";
import { ScanningImpl } from "./components/ScanningImpl";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AppActivatedLoading } from "/src/components/LoadingBar";

interface Props {
  onPress?: () => void;
}

/**
 * Scanning screen
 * @constructor
 */
export const ScanningScreen = (props: Props) => {
  const { t } = useTranslation();
  const { navigate, goBack, getParam } = useNavigation();
  const [step, setStep] = useState(0);
  const [hasPermission, setHasPermission]: any = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.getPermissionsAsync();
      console.log(["BarCodeScanner get permsiion status", status]);
      const granted = status === "granted";
      setHasPermission(granted);
      if (granted) {
        setStep(1);
      }
    })();
  }, []);

  const openCamera = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    console.log(["BarCodeScanner request permsiion tatus", status]);
    const granted = status === "granted";
    setHasPermission(granted);
  };

  useAndroidBack({
    onBackEvt: () => {
      goBack();
      return true;
    },
  });

  useEffect(() => {}, []);

  if (hasPermission === null) {
    return (
      <ScreenWrapper>
        <AppActivatedLoading></AppActivatedLoading>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <View style={_styles.container}>
        {step === 0 && (
          <ScanningAccessModalContent
            openCamera={() => openCamera()}
            onNext={() => setStep(1)}
          ></ScanningAccessModalContent>
        )}
        {step === 1 && <ScanningImpl></ScanningImpl>}
      </View>
    </ScreenWrapper>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
