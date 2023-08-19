import { styled } from "styled-components";

export const ProductContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding-bottom: 20px;
  padding-top: 5px;
  display: block;
  overflow-y: scroll;
`;

export const ProductRowContainer = styled.tr`
  justify-content: start;
  border-bottom: 1px solid #e5e4e2;
`;
export const ProductRowContainerHeader = styled.tr`
  justify-content: start;
  border-bottom: 0px solid;
  background-color: #e5e4e2;
  border: 4px solid #e5e4e2;
`;

export const Adjuste = styled.div`
  width: 26px;
  height: 26px;
`;
