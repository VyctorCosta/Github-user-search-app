import React, { useState } from "react";
import GlobalStyle from "../../styles/GlobalStyles";
import { Container } from "./styles";
import lightTheme from "../../styles/themes/light";
import darkTheme from "../../styles/themes/dark";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Content from "../Content";
import { ThemeProvider } from "styled-components";
import ThemeType from "../../types/themeType";

function App() {
  const [theme, setTheme] = useState<ThemeType>(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <SearchBar />
        <Content />
      </Container>
    </ThemeProvider>
  );
}

export default App;
