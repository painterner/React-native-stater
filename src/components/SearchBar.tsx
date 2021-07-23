import React, { useState } from "react";
import { useEffect } from "react";
import { View, StyleSheet, ViewProps, StyleProp } from "react-native";
import { AppInput } from "./Base/Input";
import { AppImage } from "./Image";
import * as icons from "src/icons";
import { CommonStyles } from "src/style";
import { onChange } from "react-native-reanimated";
import { AppIcon } from "./icons";

interface Props {
  value: string;
  onChange: (v: string) => void;
  onSearch?: (v: string) => void;
  children?: React.ReactNode;
  style?: any;
  txtStyle?: any;
  onPress?: () => void;
}

export const SearchBar = ({ ...props }: Props) => {
  return (
    <AppInput
      value={props.value}
      onValueChange={props.onChange}
      onSubmitEditing={(e) => props.onSearch && props.onSearch(e.nativeEvent.text)}
      floater={
        <>
          <View style={[_styles.searchIcon]}>
            <AppIcon name="search"></AppIcon>
          </View>
          {!!props.value && <View style={[_styles.closeIcon]}>
            <AppIcon name="close-search" onPress={() => props.onChange("")}></AppIcon>
          </View>}
        </>
      }
      style = {[_styles.inputContainer, props.style]}
      txtStyle={[_styles.search, props.txtStyle]}
    ></AppInput>
  );
};

const _styles = StyleSheet.create({
  inputContainer: {
    
  },
  searchIcon: {
    position: "absolute",
    justifyContent: "center",
    height: '100%',
    left: 10
  },
  closeIcon: {
    position: "absolute",
    justifyContent: "center",
    height: '100%',
    left: 'auto',
    right: 10
  },
  search: {
    paddingLeft: 44,
    paddingRight: 44,
    height: 40
  },
  headerIcon: {

  }
});
