import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AppText } from "src/components/Base/Text";
import { AppTouchable } from "src/components/Base/Touchable";
import { ScreenWrapper } from "src/components/Layout/Screen";
import { CommonStyles } from "../../style";
import { useNavigation } from "@react-navigation/native"

interface Props {}

export const NavigationScreen = ({ ...props }: Props) => {
  const { navigate } = useNavigation()
  const pages = [
    {
      route: "note",
    },
    {
      route: "tester",
    },
    {
      route: "tester1",
    },
    {
      route: "route4",
    },
  ];

  return (
    <ScreenWrapper>
      <View style={[CommonStyles.flexCenter, _styles.conatiner]}>
        {pages.map((page, key) => (
          <AppTouchable key={key} onPress={() => navigate(page.route)}>
            <AppText>{page.route}</AppText>
          </AppTouchable>
        ))}
      </View>
    </ScreenWrapper>
  );
};

const _styles = StyleSheet.create({
    conatiner: {
        height: '20%',
        marginTop: 'auto',
        marginBottom: 'auto',
        // marginVertical: 'auto', // 为什么marginVertical:'auto'不等于marginTop: 'auto' + marginBottom: 'auto' ?
        justifyContent: 'space-around'
    }
});
