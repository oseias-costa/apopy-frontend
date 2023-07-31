import { styled } from "styled-components";
import { DropMenu } from "./category-row.styles";
import { IconSvg } from "./category.styles";

export const SubcategoryRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 70px;
`;

export const SubCategoryText = styled.p`
  color: #5e5e5e;
  font-size: 14px;
  padding-left: 10px;
`;

export const DropMenuSubcategory = styled(DropMenu)`
     width: 100%
`

export const IconSvgSubcategory = styled(IconSvg)`

`

