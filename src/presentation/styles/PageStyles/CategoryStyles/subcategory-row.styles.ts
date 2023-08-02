import { styled } from "styled-components";
import { ButtonUpdate, DropMenu } from "./category-row.styles";
import { IconSvg } from "./category.styles";

export const SubcategoryContainer = styled.div`
  /* padding-top: 6px; */
  margin-left: 35px;
`;

export const SubcategoryRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 70px;
  height: 24px;
  margin-left: 10px;
  border-radius: 5px;

  .firstSubcategory {
    &:after {
      height: 15px;
      top: -23px;
    }
  }

  &:hover {
    background-color: #e7e7e7;
  }
`;

export const SubCategoryText = styled.p`
  color: #5e5e5e;
  font-size: 14px;
  padding-left: 10px;
  margin-left: 0px;
  margin-right: 20px;
  position: relative;
  top: 3px;

  &:before {
    content: "";
    width: 10px;
    height: 1px;
    background-color: #c0b4ad;
    position: relative;
    display: block;
    left: -20px;
    top: 8px;
    z-index: 2;
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
    z-index: 2;
  }
`;

export const DropMenuSubcategory = styled(DropMenu)`
  width: 100%;
`;

export const IconSvgSubcategory = styled(IconSvg)``;

export const ButtonUpdateSubcategory = styled(ButtonUpdate)`
  width: 100%;
`;
