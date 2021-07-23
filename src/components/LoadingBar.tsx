import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { AppText } from "./Text";
import { useTranslation } from "react-i18next";
import { COLORS, CommonStyles } from "../style";
import { Any } from "../types";
import { utilNavigateReset } from "../common/util";
import { ScreenWrapper } from "./Screen";

interface LoadingBarProps {
  value?: number;
}

/**
 * loading bar
 */
export const LoadingBar = (props: LoadingBarProps) => {
  const { t } = useTranslation();
  return (
    <View style={_styles.root}>
      <AppText color={COLORS.DarkGreen} style={_styles.txt}>
        {t("common.loading")}
      </AppText>
      <View style={_styles.bg}>
        <View style={_styles.pRoot}>
          <View style={_styles.p0} />
          <View
            style={[
              _styles.p0,
              _styles.p1,
              { width: `${Math.min(props.value || 0, 100)}%` },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const _styles = StyleSheet.create({
  bg: {
    backgroundColor: COLORS.LightGreen,
    borderRadius: 10,
    height: 20,
    justifyContent: "center",
    marginTop: 7,
    position: "relative",
  },
  p0: {
    backgroundColor: COLORS.Green,
    borderRadius: 2,
    height: 2,
    position: "absolute",
    width: "100%",
  },
  p1: { backgroundColor: COLORS.DarkGreen, borderRadius: 3, height: 4 },
  pRoot: {
    bottom: 0,
    height: 20,
    justifyContent: "center",
    marginHorizontal: 11,
    top: 0,
  },
  root: {},
  txt: { fontSize: 10, textAlign: "center", textTransform: "uppercase" },
});

const icon = require("../assets/icons/loading_logo.png");

export const AppActivatedLoading = () => {
  /**
   * returning screen
   * @constructor
   */

  const [p, setP] = useState(0);
  const pRef = useRef<number>(0);
  const timerRef = useRef<Any>();

  // mock loading
  useEffect(() => {
    timerRef.current = setInterval(() => {
      pRef.current += 1;
      setP(pRef.current);
    }, 50);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (p >= 100) {
      clearInterval(timerRef.current);
    }
  }, [p]);
  return (
    <View style={[CommonStyles.fullHeight, _stylesActivated.root]}>
      <Image source={icon} style={_stylesActivated.icon} />
      <View style={_stylesActivated.loadingWrapper}>
        <LoadingBar value={p} />
      </View>
    </View>
  );
};

const _stylesActivated = StyleSheet.create({
  icon: { height: 236, resizeMode: "contain", width: 236 },
  loadingWrapper: { marginTop: 100, paddingHorizontal: 60, width: "100%" },
  root: { alignItems: "center", justifyContent: "center" },
});
