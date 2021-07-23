import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as _ from "lodash";
import { ModalService } from "../../common/services/ModalService";
import { ModalCloseIcon } from "../modal/ModalCloseIcon";
import { AppCalendar } from ".";
import { AppLinkText, AppText } from "../Text";
import { AppImage } from "../Image";
import { CardButton } from "../CardButton";
import { COLORS, CommonStyles, ModalStyles } from "../../style";
import * as icons from "../../icons"

interface Props {
  id: any;
  style?: any;
  onPress?: () => void;
}

/**
 * RewardSection component
 * @constructor
 */
export const CalendarModalContent = (props: Props) => {
  const { t } = useTranslation();
  const id = props.id;

  return (
    <View style={[]}>
      <ModalCloseIcon
        onPress={() => ModalService.closeModal(id)}
      ></ModalCloseIcon>
      <View style={[{ marginVertical: 55 }, ModalStyles.container]}>
        <AppCalendar></AppCalendar>

        <View style={[CommonStyles.flexRowBetween]}>
          <AppLinkText
            icon={
              <AppImage
                tintColor={COLORS.DarkGreen}
                height={30}
                width={30}
                source={icons.closeIcon}
              ></AppImage>
            }
            onPress={() => {
              ModalService.closeModal(id);
            }}
            title="CANCEL"
          ></AppLinkText>
          <CardButton style={[{borderRadius: 15, backgroundColor: COLORS.Gary}]} onPress={() => {}}>
            <AppText>APPLY</AppText>
          </CardButton>
        </View>
      </View>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {},
});

export const openCalendarModal = () => {
  const id = Date.now();
  ModalService.openModal({
    id,
    position: "center",
    child: <CalendarModalContent id={id}></CalendarModalContent>,
  });
};
