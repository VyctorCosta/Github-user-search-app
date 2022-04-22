import React from "react";
import { RowDiv } from "./styles";

interface Props {
  imgSrc: string;
  imgAlt: string;
  text: string;
  userExists: boolean;
}

const Info: React.FC<Props> = ({ imgSrc, imgAlt, text, userExists }) => {
  return (
    <RowDiv userExists={userExists}>
      <img src={imgSrc} alt={imgAlt} />
      <p>{text}</p>
    </RowDiv>
  );
};

export default Info;
