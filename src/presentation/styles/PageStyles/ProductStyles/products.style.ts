import { styled } from "styled-components";
import {
  CategoryRowContainer,
  CategoryRowText,
} from "../CategoryStyles/category-row.styles";

export const ProductContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border: 1px solid #e5e4e2;
  min-width: 300px;
  height: auto;
  padding-bottom: 20px;
`;

export const ProductRowContainer = styled(CategoryRowContainer)`
  justify-content: start;
  border-bottom: 1px solid #e5e4e2;
`;
export const ProductRowContainerHeader = styled(CategoryRowContainer)`
  justify-content: start;
  border-bottom: 0px solid #e5e4e2;
  background-color: #e5e4e2;
`;

export const ProductRowText = styled(CategoryRowText)`
  width: 25%;
  font-size: 14px;
`;

export const ProductRowTextHeader = styled(ProductRowText)`
  font-weight: 600;
  color: #828282;
`;

export const Adjuste = styled.div`
  width: 26px;
  height: 26px;
`;
