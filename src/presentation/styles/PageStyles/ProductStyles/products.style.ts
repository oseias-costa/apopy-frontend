import { styled } from "styled-components";

export const ProductContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  height: auto;
  padding-bottom: 20px;
  padding-top: 5px;
`;

export const ProductRowContainer = styled.tr`
  justify-content: start;
  border-bottom: 1px solid #e5e4e2;
`;
export const ProductRowContainerHeader = styled.tr`
  justify-content: start;
  border-bottom: 0px solid #e5e4e2;
  background-color: #e5e4e2;
`;

export const ProductRowText = styled.td`
  // width: auto;
  font-size: 14px;
`;

export const ProductRowTextHeader = styled.th`
  font-weight: 600;
  color: #828282;
`;

export const Adjuste = styled.div`
  width: 26px;
  height: 26px;
`;
