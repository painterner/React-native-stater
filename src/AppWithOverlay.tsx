import React from "react";
import { View, StyleSheet } from "react-native";
import { CommonStyles } from "./style";
import { ModalRoot } from "./components/modal/ModalRoot";
// import { ModalService } from "src/services/ModalService";

// inner style
const _styles = StyleSheet.create({
  rootView: { flex: 1 },
});

/**
 * here put some global dialog, or some global UI elements
 */
export function AppWithOverlay(props: { children: React.ReactNode }) {
  return (
    <View style={CommonStyles.fullHeight}>
      <View style={_styles.rootView}>{props.children}</View>
      {/* <ModalRoot ref={ModalService.modalRootRef} /> */}
    </View>
  );
}
