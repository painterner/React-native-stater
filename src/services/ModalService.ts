import React from "react";
import { ModalData } from "src/components/modal/ModalData";
import { Any } from "../../types";

/**
 * modal service
 */
export class ModalService {
  static modalRootRef = React.createRef();

  /**
   * open modal
   * @param modalData the modal data
   */
  static openModal(modalData: ModalData) {
    if (this.modalRootRef.current) {
      (this.modalRootRef.current as Any).openModal(modalData);
    }
  }

  /**
   * close modal
   * @param modalId the modal id
   */
  static closeModal(modalId: Any) {
    if (this.modalRootRef.current) {
      (this.modalRootRef.current as Any).closeModal(modalId);
    }
  }

  /**
   * close all modal
   */
  static closeAllModal() {
    if (this.modalRootRef.current) {
      (this.modalRootRef.current as Any).closeAllModal();
    }
  }
}
