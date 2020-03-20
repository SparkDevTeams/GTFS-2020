import React from 'react'
import { useForm } from 'react-hook-form';
import "./formstyles.css";



export default function SignUp() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; 

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>

    <label className="signup-label">Email</label>
    <input
        className="signup-input"
        name="email"
        ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
    />
    {errors.email && <p>Email field is invalid</p>}

      <label className="signup-label">User Name</label>
      <input
          className="signup-input"
          name="userName"
          ref={register({ required: true, minLength: 6 })}
      />
      {errors.userName && <p>Username field is required & Length needs to be greater than 5</p>}

      <label className="signup-label">Password</label>
      <input
        className="signup-input"
        name="passWord"
        ref={register({ required: true, minLength: 8 })}
      />
      {errors.passWord && <p>Password field is required & Length needs to be greater than 7</p>}

      <input className="signup-button" type="submit" value="Create Account"/>
    </form>
  );
}