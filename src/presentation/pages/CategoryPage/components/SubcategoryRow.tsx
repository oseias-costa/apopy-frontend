import React, { useState } from "react";
import * as S from "../../../styles/PageStyles/CategoryStyles/subcategory-row.styles";
import { DootsIconSubcategory } from "./DootsIconSubcategory";
import { DropMenuContent } from "../../../styles/PageStyles/CategoryStyles/category-row.styles";
import { SubcategoryRowProps } from "../../../types/pages/category.types";

export const SubcategoryRow: React.FC<SubcategoryRowProps> = ({ item, handleSetCategory }) => {
  const [menuSubcategory, setMenuSubcategory] = useState("");
  const [menuPosition, setMenuPosition] = useState({ pageX: 0, pageY: 0});

  const subcategory = item?.subcategory?.map((sub, index) => {
    return (
      <S.SubcategoryRowContainer key={sub}>
        <S.SubCategoryText className={index === 0 ? "firstSubcategory" : ""}>
          {sub}
        </S.SubCategoryText>
        <S.DropMenuSubcategory
          display={menuSubcategory === sub}
          onClick={() => setMenuSubcategory("")}
          height={document.body.scrollHeight}
        >
          <DropMenuContent left={menuPosition?.pageX} top={menuPosition?.pageY}>
            <S.ButtonUpdateSubcategory
              onClick={() =>
                handleSetCategory(item, {
                  type: "updateSubcategory",
                  newSubcategory: sub,
                  oldSubcategory: sub,
                })
              }
            >
              Editar Subcategoria
            </S.ButtonUpdateSubcategory>
            <S.ButtonUpdateSubcategory
              onClick={() =>
                handleSetCategory(item, {
                  type: "deleteSubcategory",
                  oldSubcategory: sub,
                  newSubcategory: ''
                })
              }
            >
              Excluir Subcategoria
            </S.ButtonUpdateSubcategory>
          </DropMenuContent>
        </S.DropMenuSubcategory>
        <DootsIconSubcategory
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            setMenuSubcategory(sub);
            setMenuPosition(e);
          }}
        />
      </S.SubcategoryRowContainer>
    );
  });

  return <S.SubcategoryContainer>{subcategory}</S.SubcategoryContainer>;
};
