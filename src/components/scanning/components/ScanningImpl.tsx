import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import {
  ArrowStyles,
  COLORS,
  CommonStyles,
  MARGINS,
  TextStyles,
} from "../../../style";
import { AppText } from "../../../components/Text";
import { ScanningMaskSvg } from "../../../components/Svgs/ScanningMask";
import MaskedView from "@react-native-community/masked-view";
import { useNavigation } from "react-navigation-hooks";
import { AppSliderTabs } from "../../../components/Tabs/SliderTabs";
import { ITabOption } from "../../../components/Tabs";
import { ModalService } from "../../../common/services/ModalService";
import { AppButton } from "../../../components/Button";
import { ScanningCodeInput } from "./CodeInput";
import { ModalCloseIcon } from "../../../components/modal/ModalCloseIcon";
import { SvgCircleError } from "../../../components/Svgs/CircleError";
import * as icons from "../../../icons";
import { openScanningResultModal } from "./ScanningResult";

const toggleSize = {
  bottom: 100,
  height: 40,
};

const tooltipHeight = 100;

export function ScanningImpl() {
  // const [hasPermission, setHasPermission]: any = useState(null);
  const [scanned, setScanned] = useState(false);
  const dim = useWindowDimensions();
  const modeOptions = [
    {
      label: "QR SCAN",
    },
    {
      label: "MANUAL",
    },
  ];
  const [mode, setMode] = useState<ITabOption>(modeOptions[0]);
  const [codes, setCodes] = useState(["", "", ""]);
  const { goBack, navigate } = useNavigation();
  const timeRef = useRef<any>();
  const [alignError, setAlignError] = useState(false);
  const [error, setError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [codeConflict, setCodeConflict] = useState(false);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    if (scanned || mode.label === "MANUAL") {
      return;
    }

    timeRef.current = setTimeout(() => {
      openHitModal();
    }, 1000 * 100);

    return () => clearTimeout(timeRef.current);
  }, [scanned, mode]);

  const getMisAlign = (bounds: any) => {
    let mis = false;
    const { x, y } = bounds.origin;
    const { width, height } = bounds.size;

    console.log(x + width / 2 - dim.width / 2, -dim.width / 2);
    if (Math.abs(x - dim.width / 2) > 100) {
      mis = true;
    }
    if (Math.abs(y - dim.height / y / 2) > 100) {
      mis = true;
    }
    return mis;
  };

  const handleBarCodeScanned = ({ type, data, bounds }: BarCodeEvent) => {
    console.log(["scanned", type, data]);
    if (data === "wrong") {
      setError(true);
    } else if (bounds && getMisAlign(bounds)) {
      // setAlignError(true)
    } else {
      setAlignError(false);
      setScanned(true);
      open();
    }
  };

  const openHitModal = () => {
    const id = Date.now();
    ModalService.openModal({
      id: id,
      noAnimation: true,
      type: "tooltip",
      styles: {
        marginTop: "auto",
        marginBottom: toggleSize.bottom + toggleSize.height + 20,
      },
      child: (
        <View style={{ height: tooltipHeight, backgroundColor: "white" }}>
          <ModalCloseIcon
            color={COLORS.DarkGreen}
            onPress={() => {
              ModalService.closeModal(id);
            }}
          ></ModalCloseIcon>

          <AppText style={{ fontWeight: "bold" }}>
            Having troble scanning ?
          </AppText>
          <AppText>
            Try entering the code manually, Tap or slide the button below.
          </AppText>

          <View
            style={[ArrowStyles.tooltipBottom, { left: "auto", right: 80 }]}
          ></View>
        </View>
      ),
    });
  };

  const renderSlider = (style?: any) => (
    <View style={[_styles.toggler, style]}>
      <AppSliderTabs
        options={modeOptions}
        value={mode}
        onPress={setMode}
      ></AppSliderTabs>
    </View>
  );
  const renderClose = () => (
    <TouchableOpacity
      onPress={() => goBack()}
      style={[{ position: "absolute", top: MARGINS.side, left: MARGINS.side }]}
    >
      <View style={_styles.circle}>
        <Image
          style={[{ width: "60%", height: "60%" }]}
          source={icons.closeIcon}
        ></Image>
      </View>
    </TouchableOpacity>
  );

  const open = () => {
    openScanningResultModal(
      navigate,
      { points: 300, product: "10W-60 SYNTHETIC MOTOR OIL" },
      "succeed"
    );
  };

  return (
    <View style={_styles.container}>
      {mode.label === modeOptions[0].label && (
        <>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={_styles.barcodescanner}
          ></BarCodeScanner>
          <View style={_styles.maskView}>
            <View style={_styles.maskTop}>
              {renderClose()}

              <AppText style={_styles.alignInfo} color={COLORS.White}>
                Align the QR Code within the frame
              </AppText>
            </View>
            <View style={{ width: dim.width, height: dim.width }}>
              <ScanningMaskSvg
                flagFill={error ? COLORS.Pink : COLORS.White}
              ></ScanningMaskSvg>
              {error && (
                <View
                  style={{
                    position: "absolute",
                    ...CommonStyles.flexCenter,
                    ...CommonStyles.wh100,
                  }}
                >
                  <SvgCircleError style={{}}></SvgCircleError>
                </View>
              )}
            </View>
            <View style={_styles.maskBottom}>
              <View style={[CommonStyles.flexRow, CommonStyles.flexCenter]}>
                <AppButton
                  onPress={() => {
                    setScanned(false);
                    setError(false);
                    setAlignError(false);
                  }}
                  title="Scan Another"
                ></AppButton>
              </View>
              {renderSlider()}
            </View>
          </View>
        </>
      )}

      {mode.label === modeOptions[1].label && (
        <View style={_styles.maskView2}>
          {renderClose()}

          <View style={[CommonStyles.flexRow, CommonStyles.flexCenter]}>
            {codeError && (
              <AppText
                style={[
                  TextStyles.infoText,
                  { backgroundColor: COLORS.DarkGary },
                ]}
              >
                Incorrect Code Entered
              </AppText>
            )}
          </View>

          <View style={[{ marginVertical: MARGINS.side * 2 }]}>
            <ScanningCodeInput
              textStyle={
                codeError
                  ? {
                      backgroundColor: COLORS.Pink,
                      color: COLORS.White,
                      borderColor: COLORS.Pink,
                    }
                  : {}
              }
              errMsg={codeError ? "true" : ""}
              values={codes}
              valuesChange={(v) => {
                setCodes([...v]);
              }}
            ></ScanningCodeInput>
          </View>

          <View style={CommonStyles.flexRowCenterWrapper}>
            <AppButton
              disabled={codeConflict}
              disabledStyle={{ backgroundColor: COLORS.DarkGary }}
              disabledTextStyle={{ color: COLORS.White }}
              title={
                codeError
                  ? "TRY AGAIN"
                  : codeConflict
                  ? "QR CODE ENTERED"
                  : "VALIDATE CODE"
              }
              onPress={() => {
                setCodeConflict(false);
                setCodeError(false);

                let error = false;
                if (codes[0] === "100") {
                  error = true;
                }
                codes.forEach((c) => {
                  console.log(!c, c.length);
                  if (!c || c.length !== 3) {
                    error = true;
                  }
                });
                if (error) {
                  setCodeError(true);
                  return;
                }
                if (codes[0] === "101") {
                  setCodeConflict(true);
                  setTimeout(() => {
                    setCodeConflict(false);
                  }, 3000);
                  return;
                }

                open();
              }}
            ></AppButton>
          </View>

          <View style={[CommonStyles.wh100, { position: "absolute" }]}>
            {renderSlider()}
          </View>
        </View>
      )}
    </View>
  );
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
    ...CommonStyles.debug,
  },
  barcodescanner: {
    // ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff55",
  },
  maskView: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  maskView2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000080",
    justifyContent: "center",
  },
  mask: {},
  maskTop: {
    width: "100%",
    backgroundColor: "#00000080",
    flex: 1,
  },
  alignInfo: {
    ...TextStyles.infoText,
    width: "50%",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "black",
    opacity: 0.52,
    marginBottom: 0,
  },
  maskBottom: {
    width: "100%",
    backgroundColor: "#00000080",
    flex: 1,
  },
  toggler: {
    height: toggleSize.height,
    borderRadius: 20,
    marginTop: "auto",
    marginBottom: toggleSize.bottom,
    marginHorizontal: MARGINS.side,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    marginLeft: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
