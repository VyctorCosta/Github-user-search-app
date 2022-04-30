import React from "react";
import { DefaultTheme } from "styled-components";
import UserGithub from "../../types/UserGithub";
import Contact from "./components/Contact";
import Info from "./components/Info";
import {
  Container,
  Content,
  RepoInfo,
  Title,
  TitleLogin,
  TitleWithJoin,
  UserBio,
  UserInfos,
} from "./styles";

interface Props {
  userInfo: UserGithub | undefined;
  stringInput: string;
  theme: DefaultTheme;
}

const ContentInfo: React.FC<Props> = ({ userInfo, stringInput, theme }) => {
  return (
    <Container>
      <Content>
        <Title>
          <img
            src={
              userInfo?.login
                ? `https://github.com/${userInfo.login}.png`
                : "https://github.com/octocat.png"
            }
            alt="Foto de perfil"
            width="100px"
            height="100px"
          />
          <UserInfos>
            <TitleWithJoin>
              <TitleLogin>
                <h2>
                  {(() => {
                    if (userInfo?.name === undefined) return stringInput;
                    if (userInfo.name === null) return userInfo.login;
                    return userInfo.name;
                  })()}
                </h2>
                <h3>{userInfo?.login ? `@${userInfo?.login}` : ""}</h3>
              </TitleLogin>
              <h4>
                {(() => {
                  if (!userInfo?.created_at) return "";
                  const date = new Date(userInfo.created_at).toDateString().split(" ");
                  return `Joined ${date[2]} ${date[1]} ${date[3]}`;
                })()}
              </h4>
            </TitleWithJoin>
          </UserInfos>
        </Title>
        <UserBio>
          {(() => {
            if (userInfo?.bio === undefined) return "User doesn't exist.";
            if (userInfo.bio === null) return "This profile has no bio.";
            return userInfo.bio;
          })()}
        </UserBio>
        <RepoInfo>
          <Info title="Repos" value={userInfo ? userInfo.public_repos : 0} />
          <Info title="Followers" value={userInfo ? userInfo.followers : 0} />
          <Info title="Following" value={userInfo ? userInfo.following : 0} />
        </RepoInfo>
        <Contact userInfo={userInfo} theme={theme} />
      </Content>
    </Container>
  );
};

export default ContentInfo;
