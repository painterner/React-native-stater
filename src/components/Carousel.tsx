import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { createRef, useState } from "react";
import { useNavigation } from "react-navigation-hooks";
import { useTranslation } from "react-i18next";
import * as _ from "lodash";
import Carousel, { Pagination } from "react-native-snap-carousel";

interface Props {
  width: number;
  itemWidth: number;
  entrys: any[];
  renderFunc: ({item, index}: any) => any
  style?: any;
  onPress?: () => void;
}

/**
 * AppCarousel component
 * @constructor
 */
export const AppCarousel = (props: Props) => {
  const { t } = useTranslation();

  const ENTRIES2 = [
    {
      title: "Favourites landscapes 1",
      subtitle: "Lorem ipsum dolor sit amet",
      illustration: "https://i.imgur.com/SsJmZ9jl.jpg",
    },
    {
      title: "Favourites landscapes 2",
      subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
      illustration: "https://i.imgur.com/5tj6S7Ol.jpg",
    },
    {
      title: "Favourites landscapes 3",
      subtitle: "Lorem ipsum dolor sit amet et nuncat",
      illustration: "https://i.imgur.com/pmSqIFZl.jpg",
    },
    {
      title: "Favourites landscapes 4",
      subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
      illustration: "https://i.imgur.com/cA8zoGel.jpg",
    },
    {
      title: "Favourites landscapes 5",
      subtitle: "Lorem ipsum dolor sit amet",
      illustration: "https://i.imgur.com/pewusMzl.jpg",
    },
    {
      title: "Favourites landscapes 6",
      subtitle: "Lorem ipsum dolor sit amet et nuncat",
      illustration: "https://i.imgur.com/l49aYS3l.jpg",
    },
  ];

  const width = props.width || 150
  const itemWidth = props.itemWidth || 100;

  const momentumExample = () => {
    return (
      <Carousel
        data={props.entrys}
        renderItem={props.renderFunc}
        sliderWidth={width}
        itemWidth={itemWidth}
        inactiveSlideScale={0.95}
        inactiveSlideOpacity={1}
        enableMomentum={true}
        activeSlideAlignment={"start"}
        containerCustomStyle={[_styles.slider]}
        contentContainerCustomStyle={_styles.sliderContentContainer}
        activeAnimationType={"spring"}
        // @ts-ignore
        activeAnimationOptions={{
          friction: 4,
          tension: 40,
        }}
      />
    );
  };

  return (
    <View style={[_styles.container,{width}, props.style]}>{momentumExample()}</View>
  );
};

const _styles = StyleSheet.create({
  container: {
  },
  slider: {},
  sliderContentContainer: {marginLeft: 0},
});
