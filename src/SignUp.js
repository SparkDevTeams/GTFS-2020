import React from 'react'
import { useForm } from 'react-hook-form';
import ReactDOM from "react-dom";
import "./formstyles.css";



export default function SignUp() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; 

  console.log(watch("example")); 

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="signup-label">Username</label>
      <input className="signup-input" name="example" defaultValue="test" ref={register} />
      <label className="signup-label">Password</label>
      <input
        className="signup-input"
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input className="signup-button" type="submit" />
    </form>
  );
}