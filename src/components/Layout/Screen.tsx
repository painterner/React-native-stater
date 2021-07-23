import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Any } from "../../types";
import { COLORS, CommonStyles } from "../../style";
import { useEffect } from "react";
import { StorageService } from "../../services/StorageService";
import { KEYS } from "../../config";
import {
  useIsFocused,
  useNavigation,
  useNavigationState,
} from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/reducers";
import { setLoginSatus } from "src/store/actions/profile";
import { getParameter } from "src/common/react-helper";
import { useOrientation } from "src/hooks/useOrientation";
import { Platform } from "react-native";

export interface ScreenWrapperProps {
  // for safe
  children: Any;
  accessibilityLabel?: string;
  style?: Any;
  auth?: boolean;
  navigation?: any;
  
  statusLight?: boolean;

  // for unsafe
  color?: string;
  topColor?: string;
}

/**
 * screen wrapper
 * @param props the props
 * @constructor
 */
export const ScreenWrapper = (props: ScreenWrapperProps) => {
  const { navigate, addListener } = useNavigation();
  const dispatch = useDispatch();
  const orientation = useOrientation();
  const isFocus = useIsFocused(); // trigger re-render when goback
  const logined = useSelector<RootState>((s) => s.profile.logined);

  if (props.auth && !logined) {
    StorageService.get(KEYS.profile).then((x) => {
      if (!x) {
        navigate("login");
      } else {
        dispatch(setLoginSatus(true));
      }
    });
  }

  const Comp = orientation==='landscape' ?  View : SafeAreaView;

  return !logined && props.auth ? null : (
    <>

      <UnsafeBackground color={props.color} topColor={props.topColor} />
      {(orientation === "portrait" || Platform.OS==='android') && (
        <View
          style={[{ backgroundColor: props.topColor || COLORS.White, height: Platform.OS==='ios'? 56:0, width: "100%" }]}
        >
          <StatusBar translucent barStyle={props.statusLight? 'light-content': 'dark-content'} backgroundColor={props.topColor || COLORS.White}></StatusBar>
        </View>
      )}

      {/* Safe area view only works in ios ? https://reactnative.dev/docs/safeareaview */}
      <Comp
        style={[
          CommonStyles.fullHeight,
          props.style,
          {
            marginTop: StatusBar.currentHeight,
          },
        ]}
        accessibilityLabel={props.accessibilityLabel}
      >
        {props.children}
      </Comp>
    </>
  );
};

export interface UnsafeBackgroundProps {
  color?: string;
  topColor?: string;
}

/**
 * unsate background with status bar
 * @constructor
 */
const UnsafeBackground = (props: UnsafeBackgroundProps) => {
  let customTopStyle = {};
  if (props.topColor) {
    customTopStyle = { ...customTopStyle, backgroundColor: props.topColor };
  }
  return (
    <View
      style={[
        _styles.container,
        { backgroundColor: props.color || COLORS.White },
      ]}
    >
      <View
        style={[
          _styles.topPart,
          { height: StatusBar.currentHeight },
          customTopStyle,
        ]}
      />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  topPart: {
    backgroundColor: COLORS.White,
  },
});
