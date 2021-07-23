/**
 * modal data
 */
import { Any } from "../../types";

export interface ModalData extends ModalId {
  position?: "center" | "bottom";
  type?: 'modal'| 'tooltip'
  closeWhenClickOutSide?: boolean;
  disableAutoKeyboard?: boolean;
  hideBlackBG?: boolean;
  disabledAndroidBack?: boolean;
  noAnimation?: boolean;
  containerStyles?: any;
  styles?: any;
  child: Any;
  topChild?: Any;
  bottomChild?: Any;
  onClose?: () => void;
}

export interface ModalId {
  id: number;
}
