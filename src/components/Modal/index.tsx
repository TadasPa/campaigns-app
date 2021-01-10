import React, { FC } from "react";
import Modal from "react-modal";

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type IModal = Pick<
  ReactModal.Props,
  "isOpen" | "onRequestClose" | "onAfterOpen" | "style"
>;

const CustomModal: FC<IModal> = ({
  isOpen,
  onRequestClose,
  onAfterOpen,
  style = customStyles,
  children,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    onAfterOpen={onAfterOpen}
    style={customStyles}
  >
    {children}
  </Modal>
);

export default CustomModal;
