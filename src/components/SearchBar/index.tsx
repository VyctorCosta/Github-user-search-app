import React from "react";
import { Button, Container, Input } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <img src="img/searchIcon.svg" alt="Ícone de uma lupa" />
      <Input placeholder="Search GitHub username..." />
      <Button>Search</Button>
    </Container>
  );
};

export default SearchBar;
