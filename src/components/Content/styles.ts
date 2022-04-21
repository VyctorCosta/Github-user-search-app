import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.content.colorBackground};
  margin-top: 30px;
  padding: 40px 0;
  border-radius: 20px;
`;

export const Content = styled.div`
  width: 620px;
  /* background-color: red; */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const UserInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    color: ${({ theme }) => theme.content.colorLogin};
  }
`;

export const TitleWithJoin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    color: ${({ theme }) => theme.content.colorUsername};
  }

  h4 {
    color: ${({ theme }) => theme.content.colorJoined};
  }
`;

export const UserBio = styled.p`
  color: ${({ theme }) => theme.content.colorBio};
`;
