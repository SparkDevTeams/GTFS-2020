import React, { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../Services/API.js";
import { useHistory } from "react-router-dom";
import { TextField, Form, FormContainer, TextLabel, InputButton, PageTitle} from "./styles";
import Card from "../Commons/Card/Card.js";
import Modal from "../Commons/Modal/Modal";

export default function SignUp() {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [modalText, setmodalText] = useState("");
  const [modalTitle, setmodalTitle] = useState("");
  const [success, setSuccess] = useState(false);
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

  const validate = async ({ user, pwd, email }) => {
    let response = await API.registerUser(user, pwd, email);

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
      setmodalText("Successful created an account!")
      setSuccess(true);
      showModal();
      setTimeout(function() { history.push("/");; }, 5000);
    }
  };

  return (
    <FormContainer>
      <Modal onClose={showModal} title={modalTitle} show={show} success={success} message={modalText}/>
      <Card width="50%" xs="95%">
        <Form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <PageTitle>Sign up</PageTitle>
          <TextLabel className="signup-label">Email</TextLabel>
          <TextField
            className="signup-input"
            name="email"
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
          />
          <ErrorMessage error={errors.email} />

          <TextLabel className="signup-label">User Name</TextLabel>
          <TextField
            className="signup-input"
            name="user"
            ref={register({ required: true, minLength: 6, maxlength: 100 })}
          />
          <ErrorMessage error={errors.user} />

          <TextLabel className="signup-label">Password</TextLabel>
          <TextField
            type="password"
            className="signup-input"
            name="pwd"
            ref={register({ required: true, minLength: 8, maxlength: 100 })}
          />
          <ErrorMessage error={errors.pwd} />

          <InputButton
            disabled={isSubmitting}
            className="signup-button"
            type="submit"
            value="Create Account"
          />
        </Form>
      </Card>
    </FormContainer>
  );
}
