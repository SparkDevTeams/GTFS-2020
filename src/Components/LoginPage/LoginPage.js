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

const Login = () => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [modalText, setmodalText] = useState("");
  const [modalTitle, setmodalTitle] = useState("");
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    errors,
    setError,
    clearError,
    formState,
  } = useForm();
  const [buttonText, setButtonText] = useState('Close');

  const onSubmit = (data) => {
    validate(data);
  };

  const handleModalButton = useCallback(() => {
    setShow(false);
    if(success){
      history.push(`/profile/${user}`);
    }
  }, [success, history, user]);

  const validate = async ({ user, pwd }) => {
    let response = await API.LoginUser(user, pwd);
    //Username was taken
    if (response.message) {
      setmodalText(
        `There was an error signing up with the given information \n \n ${response.message} \n \n`
      );
      setmodalTitle("Sign up Error");
      setSuccess(false);
    } else {
      setmodalText(
        "Succesfuly created an account! Will Redirect in 5 seconds."
      );
      setUser(user);
      localStorage.setItem('user', JSON.stringify({username: user, token: response.token}));
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
          <PageTitle>Login</PageTitle>
          <TextLabel className="signup-label">Username</TextLabel>
          <TextField
            className="signup-input"
            name="user"
            ref={register({
              required: { value: true, message: "Username is required" },
              minLength: {
                value: 6,
                message: "Username has atleast 6 characters",
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
            name="pwd"
            ref={register({
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 6,
                message: "Username has atleast 6 characters",
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
            type="submit"
            value="Login"
          />
        </Form>
      </Card>
    </FormContainer>
  );
};

export default Login;
