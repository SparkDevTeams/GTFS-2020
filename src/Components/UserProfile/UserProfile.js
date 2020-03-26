import React, { useState } from "react";
import PropTypes from "prop-types";
import { ProfileContainer, ProfileImage, StyledHr } from "./styles";
import Card from '../Commons/Card/Card'

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Kayasdasdasheck ",
    email: "I hate this ",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Macaca_nigra_self-portrait_large.jpg"
  });
  return (
    <ProfileContainer>
      <Card width='60%' direction="column">

        <ProfileImage src={user.avatar} />
        <p>{user.name}</p>
        <p>{user.email}</p>
        <StyledHr/>
        <p>peepee</p>
      </Card>
    </ProfileContainer>
  )
}


export default UserProfile;