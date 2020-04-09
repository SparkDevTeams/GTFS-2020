import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {
  ProfileContainer,
  ProfileImage,
  StyledHr,
  SideContainer,
  FormBox,
  Row,
  Column,
  About,
  PageContainer,
  ProfileDescription,
} from "./styles";
import Card from "../Commons/Card/Card";
import { TextLabel, InputButton, Form, TextField } from "../SignupPage/styles";
import { useParams } from "react-router-dom";
import API from "../../Services/API";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Macaca_nigra_self-portrait_large.jpg",
  });
  let { username } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    async function getProfile() {
      let response = await API.getUserInfo(username);
      if (response.message) {
        console.log(response.message);
      } else {
        setUser({
          ...response,
          name: username,
          profilePicture: `data:image/png;base64, ${response.profilePicture}`,
        });
        setIsLoggedIn(
          JSON.parse(localStorage.getItem("user"))?.username === username
        );
      }
    }

    getProfile();
  }, [username]);

  const submitProfile = (data) => async (data) => {
    const profile = new FormData();
    profile.append("aboutMe", data.about);
    let response = await API.editProfile();
  };

  return (
    <div class="row">
      <PageContainer>
        {isLoggedIn && (
          <ProfileContainer>
            <Card height="110%" direction="column" padding="10%" width="80%">
              <form>
                <Row>
                  <Column width="45%">
                    <TextLabel>Username</TextLabel>
                    <TextField placeholder="Username" name="Username" />
                  </Column>
                  <Column width="45%">
                    <TextLabel>Email</TextLabel>
                    <TextField type="text" placeholder=" Email" name="Email" />
                  </Column>
                </Row>
                <TextLabel>Address</TextLabel>
                <TextField
                  type="text"
                  placeholder="Address"
                  name="Address"
                  defaultValue={user.address}
                />
                <TextLabel>About</TextLabel>
                <About
                  type="text"
                  name="About"
                  maxlength="500"
                  defaultValue={user.aboutMe}
                />
              </form>

              <InputButton
                disabled={isSubmitting}
                className="update-button"
                type="submit"
                value="Submit"
              />
            </Card>
          </ProfileContainer>
        )}

        <SideContainer isLoggedIn={isLoggedIn}>
          <Card
            direction="column"
            padding="10%"
            width={isLoggedIn ? "80%" : "50%"}
          >
            <ProfileImage src={user.profilePicture} />

            <p>{user.name}</p>
            <ProfileDescription>{user.aboutMe}</ProfileDescription>
          </Card>
        </SideContainer>
      </PageContainer>
    </div>
  );
};

export default UserProfile;
