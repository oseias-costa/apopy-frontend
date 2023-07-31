import { styled } from "styled-components";

export const TitleWithButton = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

export const TitleSection = styled.p`
  color: var(--color-gray-title);
  padding-top: 4px;
  font-size: 20px;
`;

export const ButtonCreateItem = styled.button`
  margin-right: 8px;
  background-color: var(--color-blue-light);
  color: #fff;
  border-radius: 3px;
  border: 1px solid var(--color-blue-light);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
  text-align: center;
  font-size: 12px;
  margin-left: 30px;
  transition: 0.3s linear;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: var(--color-blue-light);
  }
`;
