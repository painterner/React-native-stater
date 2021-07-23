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
import * as locales from "./locales";
import { Calendar } from "react-native-calendars";
import * as icons from "../../icons";
import { AppText } from "../Text";
import {
  BarStyles,
  COLORS,
  CommonStyles,
  MARGINS,
  TextStyles,
} from "../../style";

locales.calendarLocaleDefaultConfig();

interface Props {
  style?: any;
  onPress?: () => void;
}

const getAllDateString = (start: string, end: string) => {
  const s = new Date(start);
  const e = new Date(end);
  let result = [];
  while (true) {
    s.setDate(s.getDate() + 1);
    if (s.valueOf() >= e.valueOf()) {
      break;
    }
    result.push(s.toISOString().split("T")[0]);
  }
  return result;
};

/**
 * AppCalendar component
 * @constructor
 */
export const AppCalendar = (props: Props) => {
  const { t } = useTranslation();
  const [range, setRange] = useState<any>([null, null]);

  const start = range[0]
    ? {
        [range[0]]: {
          color: COLORS.DarkGreen,
          textColor: COLORS.White,
          startingDay: true,
        },
      }
    : {};
  const mids: any = {};
  getAllDateString(range[0], range[1]).forEach((v, index) => {
    mids[v] = { color: COLORS.DarkGreen, textColor: COLORS.White };
  });
  const end = range[1]
    ? {
        [range[1]]: {
          color: COLORS.DarkGreen,
          textColor: COLORS.White,
          endingDay: true,
        },
      }
    : {};

  const marks = { ...start, ...mids, ...end };
  console.log(marks);

  return (
    <View style={[props.style]}>
      <Calendar
        markingType={"period"}
        markedDates={marks}
        // Initially visible month. Default = Date()
        current={"2012-03-01"}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={"1990-01-01"}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={"2100-01-01"}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log(
            "selected day",
            day,
            new Date(day.dateString).toISOString()
          );
          if (range[0] && range[1]) {
            range[0] = day.dateString;
            range[1] = null;
            setRange([...range]);
            return;
          }
          if (range[0] === day.dateString && range[1]) {
            range[1] = null;
            setRange([...range]);
            return;
          }
          if (range[0] === day.dateString && !range[1]) {
            range[0] = null;
            setRange([...range]);
            return;
          }
          if (!range[0]) {
            range[0] = day.dateString;
            range[1] = null;
            setRange([...range]);
            return;
          }
          if (
            new Date(range[0]).valueOf() > new Date(day.dateString).valueOf()
          ) {
            range[0] = day.dateString;
            setRange([...range]);
            return;
          }
          range[1] = day.dateString;
          setRange([...range]);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log("selected day", day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={"yyyy MM"}
        
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        hideArrows={true}
        // disableArrowLeft={true}
        // disableArrowRight={true}
        renderHeader={(date) => {
          const local = locales.getCurentCalendarLocal();
          console.log(["date", date]);
          const mothName = local.monthNames![date.getMonth() + 1];
          const yearName = date.getFullYear();

          return (
            <View style={[_styles.headerContainer]}>
              <View style={[CommonStyles.flexRowBetween]}>
                <View style={[_styles.selectCard, { marginRight: 5 }]}>
                  {range[0] && <AppText>{range[0]}</AppText>}
                  {!range[0] && (
                    <>
                      <AppText>START</AppText>
                      <AppText>SELECT</AppText>
                    </>
                  )}
                </View>
                <View style={_styles.selectCard}>
                  <AppText>END</AppText>
                  <AppText>SELECT</AppText>
                </View>
              </View>

              <AppText style={[TextStyles.infoText]}>
                Please Tap either a START or END{" "}
                <AppText style={[{ fontWeight: "bold" }]}>SELECT</AppText> to
                begin
              </AppText>

              <View style={[CommonStyles.flexRowBetween, _styles.header]}>
                <View style={[CommonStyles.flexRowBetween, CommonStyles.flex1]}>
                  <Image
                    source={icons.selectArrowIcon}
                    style={[
                      { transform: [{ rotate: "180deg" }] },
                      _styles.imageArrow,
                    ]}
                  ></Image>
                  <AppText style={_styles.headerText}>{mothName}</AppText>
                  <Image
                    source={icons.selectArrowIcon}
                    style={_styles.imageArrow}
                  ></Image>
                </View>

                <View style={[_styles.mg]}></View>

                <View
                  style={[[CommonStyles.flexRowBetween, CommonStyles.flex1]]}
                >
                  <Image
                    source={icons.selectArrowIcon}
                    style={[
                      { transform: [{ rotate: "180deg" }] },
                      _styles.imageArrow,
                    ]}
                  ></Image>
                  <AppText style={_styles.headerText}>{yearName}</AppText>
                  <Image
                    source={icons.selectArrowIcon}
                    style={_styles.imageArrow}
                  ></Image>
                </View>
              </View>
            </View>
          );
        }}
        //   renderArrow={(direction) => <Arrow />}
      />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    // marginHorizontal: MARGINS.side
  },
  headerContainer: {
    width: "100%",
  },
  header: {},
  selectCard: {
    backgroundColor: COLORS.White,
    borderRadius: 10,
    ...CommonStyles.shadow,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  mg: {
    width: 10,
    height: "100%",
  },
  imageArrow: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
