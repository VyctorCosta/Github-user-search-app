import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 67px;
  background-color: ${({ theme }) => theme.searchBar.colorBackground};
  margin-top: 36px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  @media (max-width: 720px) {
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Input = styled.input`
  width: 510px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.searchBar.colorBackground};
  color: ${({ theme }) => theme.searchBar.colorText};
  font-size: 16px;

  @media (max-width: 720px) {
    width: 202px;
  }
`;

export const Button = styled.button`
  width: 85px;
  height: 35px;
  background-color: ${({ theme }) => theme.searchBar.colorBackgroundButton};
  color: ${({ theme }) => theme.searchBar.colorTextButton};
  border: none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 720px) {
    width: 75px;
  }
`;
