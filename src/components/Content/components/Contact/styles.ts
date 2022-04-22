import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 470px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ColumnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;
`;

interface Props {
  userExists: boolean;
}

export const RowDiv = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme, userExists }) => {
    console.log(userExists);
    return userExists ? theme.content.colorInfo : theme.content.colorNotAvaliable;
  }};

  img {
    width: 25px;
    height: 25px;
  }
`;
