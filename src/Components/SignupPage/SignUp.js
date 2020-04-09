import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import API from "../../Services/API.js";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Form,
  FormContainer,
  TextLabel,
  InputButton,
  PageTitle,
  ErrorMessage,
} from "./styles";
import Card from "../Commons/Card/Card.js";
import Modal from "../Commons/Modal/Modal";

export default function SignUp() {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [modalText, setmodalText] = useState("");
  const [modalTitle, setmodalTitle] = useState("");
  const [success, setSuccess] = useState(false);
  const [buttonText, setButtonText] = useState('Close');
  const [user, setUser] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    errors,
    clearError,
    formState,
  } = useForm();

  const onSubmit = (data) => {
    validate(data);
  };

  
  const handleModalButton = useCallback(() => {
    setShow(false);
    if(success){
      history.push(`/profile/${user}`);
    }
  }, [success, history, user]);

  const validate = async ({ user, pwd, email }) => {
    let response = await API.registerUser(user, pwd, email);

    //Username was taken
    if (response.message) {
      setmodalText(
        `There was an error signing up with the given information \n \n ${response.message} \n \n`
      );
      setmodalTitle("Sign up Error");
      setSuccess(false);
    } else {
      setUser(user);
      setmodalText(
        "Succesfuly created an account!"
      );
      setButtonText('Go to Profile')
      setSuccess(true);
    }
    setShow(true);
  };

  return (
    <FormContainer>
      <Modal
        onClose={handleModalButton}
        title={modalTitle}
        show={show}
        message={modalText}
        buttonText={buttonText}
      />
      <Card width="50%" xs="95%">
        <Form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <PageTitle>Sign up</PageTitle>
          <TextLabel className="signup-label">Email</TextLabel>
          <TextField
            className="signup-input"
            name="email"
            ref={register({
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please enter a valid Email",
              },
            })}
          />
          {errors?.email?.message && (
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          )}

          <TextLabel className="signup-label">Username</TextLabel>
          <TextField
            className="signup-input"
            name="user"
            ref={register({
              required: { value: true, message: "Username is required" },
              minLength: {
                value: 6,
                message: "Username has to be atleast 6 characters",
              },
              maxLength: {
                value: 100,
                message: "Username can have at most 100 characters",
              },
            })}
          />
          {errors?.user?.message && (
            <ErrorMessage>{errors?.user?.message}</ErrorMessage>
          )}

          <TextLabel className="signup-label">Password</TextLabel>
          <TextField
            type="password"
            className="signup-input"
            name="pwd"
            ref={register({
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 6,
                message: "Username has to be atleast 6 characters",
              },
              maxLength: {
                value: 100,
                message: "Username can have at most 100 characters",
              },
            })}
          />

          {errors?.pwd?.message && (
            <ErrorMessage>{errors?.pwd?.message}</ErrorMessage>
          )}

          <InputButton
            disabled={formState.isSubmitting}
            className="signup-button"
            type="submit"
            value="Create Account"
          />
        </Form>
      </Card>
    </FormContainer>
  );
}
