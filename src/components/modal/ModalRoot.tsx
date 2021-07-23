import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { values } from "lodash";
import { ModalData } from "./ModalData";
import { useAndroidBack } from "../Hooks";
import { Any } from "../../types";
import { COLORS } from "../../style";

export const MODAL_ANIMATION_TIME = 300;
const BG_OPACITY = 0.5;

const AppModal = React.forwardRef(
  (
    {
      modalData,
      onCloseAnimationFinished,
    }: { modalData: ModalData; onCloseAnimationFinished: (id: number) => void },
    ref
  ) => {
    const WINDOW_HEIGHT = Dimensions.get("window").height;
    const bgOpacity = new Animated.Value(0);
    const bgOpacityRef = useRef(bgOpacity);
    const topOffset = new Animated.Value(WINDOW_HEIGHT);
    const topOffsetRef = useRef(topOffset);

    useImperativeHandle(ref, () => ({
      closeModal: tryToClose,
    }));

    /**
     * try to close modal
     */
    const tryToClose = () => {
      showOrHide(false);
      if (modalData.onClose) {
        modalData.onClose();
      }
    };

    /**
     * add android back event
     */
    useAndroidBack({
      name: "modal-root",
      onBackEvt: () => {
        if (modalData.disabledAndroidBack) {
          return false;
        } else {
          tryToClose();
          return true;
        }
      },
    });

    useEffect(() => {
      showOrHide(true);
    }, []);

    /**
     * get Keyboard Behavior
     * @param md the modal data
     */
    const getKeyboardBehavior = (md: ModalData) => {
      if (md.disableAutoKeyboard) {
        return Platform.OS === "ios" ? undefined : "height";
      }
      return Platform.OS === "ios" ? "padding" : undefined;
    };

    /**
     * show or hide side menu
     * @param show is show
     */
    const showOrHide = (show: boolean) => {
      Animated.parallel([
        Animated.timing(bgOpacityRef.current, {
          useNativeDriver: false,
          duration: modalData.noAnimation ? 0 : MODAL_ANIMATION_TIME,
          toValue: show ? BG_OPACITY : 0,
        }),
        Animated.timing(topOffsetRef.current, {
          useNativeDriver: false,
          duration: modalData.noAnimation ? 0 : MODAL_ANIMATION_TIME,
          toValue: show ? 0 : WINDOW_HEIGHT,
        }),
      ]).start(() => {
        if (!show) {
          onCloseAnimationFinished(modalData.id);
        } else {
          Keyboard.dismiss();
        }
      });
    };
    if(modalData.type === 'tooltip') {
      return (
        <View style={[_styles.full]} key={modalData.id}>
          <KeyboardAvoidingView behavior={getKeyboardBehavior(modalData)} style={{...(modalData.styles || {})}}>
            {modalData.child}
          </KeyboardAvoidingView>
        </View>
      )
    }
    return (
      <View style={[_styles.full, _styles.modalRoot]} key={modalData.id}>
        {!modalData.hideBlackBG && (
          <Animated.View
            style={[
              _styles.full,
              _styles.modalBg,
              { opacity: bgOpacityRef.current },
            ]}
          />
        )}
        <Animated.View
          style={[
            _styles.modalContentRoot,
            modalData.position === "center" && _styles.modalRootCenter,
            modalData.position === "bottom" && _styles.modalRootBottom,
            { top: topOffsetRef.current },
            { ...(modalData.containerStyles || {})},
          ]}
        >
          <TouchableOpacity
            style={_styles.bgCloseBtn}
            onPress={() =>
              modalData.closeWhenClickOutSide ? showOrHide(false) : () => null
            }
            accessible={false}
          />
          {modalData.topChild}
          <KeyboardAvoidingView behavior={getKeyboardBehavior(modalData)} style={{...(modalData.styles || {})}}>
            {modalData.child}
          </KeyboardAvoidingView>
          {modalData.bottomChild}
        </Animated.View>
      </View>
    );
  }
);

const _g_modals: Any = {};
/**
 * Modal root
 * @constructor
 */
export const ModalRoot = React.forwardRef((props, ref) => {
  const [modals, setModals] = useState<Any>({});
  const modalRefs: Any = {};
  useImperativeHandle(ref, () => ({
    openModal: (modalData: ModalData) => addModal(modalData),
    closeModal: (modalId: string) => {
      if (modalRefs[modalId]) {
        modalRefs[modalId].closeModal();
      }
    },
    closeAllModal: () => {
      Object.values(modalRefs).forEach((modalRef: Any) => {
        if (modalRef) {
          modalRef.closeModal();
        }
      });
    },
  }));

  const addModal = (modalData: ModalData) => {
    _g_modals[modalData.id] = modalData;
    setModals({ ..._g_modals });
  };
  const removeModal = (id: number) => {
    delete modalRefs[id];
    delete _g_modals[id];
    setModals({ ..._g_modals });
  };
  const addModalRef = (id: number, r: Any) => {
    modalRefs[id] = r;
  };

  if (values(modals).length <= 0) {
    return <></>;
  }
  return (
    <View style={[_styles.rootContainer, _styles.full]}>
      {values(modals).map((modalData) => (
        <AppModal
          key={modalData.id}
          ref={(r) => addModalRef(modalData.id, r)}
          modalData={modalData}
          onCloseAnimationFinished={(id) => removeModal(id)}
        />
      ))}
    </View>
  );
});

// inner style
const _styles = StyleSheet.create({
  bgCloseBtn: {
    height: "100%",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  full: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  modalBg: {
    backgroundColor: COLORS.Black,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  modalContentRoot: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  modalRoot: {
    alignItems: "center",
  },
  modalRootBottom: { justifyContent: "flex-end" },
  modalRootCenter: { alignItems: "center", justifyContent: "center" },
  rootContainer: {},
});
