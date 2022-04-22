import React from "react";
import { Title, Div, Value } from "./styles";

interface Props {
  title: string;
  value: number;
}

export default function Info({ title, value }: Props) {
  return (
    <Div>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Div>
  );
}
