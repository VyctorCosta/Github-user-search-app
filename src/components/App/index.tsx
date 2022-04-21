import React, { useState } from "react";
import GlobalStyle from "../../GlobalStyles";
import { Container } from "./styles";
import Header from "../Header";
import { ThemeProvider } from "styled-components";
import {
  General as lightGeneral,
  Header as lightHeader,
  SearchBar as lightSearchBar,
  Content as lightContent,
  Name as lightNome,
} from "../../color/light";
import {
  General as darkGeneral,
  Header as darkHeader,
  SearchBar as darkSearchBar,
  Content as darkContent,
  Name as darkNome,
} from "../../color/dark";

function App() {
  const lightTheme = {
    General: lightGeneral,
    Header: lightHeader,
    SearchBar: lightSearchBar,
    Content: lightContent,
    Name: lightNome,
  };
  const darkTheme = {
    General: darkGeneral,
    Header: darkHeader,
    SearchBar: darkSearchBar,
    Content: darkContent,
    Name: darkNome,
  };
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.Name === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header toggleTheme={toggleTheme} />
        <h1>{theme.Name}</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
