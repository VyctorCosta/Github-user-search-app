import React from "react";
import { ButtonDarkMode, Container, Title } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <Title>devfinder</Title>
      <ButtonDarkMode onClick={toggleTheme}>
        <h1>LIGHT</h1>
        {/* <img src="" alt="ícone de um sol."></img> */}
      </ButtonDarkMode>
    </Container>
  );
};

export default Header;
