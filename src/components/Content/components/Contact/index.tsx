import React from "react";
import { DefaultTheme } from "styled-components";
import UserGithub from "../../../../types/UserGithub";
import Info from "./Info";
import { Container, ColumnDiv } from "./styles";

interface Props {
  userInfo: UserGithub | undefined;
  theme: DefaultTheme;
}

const Contact: React.FC<Props> = ({ userInfo, theme }) => {
  return (
    <Container>
      <ColumnDiv>
        <Info
          imgSrc={theme.name === "light" ? "img/map-pinLightIcon.svg" : "img/map-pinDarkIcon.svg"}
          imgAlt="Simbolo de localização."
          text={userInfo?.location ? userInfo.location : "Not Available"}
          userExists={userInfo?.location ? true : false}
        />
        <Info
          imgSrc={theme.name === "light" ? "img/linkLightIcon.svg" : "img/linkDarkIcon.svg"}
          imgAlt="Simbolo de um link."
          text={userInfo?.blog ? userInfo.blog : "Not Available"}
          userExists={userInfo?.blog ? true : false}
        />
      </ColumnDiv>
      <ColumnDiv>
        <Info
          imgSrc={theme.name === "light" ? "img/twitterLightIcon.svg" : "img/twitterDarkIcon.svg"}
          imgAlt="Logomarca da empresa Twitter."
          text={userInfo?.twitter_username ? userInfo.twitter_username : "Not Available"}
          userExists={userInfo?.twitter_username ? true : false}
        />
        <Info
          imgSrc={theme.name === "light" ? "img/buildingLightIcon.svg" : "img/buildingDarkIcon.svg"}
          imgAlt="Simbolo de um prédio"
          text={userInfo?.company ? userInfo.company : "Not Available"}
          userExists={userInfo?.company ? true : false}
        />
      </ColumnDiv>
    </Container>
  );
};

export default Contact;
