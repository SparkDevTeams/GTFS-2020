import React from "react";
import Card from "../Card/Card";
import { CardTitle, ModalBackground } from "./styles";
import {Form, InputButton} from "../../SignupPage/styles";

const Modal = props => {

  const onClose = e => props.onClose?.(e);

  return (
    <ModalBackground show={props.show}>
      <Card width="25%" height="25%" direction='column'>
        {/*Todo align to top left*/}
        <CardTitle>{props.title}</CardTitle>
        <pre className="content">{props.message}</pre>
        <div className="actions">
          <InputButton
              className="signup-button"
              type="submit"
              value="Close"
              onClick={onClose}
          />
        </div>
      </Card>
    </ModalBackground>
  );
};

export default Modal;