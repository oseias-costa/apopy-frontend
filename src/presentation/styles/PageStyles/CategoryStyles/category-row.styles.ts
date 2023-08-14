import { styled } from "styled-components";
import { ButtonCreateItem } from "../../GlobalStyles/titleWithButton.style";

export const CategoryRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    background-color: #e7e7e7;
  }
`;

export const CategoryRowText = styled.p`
  color: var(--color-gray-text);
  padding-top: 20px;
  padding-bottom: 3px;
  position: relative;
  top: -08px;
  text-align: left;
`;

export const DropMenu = styled.div<{ display: boolean, height: number }>`
  z-index: 15;
  left: 0;
  top: 0;
  height: ${props => `${props.height}px`};
  width: 100%;
  position: absolute;
  background-color: transparent;
  display: ${(props) => (props.display ? "flex" : "none")};
`;

export const DropMenuButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropMenuContent = styled.div<{
  left: number | undefined;
  top: number | undefined;
}>`
  z-index: 14;
  position: absolute;
  left: ${(props) => (props.left ? props.left - 180 + "px" : 0)};
  top: ${(props) => (props.top ? props.top + 18 + "px" : 0)};
  background-color: #fff;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 150px;
  padding: 10px;
`;

export const ButtonCreateSubcategory = styled(ButtonCreateItem)`
  width: 100%;
  margin: 0;
  padding: 6px;
`;

export const ButtonUpdate = styled.button`
  background-color: transparent;
  border: 1px solid #ababab;
  padding: 4px;
  margin-bottom: 2px;
  border-radius: 4px;
  cursor: pointer;
  color: #2a2829;
  transition: 0.2s linear;

  &:hover {
    background-color: #e7e7e7;
  }
`;


export const ContainerDropMenu = styled.div`
    padding-right: 6px;
    padding-left: 6px;
`