import React from "react";
import { ButtonDarkMode, Container, Title } from "./styles";
import { DefaultTheme } from "styled-components";

interface Props {
  theme: DefaultTheme;
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <Title>devfinder</Title>
      <ButtonDarkMode onClick={toggleTheme}>
        <h1>{theme.name === "light" ? "DARK" : "LIGHT"}</h1>
        <img src={theme.iconSrc} alt="ícone de um sol."></img>
      </ButtonDarkMode>
    </Container>
  );
};

export default Header;
