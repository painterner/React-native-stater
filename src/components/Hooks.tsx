import { BackHandler } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { Any } from "../types";
import { Keyboard } from "react-native";

interface AndroidBackParams {
  onBackEvt: () => boolean;
  name?: string;
}

/**
 * add android back event
 * @param params
 */
export const useAndroidBack = (params: AndroidBackParams) => {
  const handleValidateClose = useCallback(() => {
    return params.onBackEvt();
  }, [params]);

  useEffect(() => {
    let handler: Any;
    const clearHandler = () => {
      if (handler) {
        handler.remove();
        handler = undefined;
      }
    };
    const addHandler = () => {
      if (!handler) {
        handler = BackHandler.addEventListener(
          "hardwareBackPress",
          handleValidateClose
        );
      }
    };
    addHandler();
    return () => {
      clearHandler();
    };
  }, []);
};

/**
 * ask for exit (android)
 */
export const askForExitAndroid = () => {
  BackHandler.exitApp();
};

interface UseKeyboardProps {
  useWillShow?: boolean;
  useWillHide?: boolean;
}

/**
 * use keyboard events
 * @param config
 */
export const useKeyboard = (config: UseKeyboardProps = {}) => {
  const { useWillShow = false, useWillHide = false } = config;
  const [visible, setVisible] = useState(false);
  const showEvent = useWillShow ? "keyboardWillShow" : "keyboardDidShow";
  const hideEvent = useWillHide ? "keyboardWillHide" : "keyboardDidHide";

  function dismiss() {
    Keyboard.dismiss();
    setVisible(false);
  }

  useEffect(() => {
    function onKeyboardShow() {
      setVisible(true);
    }

    function onKeyboardHide() {
      setVisible(false);
    }

    Keyboard.addListener(showEvent, onKeyboardShow);
    Keyboard.addListener(hideEvent, onKeyboardHide);

    return () => {
      Keyboard.removeListener(showEvent, onKeyboardShow);
      Keyboard.removeListener(hideEvent, onKeyboardHide);
    };
  }, [useWillShow, useWillHide]);

  return [visible, dismiss];
};
