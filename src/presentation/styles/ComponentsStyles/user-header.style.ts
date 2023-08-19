import { styled } from "styled-components";

export const UserHeaderContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserAbreviation = styled.div`
  background-color: #d9d9d9;
  border-radius: 500px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const UserIconCircle = styled.p`
  color: var(--color-strong-green);
  font-size: 24px;
`;

export const UserNameText = styled.p`
  color: var(--color-gray-placeholder);
`;

export const UserEmailText = styled.p`
  color: var(--color-gray-placeholder);
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 30px;
`;
