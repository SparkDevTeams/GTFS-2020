import React, {useState} from 'react'
import {useForm} from 'react-hook-form';
import "./formstyles.css";
import API from './Services/API.js';
import ErrorMessage from "./ErrorMessage";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";

export default function SignUp() {
  let history = useHistory();
  const
  {
    register,
    handleSubmit,
    watch,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();
  const [show, setShow] = useState(false);
  const [modalText, setmodalText] = useState("");

  const onSubmit = data => {
    const {pwd, email, user} = data;
    validate(data);
  };

  const validate = async ({user, pwd, email}) => {
    let response = await API.registerUser(user, pwd, email);

    //Username was taken
    if(response == undefined)
    {
      setError("usernameTaken", "validate");
      // alert("Username was taken! - Try a new one");
      setmodalText("Username was taken! - Try a new one")
      //TODO display modal
      showModal();
      // <Modal show={show}/>
    }
    /**
     * Username was not taken,
     * Gets registered in backend
     * Redirects to Home page('/')
     */
    else
    {
      clearError("user");
      // alert("Succesfuly created an account!");

      history.push("/");
      //TODO display modal
      setmodalText("Succesfuly created an account!")
      showModal();
      // <Modal show={show}/>
    }
  };

  function showModal(e){
    setShow(prev => !prev);
  }

  return (

    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
    <Modal onClose={showModal} show={show} message={modalText}/>
    <label className="signup-label">Email</label>
    <input
        className="signup-input"
        name="email"
        ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
    />
    <ErrorMessage error={errors.email}/>

      <label className="signup-label">User Name</label>
      <input
          className="signup-input"
          name="user"
          ref={register({ required: true, minLength: 6, maxlength: 100})}
      />
      <ErrorMessage error={errors.user}/>

      <label className="signup-label">Password</label>
      <input
        type="password"
        className="signup-input"
        name="pwd"
        ref={register({ required: true, minLength: 8, maxlength: 100})}
      />
      <ErrorMessage error={errors.pwd}/>

      <input disabled={isSubmitting} className="signup-button" type="submit" value="Create Account"/>
    </form>

  );
}