import React from "react";
import { Container, Content, Title, TitleWithJoin, UserBio, UserInfos } from "./styles";

const ContentInfo: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          <img src="img/defaultPhoto.svg" alt="Foto de perfil" width="100px" height="100px" />
          <UserInfos>
            <TitleWithJoin>
              <h2>The Octocat</h2>
              <h4>Joined 25 Jan 2011</h4>
            </TitleWithJoin>
            <h3>@octocat</h3>
            <UserBio>This profile has no bio.</UserBio>
          </UserInfos>
        </Title>
      </Content>
    </Container>
  );
};

export default ContentInfo;
