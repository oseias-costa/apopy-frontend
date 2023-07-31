import { useRef, useState } from "react";
import * as S from "../../../styles/PageStyles/CategoryStyles/subcategory-row.styles";
import { DootsIconSubcategory } from "./DootsIconSubcategory";
import { DropMenuContent } from "../../../styles/PageStyles/CategoryStyles/category-row.styles";

export const SubcategoryRow = ({ item, handleSetCategory }) => {
  const [menuSubcategory, setMenuSubcategory] = useState("");
  const [menuPosition, setMenuPosition] = useState("");
  const subcategoryRowPosition = useRef(null);

  console.log(subcategoryRowPosition);

  const subcategory = item?.subcategory?.map((sub) => {
    return (
      <S.SubcategoryRowContainer key={sub}>
        <S.SubCategoryText ref={subcategoryRowPosition}>
          {sub}
        </S.SubCategoryText>
        <S.DropMenuSubcategory
          display={menuSubcategory === sub}
          onClick={() => setMenuSubcategory("")}
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
              Update subcategoria
            </S.ButtonUpdateSubcategory>
            <S.ButtonUpdateSubcategory
              onClick={() =>
                handleSetCategory(item, {
                  type: "deleteSubcategory",
                  oldSubcategory: sub,
                })
              }
            >
              Delete subcategoria
            </S.ButtonUpdateSubcategory>
          </DropMenuContent>
        </S.DropMenuSubcategory>
        <DootsIconSubcategory
          onClick={(e) => {
            setMenuSubcategory(sub);
            setMenuPosition(e);
          }}
        />
      </S.SubcategoryRowContainer>
    );
  });

  return <S.SubcategoryContainer>{subcategory}</S.SubcategoryContainer>;
};
