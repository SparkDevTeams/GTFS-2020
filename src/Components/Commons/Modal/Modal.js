import React from "react";
import Card from "../Card/Card";
import {CardDescription, CardTitle, ModalBackground, ModalText} from "./styles";
import {Form, InputButton} from "../../SignupPage/styles";
import { useHistory } from "react-router-dom";

const Modal = props => {
  let history = useHistory();


  const onClose = e => {
    if(props.success === true)
    {
      history.push("/");
    }
    return props.onClose?.(e)
  };

  return (
    <ModalBackground show={props.show}>
      <Card position="relative" width="558px" height="325px" direction='column'>
        <CardTitle>{props.title}</CardTitle>
        <ModalText className="content">{props.message}</ModalText>
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