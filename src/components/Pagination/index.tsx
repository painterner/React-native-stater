import React, { useState } from "react";
import { useEffect } from "react";
import { View, StyleSheet, ViewProps, LayoutChangeEvent } from "react-native";
import { COLORS, CommonStyles } from "src/style";
import { AppStyleProp } from "src/types";
import { AppText } from "../Base/Text";
import { AppTouchable } from "../Base/Touchable";
import { AppIcon } from "../icons";

interface Props extends ViewProps {
  page: number;
  perPage: number;
  total: number;
  overflowLeft?: number;
  onChange: (v: number) => void;
  children?: React.ReactNode;
  style?: AppStyleProp;
  onPress?: () => {};
}

export const Pagination = ({
  overflowLeft = 3,
  ...props
}: Props) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const currentPage = props.page
  const [pageItem, setPageItem] = useState([]);

  const page = Math.ceil(props.total / props.perPage);

  //   const onLayout = (e: LayoutChangeEvent) => {
  //     console.log("nativeevetn", e.nativeEvent);
  //     setLayoutWidth(e.nativeEvent.layout.width);
  //   };

  const onPgeChange = () => {
    let pi = [];

    const maxS = overflowLeft;

    if (page <= maxS + 2) {
      pi = new Array(page).fill(0).map((v, k) => k + 1);
    }
    // previous overflow
    else if (currentPage <= maxS) {
      pi = new Array(maxS + 2).fill(0).map((v, k) => k + 1);
      pi[pi.length - 2] = "...";
      pi[pi.length - 1] = page;
    }

    // next overflow
    else if (currentPage > page - maxS) {
      pi = new Array(maxS + 2).fill(0).map((v, k) => k + (page - maxS - 1));
      pi[0] = 1;
      pi[1] = "...";
    }

    // middle overflow
    else {
      pi.push(1);
      pi.push("...");
      for (
        let i = currentPage - Math.floor((maxS - 2) / 2);
        i <= currentPage + Math.floor((maxS - 3) / 2);
        i++
      ) {
        pi.push(i);
      }
      pi.push("...");
      pi.push(page);
    }

    setPageItem(pi);
  };
  
  useEffect(() => {
    onPgeChange();
  }, [currentPage, props.total, props.perPage]);

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [props.perPage, props.total]);

  const changePage = (v: number) => {
    if (v < 1 || v > page) {
      return;
    }
    // setCurrentPage(v);
    props.onChange(v);
  };

  return (
    <View style={[CommonStyles.flexRowBetween, props.style]}>
      <View style={[_styles.left]}>
        <AppText>Show </AppText>
        <AppText style={[{fontWeight: 'bold'}]}>{page}</AppText>
        <AppText> / page</AppText>
      </View>

      <View style={[_styles.right]}>
        <AppTouchable
          style={[_styles.item, _styles.leftArrow]}
          onPress={() => changePage(currentPage - 1)}
        >
          <AppIcon name="chevron-left"></AppIcon>
        </AppTouchable>
        {pageItem.map((p, key) => {
          return <AppTouchable
            key={key}
            style={[
              _styles.item,
              currentPage === p && _styles.activeItem,
              { marginRight: key === pageItem.length - 1 ? 0 : 4 },
            ]}
            viewMode = {p === '...'}
            onPress={p === '...'? null: () => changePage(p)}
          >
            <AppText style={[_styles.text, currentPage===p && _styles.activeText]}>{p}</AppText>
          </AppTouchable>
        })}
        <AppTouchable
          style={[_styles.item, _styles.rightArrow]}
          onPress={() => changePage(currentPage + 1)}
        >
          <AppIcon name="chevron-right"></AppIcon>
        </AppTouchable>
      </View>
    </View>
  );
};

const _styles = StyleSheet.create({
  title: {},
  desc: {},
  left: {
    flexDirection: "row",
    borderWidth:1,
    borderColor: COLORS.BorderGray,
    padding: 10,
    borderRadius: 5
  },
  right: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    flex: 1
  },
  item: {
    padding: 10,
    backgroundColor: COLORS.LightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.Black
  },
  activeItem: {
    backgroundColor: COLORS.Red,
  },
  activeText: {
    color: COLORS.White
  },
  leftArrow: {
    marginRight: 10,
  },
  rightArrow: {
    marginLeft: 10,
  },
});
