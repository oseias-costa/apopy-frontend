import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCategoriesUseCase } from "../../../application/category/get-categories.usecase";
import { fetchCategories } from "../../../infra/redux/slice/categorySlice";
import { CategoryState, initialCategoryValue } from "./category.types";
import { CreateCategory } from "./CreateCategory";
import { UpdateCategory } from "./UpdateCategory";
import { DeleteCategory } from "./DeleteCategory";
import { UpdateSubcategory } from "./UpdateSupcategory";

type typeModal = {
  [key: string]: React.ReactNode;
};

export const CategoryList = () => {
  const [categoryState, setCategoryState] =
    useState<SetStateAction<CategoryState>>(initialCategoryValue);
  const dispatch = useDispatch();
  const categories = getCategoriesUseCase();
  const state = useSelector((state) => state.category.categories);

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
  };

  console.log(state);

  useEffect(() => {
    categories.then((res) =>
      dispatch(fetchCategories(res.data.data.categories))
    );
  }, []);

  const listCategories = state.map(
    (item: { _id: string; name: string; subcategory: string[] }) => {
      return (
        <>
          <CategoryRow key={item?._id} style={{ display: "flex" }}>
            <p style={{ color: "blue", fontWeight: "600" }}>{item?.name}</p>
            <button
              onClick={() => {
                setCategoryState({
                  _id: item._id,
                  name: item.name,
                  type: "update",
                  openModal: true,
                });
              }}
            >
              Editar
            </button>
            <button
              onClick={() => {
                setCategoryState({
                  _id: item._id,
                  name: item.name,
                  type: "delete",
                  openModal: true,
                });
              }}
            >
              Excluir
            </button>
          </CategoryRow>
          {item.subcategory?.map((item) => {
            return (
              <div key={item} style={{ display: "flex" }}>
                <p>{item}</p>
                <button>Update</button>
              </div>
            );
          })}
        </>
      );
    }
  );

  return (
    <div>
      <button
        onClick={() => {
          setCategoryState({ ...state, type: "create", openModal: true });
        }}
      >
        Criar Categoria
      </button>
      <h2>Categorias</h2>
      {listCategories}
      {typeModal[categoryState.type]}
    </div>
  );
};

const CategoryRow = styled.div`
  display: flex;
`;
