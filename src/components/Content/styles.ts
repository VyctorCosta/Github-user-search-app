import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.content.colorBackground};
  margin-top: 30px;
  padding: 40px 0;
  border-radius: 20px;

  @media (max-width: 720px) {
    /* padding: 0; */
  }
`;

export const Content = styled.div`
  display: flex;
  width: 620px;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 720px) {
    max-width: 287px;
  }
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

  @media (max-width: 720px) {
    gap: 20px;
    img {
      width: 70px;
      height: 70px;
    }
  }
`;

export const UserInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h4 {
    color: ${({ theme }) => theme.content.colorJoined};
    margin-bottom: 20px;
  }
  /* h3 {
    color: ${({ theme }) => theme.content.colorLogin};
    margin-bottom: 20px;
  } */
`;

export const TitleLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 600;

  h2 {
    color: ${({ theme }) => theme.content.colorUsername};
  }

  h3 {
    color: ${({ theme }) => theme.content.colorLogin};
  }

  @media (max-width: 720px) {
    padding-top: 10px;
  }
`;

export const TitleWithJoin = styled.div`
  display: flex;
  justify-content: space-between;
  height: 46px;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const UserBio = styled.p`
  color: ${({ theme }) => theme.content.colorBio};
  width: 470px;
  position: absolute;
  top: 500px;
  text-align: left;

  @media (max-width: 720px) {
    position: static;
    max-width: 287px;
    width: 287px;
    margin-bottom: 45px;
  }
`;

export const RepoInfo = styled.div`
  width: 470px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.content.backgroundRepo};
  border-radius: 14px;

  @media (max-width: 720px) {
    width: 287px;
  }
`;
