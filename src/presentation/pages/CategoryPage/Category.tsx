import { useState } from "react";
import { CategoryContainer } from "../../styles/PageStyles/CategoryStyles/category.styles";
import { CategoryRow } from "./components/CategoryRow";
import * as S from "../../styles/GlobalStyles/titleWithButton.style";

import { CategoryState, initialCategoryValue } from "../../types/pages/category.types";
import { useGetCategories } from "../../hooks/useGetCategories";
import { LoadingComponent } from "../Layout/components/Loading/LoadingComponent";
import { CategoryCallModal } from "./components/CategoryCallModal";

export const Category = () => {
  const [categoryState, setCategoryState] = useState<CategoryState>(initialCategoryValue);
  const { categories, loading } = useGetCategories();

  return (
    <CategoryContainer>
      <S.TitleWithButton>
        <S.TitleSection>Categorias</S.TitleSection>
        <S.ButtonCreateItem
          onClick={() => {
            setCategoryState({
              ...initialCategoryValue,
              type: "create",
              openModal: true,
            });
          }}
        >
          Adicionar
        </S.ButtonCreateItem>
      </S.TitleWithButton>
      { loading ? (
        <LoadingComponent />
      ):(
        <CategoryRow state={categories} setCategoryState={setCategoryState} />
      )}
      <CategoryCallModal categoryState={categoryState} setCategoryState={setCategoryState} />
    </CategoryContainer>
  );
};
