import { SetStateAction, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoriesUseCase } from "../../../application/category/get-categories.usecase"
import { fetchCategories } from "../../../infra/redux/slice/categorySlice"
import { openModal } from "../../../infra/redux/slice/modalSlice";
import { Modal } from "../global/Modal";
import { CategoryState, initialCategoryValue } from "./category.types";
import { CreateCategory } from "./CreateCategory";

  type typeModal = {
    [key: string]: React.ReactNode;
  };

export const CategoryList = () => {
    const [categoryState, setCategoryState] = useState<SetStateAction<CategoryState>>(initialCategoryValue)
    const dispatch = useDispatch()
    const categories = getCategoriesUseCase()
    const state = useSelector((state) => state.category.categories)

    const typeModal: typeModal = {
        create: <CreateCategory state={categoryState} setState={setCategoryState} />,
        // create: <CreateSuplier state={suplierState} setState={setSuplierState} />,
        // delete: <DeleteSuplier state={suplierState} setState={setSuplierState} />,
      };

    useEffect(() => {
        categories.then(res => dispatch(fetchCategories(res.data.data.categories)))
    },[])

    const listCategories = state.map((item: {_id: string, name: string, subcategory: string[]}) => {
        return (
            <div key={item._id}>
                <p>{item.name}</p>
                <button onClick={() => null}>Editar</button>
                <button onClick={() => null}>Excluir</button>
            </div>
        )}
    )

    return(
        <div>
            <Modal children={typeModal[categoryState.type]} />
            <button onClick={() => {
                dispatch(openModal())
            }}>Criar Categoria</button>
            <h2>Categorias</h2>
            {listCategories}
        </div>
    )
}