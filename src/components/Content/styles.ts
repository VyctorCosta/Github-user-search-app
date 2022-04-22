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
  display: flex;
  width: 620px;
  flex-direction: column;
  align-items: flex-end;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 40px;

  img {
    border-radius: 50px;
  }
`;

export const UserInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    color: ${({ theme }) => theme.content.colorLogin};
    margin-bottom: 20px;
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
  max-width: 470px;
`;

export const RepoInfo = styled.div`
  width: 470px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.content.backgroundRepo};
  border-radius: 14px;
`;
