import React from "react";
import Card from "../Card/Card";
import { CardTitle, ModalBackground, ModalText } from "./styles";
import { InputButton } from "../../SignupPage/styles";

const Modal = (props) => {
  const onClose = (e) => {
    return props.onClose?.(e);
  };

  return (
    <ModalBackground show={props.show}>
      <Card position="relative" width="558px" height="325px" direction="column">
        {/*Todo align to top left*/}
        <CardTitle>{props.title}</CardTitle>
        <ModalText className="content">{props.message}</ModalText>
        <div className="actions">
          <InputButton
            className="signup-button"
            type="submit"
            value={props?.buttonText || 'Close'}
            onClick={onClose}
          />
        </div>
      </Card>
    </ModalBackground>
  );
};

export default Modal;
