import { useState } from "react";
import * as S from "../../../styles/PageStyles/CategoryStyles/subcategory-row.styles";
import { DootsIconSubcategory } from "./DootsIconSubcategory";

export const SubcategoryRow = ({ item, handleSetCategory }) => {
  const [menuSubcategory, setMenuSubcategory] = useState('');

  const subcategory = item?.subcategory?.map((sub) => {
    return (
      <S.SubcategoryRowContainer key={sub}>
        <S.SubCategoryText>{sub}</S.SubCategoryText>
          <S.DropMenuSubcategory display={menuSubcategory === sub} onClick={() => setMenuSubcategory('')}>
            <a
              onClick={() =>
                handleSetCategory(item, {
                  type: "updateSubcategory",
                  newSubcategory: sub,
                  oldSubcategory: sub,
                })
              }
              >
              Update subcategoria
            </a>
            <a
              onClick={() =>
                handleSetCategory(item, {
                  type: "deleteSubcategory",
                  oldSubcategory: sub,
                })
              }
              >
              Delete subcategoria
            </a>
          </S.DropMenuSubcategory>
          <DootsIconSubcategory onClick={() => setMenuSubcategory(sub)} />
      </S.SubcategoryRowContainer>
    );
  });

  return subcategory;
};
