import React, { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../Services/API.js";
import { useHistory } from "react-router-dom";
import { TextField, Form, FormContainer, TextLabel, InputButton, PageTitle} from "./styles";
import Card from "../Commons/Card/Card.js";
import Modal from "../Commons/Modal/Modal";

const Login = () => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [modalText, setmodalText] = useState("");
  const [modalTitle, setmodalTitle] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = data => {
    validate(data);
  };

  function showModal(){
    setShow(prev => !prev);
  }

  function ErrorMessage({ error }) {
    if (error) {
      switch (error.type) {
        case "required":
          return <p>This is required</p>;
        case "minLength":
          return <p>The minimum length is 6 characters</p>;
        case "pattern":
          return <p>Enter a valid email address</p>;
        case "maxlength":
          return <p>The minimum length is 100 characters</p>;
        case "validate":
          return <p>Username is already used</p>;
        default:
          return null;
      }
    }

    return null;
  }

  const validate = async ({ pwd, username }) => {
    let response = await API.LoginUser(username, pwd);

    //Username was taken
    if (response.message) {
      setError("usernameTaken", "validate");
      setmodalText(`There was an error signing up with the given information \n \n ${response.message} \n \n`);
      setmodalTitle("Sign up Error")
      showModal();
    } else {
    /**
     * Username was not taken,
     * Gets registered in backend
     * Redirects to Home page('/')
     */
      clearError("user");
      setmodalText("Succesfuly created an account! Will Redirect in 5 seconds.")
      showModal();
      setTimeout(function() { history.push("/");; }, 5000);
    }
  };

  return (
    <FormContainer>
      <Modal onClose={showModal} title={modalTitle} show={show} message={modalText}/>
      <Card width="50%" xs="95%">
        <Form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <PageTitle>Login</PageTitle>
          <TextLabel className="signup-label">Username</TextLabel>
          <TextField
            className="signup-input"
            name="username"
            ref={register({ required: true, minLength: 6, maxlength: 100 })}
          />
          <ErrorMessage error={errors.username} />
          <TextLabel className="signup-label">Password</TextLabel>
          <TextField
            type="password"
            name="pwd"
            ref={register({ required: true, minLength: 8, maxlength: 100 })}
          />
          <ErrorMessage error={errors.pwd} />

          <InputButton
            disabled={isSubmitting}
            type="submit"
            value="Login"
          />
        </Form>
      </Card>
    </FormContainer>
  );
}

export default Login;