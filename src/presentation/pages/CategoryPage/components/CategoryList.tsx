import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesUseCase } from "../../../../application/category/get-categories.usecase";
import { fetchCategories } from "../../../redux/slice/categorySlice";
import { CategoryState, initialCategoryValue } from "./category.types";
import { CreateCategory } from "./CreateCategory";
import { UpdateCategory } from "./UpdateCategory";
import { DeleteCategory } from "./DeleteCategory";
import { UpdateSubcategory } from "./UpdateSupcategory";
import { DeleteSubcategory } from "./DeleteSubcategory";
import { CreateSubcategory } from "./CreateSubcategory";
import { CategoryContainer } from "../../../styles/PageStyles/CategoryStyles/category.styles";
import { CategoryRow } from "./CategoryRow";
import * as S from "../../../styles/GlobalStyles/titleWithButton.style";
import { useGetCategories } from "../../../hooks/useGetCategories";

type typeModal = {
  [key: string]: React.ReactNode;
};

export const CategoryList = () => {
  const [categoryState, setCategoryState] =
    useState<SetStateAction<CategoryState>>(initialCategoryValue);
  const { categories } = useGetCategories();

  const typeModal: typeModal = {
    create: (
      <CreateCategory state={categoryState} setState={setCategoryState} />
    ),
    update: (
      <UpdateCategory state={categoryState} setState={setCategoryState} />
    ),
    delete: (
      <DeleteCategory state={categoryState} setState={setCategoryState} />
    ),
    updateSubcategory: (
      <UpdateSubcategory state={categoryState} setState={setCategoryState} />
    ),
    deleteSubcategory: (
      <DeleteSubcategory state={categoryState} setState={setCategoryState} />
    ),
    createSubcategory: (
      <CreateSubcategory state={categoryState} setState={setCategoryState} />
    ),
  };

  return (
    <CategoryContainer>
      <S.TitleWithButton>
        <S.TitleSection>Categorias</S.TitleSection>
        <S.ButtonCreateItem
          onClick={() => {
            setCategoryState({
              type: "create",
              openModal: true,
            });
          }}
        >
          Adicionar
        </S.ButtonCreateItem>
      </S.TitleWithButton>
      <CategoryRow state={categories} setCategoryState={setCategoryState} />
      {typeModal[categoryState.type]}
    </CategoryContainer>
  );
};
