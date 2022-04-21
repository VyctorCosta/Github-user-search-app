import React from "react";
import usePersistedState from "../utils/usePersistedState";
import GlobalStyle from "../styles/GlobalStyles";
import { Container } from "./styles";
import lightTheme from "../styles/themes/light";
import darkTheme from "../styles/themes/dark";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Content from "../components/Content";
import { ThemeProvider, DefaultTheme } from "styled-components";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", darkTheme);

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
