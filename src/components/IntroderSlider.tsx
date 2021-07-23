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
import AppIntroSlider from "react-native-app-intro-slider";
import { IIntroderPageItem } from "../models/IIntroder";
import { AppText } from "./Text";
import { COLORS } from "../style";

interface Props {
  PAGES: IIntroderPageItem[];
  renderPage: ({ item: page }: { item: IIntroderPageItem }) => any;
  style?: any;
  onPress?: () => void;
}

/**
 * CustomAppIntroderSlider component
 * @constructor
 */
export const CustomAppIntroderSlider = (props: Props) => {
  const { t } = useTranslation();
  const sliderRef = createRef<AppIntroSlider<IIntroderPageItem>>();
  const [cur, setCur] = useState(0);

  const buttons = [
    {
      title: t("common.back"),
      onPress: () => sliderRef.current?.goToSlide(cur - 1, true),
    },
    { title: t("common.skip"), onPress: () => onFinished() },
    {
      title: t("common.next"),
      onPress: () => {
        if (cur === props.PAGES.length - 1) {
          onFinished();
        } else {
          sliderRef.current?.goToSlide(cur + 1, true);
        }
      },
      bold: true,
    },
  ];

  /**
   * on done
   */
  const onFinished = () => {};

  return (
    <View style={{}}>
      <AppIntroSlider
        renderItem={props.renderPage}
        data={props.PAGES}
        onSlideChange={setCur}
        dotStyle={_styles.dotStyle}
        activeDotStyle={_styles.activeDotStyle}
        dotClickEnabled={true}
        showDoneButton={false}
        ref={sliderRef}
        showNextButton={false}
      />
      <SafeAreaView>
        <View style={_styles.buttons}>
          {buttons.map((btn, i) =>
            cur === 0 && i === 0 ? undefined : (
              <TouchableOpacity
                style={_styles.btn}
                key={i}
                onPress={btn.onPress}
              >
                <AppText
                  weight={btn.bold ? "Bold" : "Regular"}
                  color={COLORS.DarkGreen}
                  style={_styles.btnTxt}
                >
                  {btn.title}
                </AppText>
              </TouchableOpacity>
            )
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {},

  activeDotStyle: {
    backgroundColor: COLORS.DarkGreen,
    borderRadius: 0,
    height: 4,
    marginBottom: 64,
    marginHorizontal: 5,
    width: 20,
  },
  btn: { padding: 16 },
  btnTxt: { fontSize: 13, textTransform: "uppercase" },
  buttons: {
    alignItems: "center",
    bottom: 84,
    flexDirection: "row",
    justifyContent: "space-around",
    left: 0,
    paddingHorizontal: 42,
    position: "absolute",
    right: 0,
  },
  dotStyle: {
    backgroundColor: COLORS.Green,
    borderRadius: 0,
    height: 4,
    marginBottom: 64,
    marginHorizontal: 5,
    width: 20,
  },
});
