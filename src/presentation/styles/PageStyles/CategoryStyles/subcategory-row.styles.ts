import { styled } from "styled-components";
import { ButtonUpdate, DropMenu } from "./category-row.styles";
import { IconSvg } from "./category.styles";

export const SubcategoryContainer = styled.div``;

export const SubcategoryRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 70px;
  height: 24px;
`;

export const SubCategoryText = styled.p<{ left: number }>`
  color: #5e5e5e;
  font-size: 14px;
  padding-left: 25px;
  margin-left: 20px;
  margin-right: 20px;

  &:before {
    content: "";
    width: 10px;
    height: 1px;
    background-color: #c0b4ad;
    position: relative;
    display: block;
    left: -20px;
    top: 8px;
  }

  &: after {
    content: "";
    width: 1px;
    height: 25px;
    background-color: #c0b4ad;
    position: relative;
    display: block;
    left: -20px;
    top: -33px;
  }
`;

export const DropMenuSubcategory = styled(DropMenu)`
  width: 100%;
  z-index: 3;
`;

export const IconSvgSubcategory = styled(IconSvg)``;

export const ButtonUpdateSubcategory = styled(ButtonUpdate)`
  width: 100%;
`;
