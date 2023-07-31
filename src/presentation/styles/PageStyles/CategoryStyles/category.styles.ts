import { styled } from "styled-components";

export const CategoryContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border: 1px solid #e5e4e2;
  width: 300px;
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
    background-color: #e7e7e7;
  }
`;
