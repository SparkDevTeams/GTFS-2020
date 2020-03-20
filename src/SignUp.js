import React from 'react'
import { useForm } from 'react-hook-form';
import "./formstyles.css";



export default function SignUp() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; 

  console.log(watch("example")); 

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="signup-label">User Name</label>
      <input
          className="signup-input"
          name="userName"
          ref={register({ required: true, maxLength: 10 })}
      />
      {errors.userName && <p>Username field is required</p>}
      <label className="signup-label">Password</label>
      <input
        className="signup-input"
        name="passWord"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.passWord && <p>Password field is required</p>}
      <input className="signup-button" type="submit" value="Create Account"/>
    </form>
  );
}