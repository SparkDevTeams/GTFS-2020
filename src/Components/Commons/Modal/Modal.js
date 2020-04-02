import React from "react";
import Card from "../Card/Card";
import { ModalBackground } from "./styles";

const Modal = props => {

  const onClose = e => props.onClose?.(e);

  return (
    <ModalBackground show={props.show}>
      <Card width="25%" height="25%" direction='column'>
        <h2>Notice!</h2>
        <div className="content">{props.message}</div>
        <div className="actions">
          <button className="toggle-button" onClick={onClose}>
            Close
          </button>
        </div>
      </Card>
    </ModalBackground>
  );
};

export default Modal;