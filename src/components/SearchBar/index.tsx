import React, { useState } from "react";
import { Button, Container, Input } from "./styles";

interface Props {
  searchUserInfo(user: string): void;
}

const SearchBar: React.FC<Props> = ({ searchUserInfo }) => {
  const [username, setUsername] = useState("");

  return (
    <Container>
      <img src="img/searchIcon.svg" alt="Ícone de uma lupa" />
      <Input
        placeholder="Search GitHub username..."
        onChange={({ target }) => {
          setUsername(target.value);
        }}
        onKeyDown={({ key }) => {
          if (key === "Enter") searchUserInfo(username);
        }}
      />
      <Button
        onClick={() => {
          if (username) searchUserInfo(username);
        }}
      >
        Search
      </Button>
    </Container>
  );
};

export default SearchBar;
