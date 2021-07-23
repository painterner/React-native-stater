import { Any, AppStyleProp } from "../../types";
import {
  StyleSheet,
  TextInputProps,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { COLORS, CommonStyles } from "../../style";
import { AppText } from "./Text";
import * as _ from "lodash";
import { AppIcon } from "../icons";
import { useState } from "react";
import { LayoutRowFlex1 } from "../Layout";
import { getParameter } from "src/common/react-helper";


/**
 * select options
 */
export interface SelectOption {
  value: Any;
  label: string;
}

/**
 * app input props
 */
export interface AppInputProps extends TextInputProps {
  label?: string;
  floater?: Any;
  value?: Any;
  inValid?: boolean;
  shadow?: boolean;
  onValueChange?: (newValue: Any) => void;
  placeholder?: string;
  txtStyle?: Any;
  labelStyle?: Any;
}

/**
 * app input
 * @param props the parent props
 * @constructor
 */
export const AppInput = (props: AppInputProps) => {

  const shadow = getParameter(props.shadow, true)

  return (
    <LayoutRowFlex1 style={[props.style]}>
      {props.label && (
        <AppText style={[_styles.label, props.labelStyle]}>
          {props.label}
        </AppText>
      )}
      <View style={[shadow && _styles.shadowBox]}>
        <TextInput
          {...props}
          editable={props.editable}
          keyboardType={props.keyboardType}
          maxLength={props.maxLength}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize={"none"}
          autoCompleteType={"off"}
          autoCorrect={false}
          style={[
            _styles.inputTxt,
            props.inValid && _styles.invalidStyle,
            props.txtStyle,
          ]}
          value={props.value || ""}
          onChangeText={(v) => {
            if (props.onValueChange) {
              props.onValueChange(v.trim() === "" ? "" : v);
            }
          }}
        />
        {props.floater}
      </View>
    </LayoutRowFlex1>
  );
};

export interface AppLoginInputProps extends AppInputProps {
  value: Any;
  label: string;
  security?: boolean;
  txtStyle?: AppStyleProp;
}

export const AppLoginInput = (props: AppLoginInputProps) => {
  const newProps = _.omit(props, "label");
  const [securityEntry, setSecurityEntry] = useState(true);

  const toggleSecurity = () => {
    setSecurityEntry(!securityEntry);
  };

  return (
    <AppInput
      shadow={false}
      txtStyle={[!props.value && _styles.loginTextCleanStyle, _styles.loginTextStyle, props.txtStyle]}
      floater={
        <>
          <AppText style={[_styles.inlineLabel, _styles.loginLabelStyle]}>
            {props.label}
          </AppText>
          {props.security && (
            <>
              {securityEntry && (
                <AppIcon
                  name="uneye"
                  style={[_styles.eyeIcon]}
                  onPress={toggleSecurity}
                ></AppIcon>
              )}
              {!securityEntry && (
                <AppIcon
                  name="eye"
                  style={[_styles.eyeIcon]}
                  onPress={toggleSecurity}
                ></AppIcon>
              )}
            </>
          )}
        </>
      }
      {...newProps}
      secureTextEntry={securityEntry && props.secureTextEntry}
    ></AppInput>
  );
};

const _styles = StyleSheet.create({
  container: {},
  closeIcon: { height: 24, marginLeft: 16, tintColor: COLORS.White, width: 24 },
  shadowBox: {
    borderRadius: 3,
    backgroundColor: COLORS.White,
    elevation: 2,
    shadowColor: COLORS.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
  },
  inputTxt: {
    borderColor: COLORS.BorderGray,
    borderRadius: 5,
    borderWidth: 1,
    height: 45,
    justifyContent: "center",
    paddingHorizontal: 12,

    fontFamily: 'OpenSans',
    fontSize: 15,
    color: COLORS.Black,
  },
  label: {
    fontSize: 11,
    marginBottom: 5,
    marginTop: 12,
    color: COLORS.DarkGary,
  },
  inlineLabel: {

  },

  invalidStyle: {
    backgroundColor: COLORS.InputErrorBg,
    borderColor: COLORS.Red,
    borderWidth: 1,
  },
  loginLabelStyle: {
    position: "absolute",
    left: 20,
    top: 16
  },
  loginTextCleanStyle: {
    backgroundColor: COLORS.InputNormalBg,
    borderColor: COLORS.Transparent,
  },
  loginTextStyle: {
    height: 80,
    fontSize: 18,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingRight: 60
    
  },
  eyeIcon: {
    position: "absolute",
    left: "auto",
    right: 16,
    transform: [{ translateY: 35 }],
  },
});
