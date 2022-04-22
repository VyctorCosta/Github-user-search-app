import React, { useEffect, useState } from "react";
import usePersistedState from "../utils/usePersistedState";
import GlobalStyle from "../styles/GlobalStyles";
import { Container } from "./styles";
import lightTheme from "../styles/themes/light";
import darkTheme from "../styles/themes/dark";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Content from "../components/Content";
import { ThemeProvider, DefaultTheme } from "styled-components";
import getInfo from "../api/getInfo";
import UserGithub from "../types/UserGithub";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", darkTheme);
  const [userInfo, setUserInfo] = useState<UserGithub>();
  const [stringInput, setStringInput] = useState("");
  const URL = "https://api.github.com/users/";

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? darkTheme : lightTheme);
  };

  const searchUserInfo = (user: string) => {
    getInfo(URL + user, setUserInfo);
    setStringInput(user);
  };

  useEffect(() => {
    getInfo(URL + "octocat", setUserInfo);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <SearchBar searchUserInfo={searchUserInfo} />
        <Content userInfo={userInfo} stringInput={stringInput} theme={theme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
