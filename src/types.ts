import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type Any = any;
export type FormValues = Record<string, Any>;
export type AppStyleType = TextStyle & ViewStyle & ImageStyle
export type AppStyleProp = StyleProp<AppStyleType>