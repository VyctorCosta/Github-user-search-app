import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.header.colorTitle};
  font-size: 24px;
  font-weight: 700;
  cursor: default;
`;

export const ButtonDarkMode = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  h1 {
    color: ${({ theme }) => theme.header.colorButton};
  }
`;
