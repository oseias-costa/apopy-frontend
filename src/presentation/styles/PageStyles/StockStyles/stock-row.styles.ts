import { styled } from "styled-components";
import {
  CategoryRowContainer,
} from "../CategoryStyles/category-row.styles";
import { CategoryContainer } from "../CategoryStyles/category.styles";

export const StockContainerPage = styled(CategoryContainer)`
    width: auto;
`

export const StockContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  height: auto;
  padding-bottom: 20px;
  padding-top: 5px;
`;

export const StockRowContainer = styled(CategoryRowContainer)`
  justify-content: start;
  border-bottom: 1px solid #e5e4e2;
`;
export const StockRowContainerHeader = styled(CategoryRowContainer)`
  justify-content: start;
  border-bottom: 0px solid #e5e4e2;
  background-color: #e5e4e2;
`;

export const StockRowText = styled.div`
  font-family: var(--font-primary);
  width: 12%;
  font-size: 14px;
`;

export const StockRowTextHeader = styled.div`
  font-weight: 400;
  color: #828282;
  width: 100%
`;

export const Adjuste = styled.div`
  width: 26px;
  height: 26px;
`;
