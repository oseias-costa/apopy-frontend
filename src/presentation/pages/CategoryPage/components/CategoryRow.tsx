import React, { useState } from "react";
import * as S from "../../../styles/PageStyles/CategoryStyles/category-row.styles";
import { DootsIcon } from "./DootsIcon";
import { SubcategoryRow } from "./SubcategoryRow";
import { CategoryInterface } from '../../../../domain/category'
import { CategoryRowProps, HandleSetCategory, MenuCategoryState } from "../../../types/pages/category.types";

export const CategoryRow: React.FC<CategoryRowProps> = ({ state, setCategoryState }) => {
  const [menuCategory, setMenuCategory] = useState<MenuCategoryState>({
    openMenu: false,
    item: "",
  });
  const [positionCategory, setPositionCategory] = useState({ pageX: 0, pageY: 0});

  const handleSetCategory: HandleSetCategory = (item, data) => {
    return setCategoryState({
      _id: item._id,
      name: item.name,
      openModal: true,
      ...data,
    });
  };

  const listCategories = state?.map(
    (item: CategoryInterface) => {
      return (
        <>
          <S.CategoryRowContainer key={item?._id}>
            <S.CategoryRowText>{item?.name}</S.CategoryRowText>
            <S.DropMenu
              height={document.body.scrollHeight}
              display={menuCategory.item === item?._id}
              onClick={() => setMenuCategory({openMenu: false, item: "" })}
            >
              <S.DropMenuContent
                left={positionCategory?.pageX}
                top={positionCategory?.pageY}
              >
                <S.DropMenuButtons>
                  <S.ButtonUpdate
                    onClick={() => 
                      handleSetCategory(item, { 
                        type: "update", 
                        newSubcategory: '', 
                        oldSubcategory: '' 
                    })}
                  >
                    Editar
                  </S.ButtonUpdate>
                  <S.ButtonUpdate
                    onClick={() => 
                      handleSetCategory(item, { 
                        type: "delete",  
                        newSubcategory: '', 
                        oldSubcategory: '' 
                    })}
                  >
                    Excluir
                  </S.ButtonUpdate>
                </S.DropMenuButtons>
                <S.ButtonCreateSubcategory
                  onClick={() =>
                    handleSetCategory(item, {
                      type: "createSubcategory",
                      newSubcategory: "",
                      oldSubcategory: ''
                    })
                  }
                >
                  Adicionar Subcategoria
                </S.ButtonCreateSubcategory>
              </S.DropMenuContent>
            </S.DropMenu>
            <DootsIcon
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                setMenuCategory({openMenu: !menuCategory, item: item?._id });
                setPositionCategory(e);
              }}
            />
          </S.CategoryRowContainer>
          <SubcategoryRow item={item} handleSetCategory={handleSetCategory} />
        </>
      );
    }
  );
  return <>{listCategories}</>
};
