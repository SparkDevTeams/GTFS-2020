import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from 'react-hook-form';
import { ProfileContainer, ProfileImage, StyledHr, SideContainer, FormBox, Row, Column, About } from "./styles";
import Card from '../Commons/Card/Card'
import { TextLabel, InputButton, Form, TextField } from "../SignupPage/styles";



const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Fulton the peepee ",
    email: "fulton@gay.com ",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Macaca_nigra_self-portrait_large.jpg"
  });

  const {
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  return (
    <div class="row">

      <ProfileContainer>
        <Card height="110%" direction="column">
          <form>
            <Row>
              <Column width="45%">
                <TextLabel>Username</TextLabel>
                <TextField placeholder="Username" name="Username" />
              </Column>
              <Column width="45%">
                <TextLabel>Email</TextLabel>
                <TextField type="text" placeholder="Email" name="Email"/>
              </Column>
            </Row>
            <TextLabel>Address</TextLabel>
            <TextField type="text" placeholder="Address" name="Address" />
            <TextLabel>About</TextLabel>
            <About type="text" name="About" maxlength="500" />
          </form>

          <InputButton
            disabled={isSubmitting}
            className="update-button"
            type="submit"
            value="Submit"
          />

        </Card>
      </ProfileContainer>

      <SideContainer><Card><ProfileImage src={user.avatar} /></Card></SideContainer>

    </div>

  );
}


export default UserProfile;