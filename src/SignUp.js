import React from 'react'
import {useForm} from 'react-hook-form';
import "./formstyles.css";
import API from './Services/API.js';
import ErrorMessage from "./ErrorMessage";

export default function SignUp() {
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

  //TODO IN progress
  const onSubmit = data => {
    alert(JSON.stringify(data));
    const {password, email, username} = data;
    validate(data);
  };

  //TODO IN progress
  const validate = async ({username, password, email}) => {
    let response = await API.registerUser(username, password, email);
    console.log(response);
    if (response.status !== 200)
    {
      setError("usernameTaken", "validate");
    }
    else {
      clearError("username");
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>

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
          name="userName"
          ref={register({ required: true, minLength: 6, maxlength: 100})}
      />
      <ErrorMessage error={errors.userName}/>

      <label className="signup-label">Password</label>
      <input
        type="password"
        className="signup-input"
        name="password"
        ref={register({ required: true, minLength: 8, maxlength: 100})}
      />
      <ErrorMessage error={errors.password}/>

      <input disabled={isSubmitting} className="signup-button" type="submit" value="Create Account"/>
    </form>
  );
}