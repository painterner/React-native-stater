import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as constants from "../../../constants";
import { AppText, AppTextStar } from "../../../components/Text";
import { COLORS, CommonStyles, ModalStyles, TextStyles } from "../../../style";
import { AppButton } from "../../../components/Button";
import { ModalService } from "../../../common/services/ModalService";
import { AppImage } from "../../../components/Image";
import * as icons from "../../../icons";

interface ScanningResultData {
  errorCode?: number;
}

interface Props {
  navigate: any;
  id: any;
  data: any;
  onPress?: () => void;
}

/**
 * ScanningConnectFailed screen
 * @constructor
 */
export const ScanningConnectFailed = (props: Props) => {
  const { t } = useTranslation();
  const { navigate } = props;

  const data = props.data;

  const renderImage = () => {};

  return (
    <View style={_styles.container}>
      <AppText style={_styles.title}>OOPS</AppText>

      <AppText>{data.errorCode}</AppText>
      <AppText>ERROR CHECKING CODE</AppText>
      <AppText style={TextStyles.infoText}>Check internet Connection</AppText>

      <View style={_styles.actions}>
        <AppButton
          title="SCAN LATER"
          onPress={() => {
            ModalService.closeModal(props.id);
            navigate("navigation");
          }}
        ></AppButton>
        <AppButton
          title="SCAN MORE"
          onPress={() => ModalService.closeModal(props.id)}
        ></AppButton>
      </View>
    </View>
  );
};
export const ScanningSucceed = (props: Props) => {
  const { t } = useTranslation();
  const data = props.data;
  const { navigate } = props;

  const renderImage = () => {
    return (
      <View style={[CommonStyles.flexRowCenterWrapper]}>
        <AppImage
          width={150}
          height={150}
          source={icons.scanningFinish}
        ></AppImage>
      </View>
    );
  };
  return (
    <View style={_styles.container}>
      <AppText style={_styles.title}>CONGRATULATIONS</AppText>

      {renderImage()}

      <AppText style={TextStyles.infoText}>
        Successfully Scanned QR Code
      </AppText>
      <View style={_styles.content}>
        <AppText >POINTS EARNED</AppText>
        <AppTextStar color={COLORS.DarkGreen} textColor={COLORS.DarkGreen}>{data.points}</AppTextStar>

        <AppText>PRODUCT SCANNED</AppText>
        <AppText>{data.product}</AppText>
      </View>

      <View style={_styles.actions}>
        <AppButton
          title="SCAN LATER"
          onPress={() => {
            ModalService.closeModal(props.id);
            navigate("navigation");
          }}
        ></AppButton>
        <AppButton
          title="SCAN MORE"
          onPress={() => ModalService.closeModal(props.id)}
        ></AppButton>
      </View>
    </View>
  );
};
export const ScanningConflict = (props: Props) => {
  const { t } = useTranslation();
  const { navigate } = props;

  const data = props.data;

  const renderImage = () => {
    <View style={[CommonStyles.flexRowCenterWrapper]}>
      <AppImage source={icons.scanningFinish}></AppImage>
    </View>;
  };

  return (
    <View style={_styles.container}>
      <AppText style={_styles.title}>OOPS</AppText>

      <AppText>{data.errorCode}</AppText>
      <AppText>QR CODE IS ALREADY CLAIMED</AppText>
      <AppText style={TextStyles.infoText}>Email Support</AppText>

      <View style={_styles.actions}>
        <AppButton
          title="SCAN LATER"
          onPress={() => {
            ModalService.closeModal(props.id);
            navigate("navigation");
          }}
        ></AppButton>
        <AppButton
          title="SCAN MORE"
          onPress={() => ModalService.closeModal(props.id)}
        ></AppButton>
      </View>
    </View>
  );
};

export const openScanningResultModal = (
  navigate: any,
  data: any,
  type: "succeed" | "connectionError" | "conflict"
) => {
  const id = Date.now();
  const renderType = (
    data: any,
    type: "succeed" | "connectionError" | "conflict"
  ) => {
    if (type === "succeed") {
      return (
        <ScanningSucceed
          navigate={navigate}
          data={data}
          id={id}
        ></ScanningSucceed>
      );
    }
    if (type === "connectionError") {
      return (
        <ScanningConnectFailed
          navigate={navigate}
          data={data}
          id={id}
        ></ScanningConnectFailed>
      );
    }
    if (type === "conflict") {
      return (
        <ScanningConflict
          navigate={navigate}
          data={data}
          id={id}
        ></ScanningConflict>
      );
    }
  };
  ModalService.openModal({
    id: id,
    position: "center",
    styles: { width: "100%" },
    child: (
      <View style={[ModalStyles.container]}>{renderType(data, type)}</View>
    ),
  });
};

const _styles = StyleSheet.create({
  container: {},
  subC: {
    flex: 1,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
});
