import React, { useState, useEffect, useRef } from "react";
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
import {
  TextLabel,
  InputButton,
  Form,
  TextField,
  ErrorMessage,
} from "../SignupPage/styles";
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
  const fileRef = useRef();
  const {
    handleSubmit,
    register,
    errors,
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
          profilePictureData: response.profilePicture,
        });
        setIsLoggedIn(
          JSON.parse(localStorage.getItem("user"))?.username === username
        );
      }
    }

    getProfile();
  }, [username]);

  const submitProfile = async (data) => {
    let file = fileRef.current.files[0];
    if(typeof file === 'undefined'){
      let blob = new Blob([atob(user.profilePictureData)], {type: 'image/png', encoding: 'utf-8'});
      blob.lastModifiedDate = new Date();
      blob.name = 'profile_pic.png';
      file = blob;
    }
    const profile = new FormData();
    profile.append("aboutMe", data.about);
    profile.append("address", data.address);
    profile.append("file", file);
    let response = await API.updateUserInfo(profile);
    console.log(response)
  };

  return (
    <div class="row">
      <PageContainer>
        {isLoggedIn && (
          <ProfileContainer>
            <Card height="110%" direction="column" padding="10%" width="80%">
              <form onSubmit={handleSubmit(submitProfile)}>
                <Row>
                  <Column width="45%">
                    <TextLabel className="signup-label">Username</TextLabel>
                    <TextField
                      className="signup-input"
                      name="user"
                      placeholder="Username"
                      ref={register({
                        required: {
                          value: true,
                          message: "Username is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Username has to be atleast 6 characters",
                        },
                        maxLength: {
                          value: 100,
                          message: "Username can have at most 100 characters",
                        },
                      })}
                    />
                    {errors?.user?.message && (
                      <ErrorMessage>{errors?.user?.message}</ErrorMessage>
                    )}
                  </Column>
                  <Column width="45%">
                    <TextLabel>Profile Picture</TextLabel>
                    <TextField
                      type="file"
                      name="profile"
                      accept="image/png, image/jpeg"
                      ref={fileRef}
                    />
                  </Column>
                </Row>
                <TextLabel>Address</TextLabel>
                <TextField
                  type="text"
                  placeholder="Address"
                  name="address"
                  defaultValue={user.address}
                  ref={register({
                    required: { value: true, message: "Address is required" },
                    maxLength: {
                      value: 100,
                      message: "Addresses are capped at 100 characters",
                    },
                  })}
                />
                {errors?.address?.message && (
                  <ErrorMessage>{errors?.address?.message}</ErrorMessage>
                )}
                <TextLabel>About</TextLabel>
                <About
                  type="text"
                  name="about"
                  maxlength="500"
                  defaultValue={user.aboutMe}
                  ref={register({
                    maxLength: {
                      value: 100,
                      message: "Addresses are capped at 100 characters",
                    },
                  })}
                />

                {errors?.about?.message && (
                  <ErrorMessage>{errors?.about?.message}</ErrorMessage>
                )}
                <InputButton
                  disabled={isSubmitting}
                  className="update-button"
                  type="submit"
                  value="Submit"
                />
              </form>
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
