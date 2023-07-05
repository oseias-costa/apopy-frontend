import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCategoriesUseCase } from "../../../application/category/get-categories.usecase";
import {
  fetchCategories,
  updateCategory,
} from "../../../infra/redux/slice/categorySlice";
import { openModal } from "../../../infra/redux/slice/modalSlice";
import { Modal } from "../global/Modal";
import { CategoryState, initialCategoryValue } from "./category.types";
import { CreateCategory } from "./CreateCategory";
import { UpdateCategory } from "./UpdateCategory";

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
    // delete: <DeleteSuplier state={suplierState} setState={setSuplierState} />,
  };

  useEffect(() => {
    categories.then((res) =>
      dispatch(fetchCategories(res.data.data.categories))
    );
  }, []);

  const listCategories = state.map(
    (item: { _id: string; name: string; subcategory: string[] }) => {
      return (
        <CategoryRow key={item?._id} style={{ display: "flex" }}>
          <p style={{ color: "blue", fontWeight: "600" }}>{item?.name}</p>
          <button
            onClick={() => {
              setCategoryState({
                _id: item._id,
                name: item.name,
                type: "update",
              });
              dispatch(openModal());
            }}
          >
            Editar
          </button>
          <button onClick={() => null}>Excluir</button>
        </CategoryRow>
      );
    }
  );

  return (
    <div>
      <Modal children={typeModal[categoryState.type]} />
      <button
        onClick={() => {
          dispatch(openModal());
        }}
      >
        Criar Categoria
      </button>
      <h2>Categorias</h2>
      {listCategories}
    </div>
  );
};

const CategoryRow = styled.div`
  display: flex;
`;
