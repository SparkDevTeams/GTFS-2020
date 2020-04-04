import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from 'react-hook-form';
import { ProfileContainer, ProfileImage, StyledHr, SideContainer, FormBox, Row, Column, About, PageContainer, ProfileDescription } from "./styles";
import Card from '../Commons/Card/Card'
import { TextLabel, InputButton, Form, TextField } from "../SignupPage/styles";



const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Macaca_nigra_self-portrait_large.jpg"
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  return (
    <div class="row">
      <PageContainer>
        <ProfileContainer>
          <Card height="110%" direction="column" padding="10%" width="80%">
            <form>
              <Row>
                <Column width="45%">
                  <TextLabel>Username</TextLabel>
                  <TextField placeholder=" Username" name="Username" />
                </Column>
                <Column width="45%">
                  <TextLabel>Email</TextLabel>
                  <TextField type="text" placeholder=" Email" name="Email" />
                </Column>
              </Row>
              <TextLabel>Address</TextLabel>
              <TextField type="text" placeholder=" Address" name="Address" />
              <TextLabel>About</TextLabel>
              <About type="text" name=" About" maxlength="500" />
            </form>

            <InputButton
              disabled={isSubmitting}
              className="update-button"
              type="submit"
              value="Submit"
            />

          </Card></ProfileContainer>


        <SideContainer>
          <Card direction="column" padding="10%" width="80%">

            <ProfileImage src={user.avatar} />

            <p>{user.name}</p>
            <p>{user.email}</p>
            <ProfileDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ProfileDescription></Card></SideContainer>
      </PageContainer>
    </div>

  );
}


export default UserProfile;