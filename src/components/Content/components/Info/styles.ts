import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.content.titleRepo};
  font-weight: 700;
  font-size: 14px;
`;

export const Value = styled.p`
  color: ${({ theme }) => theme.content.valueRepo};
  font-weight: 700;
  font-size: 14px;
`;
