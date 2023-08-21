import { styled } from "styled-components";

export const CategoryContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 300px;
  height: auto;
  padding-bottom: 30px;
  padding-top: 10px;
  overflow-y: auto;
`;

export const CategoryTitle = styled.div`
  display: flex;
`;

export const IconSvg = styled.svg`
  fill: #828282;
  transition: 0.2s linear;
  cursor: pointer;
  border-radius: 50px;

  &:hover {
    background-color: #cecaca;
    transform: rotate(90deg);
    transition: transform 150ms ease;
  }
`;
