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
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const UserIconCircle = styled.p`
  color: var(--color-strong-green);
  font-size: 14pt;
  font-weight: 600;
`;

export const UserNameText = styled.p`
  color: var(--color-gray-placeholder);
  font-size: 11pt;
  text-overflow: ellipsis;
`;

export const UserEmailText = styled.p`
  color: var(--color-gray-placeholder);
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 30px;
`;


export const ButtonUserHeader = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(props) =>
    props.disabled ? "#828282" : "var(--color-blue-light)"};
  height: 34px;
  color: #fff;
  border-radius: 3px;
  border: transparent;
  text-align: center;
  font-size: 14px;
  font-family: var(--font-primary);
  font-weight: 500;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#828282" : "#026773")};
  }
`;