import { styled } from "styled-components";

export const TitleWithButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  algin-items: flex-start;
`;

export const TitleWithButtonPanel = styled(TitleWithButton)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  algin-items: flex-start;

  @media (max-width: 740px) {
    display: block;
  }
`;

export const TitleSection = styled.p`
  color: var(--color-gray-title);
  padding-top: 4px;
  font-size: 20px;
`;

export const TitleSectionWithPanel = styled(TitleSection)`
  @media (max-width: 740px) {
    position: relative;
    bottom: 10px;
    margin-right: 20px;
  }
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
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #026773;
    border: 1px solid #026773;
  }
`;
