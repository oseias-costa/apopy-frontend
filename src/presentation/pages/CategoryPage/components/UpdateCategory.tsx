import { useDispatch, useSelector } from "react-redux";
import { updateCategoryUseCase } from "../../../../application/category/get-categories.usecase";
import { updateCategory } from "../../../redux/slice/categorySlice";
import { Modal } from "../../../components/global/Modal";
import { CategoryStateProps, initialCategoryValue } from "./category.types";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { useEffect, useState } from "react";
import { RootState } from "../../../redux/store";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";

interface UpdateCategoryState{
  dataIsDiferent: boolean;
  isLoading: boolean
}

export const UpdateCategory: React.FC<CategoryStateProps> = ({ state, setState }) => {
  const dispatch = useDispatch();
  const [ updateCategoryState, setUpdateCategoryState ] = useState<UpdateCategoryState>({
    dataIsDiferent: false,
    isLoading: false
  })
  const categoryStateItem = useSelector((state: RootState) => state.category.categories)
    .filter(item => item._id === state._id)[0]

  useEffect(() => {
    if(state.name !== categoryStateItem.name){
      setUpdateCategoryState({isLoading: false, dataIsDiferent: false})
    } else {
      setUpdateCategoryState({isLoading: false, dataIsDiferent: true})
    }
  }, [state])

  async function handleUpdateCategory() {
    setUpdateCategoryState({isLoading: true, dataIsDiferent: true})
    const req = await updateCategoryUseCase(state._id, state.name);

    if (req.status === 200) {
      dispatch(
        updateCategory({
          _id: req.data.data.updateCategory._id,
          name: req.data.data.updateCategory.name,
        })
      );
      setState({ ...state, openModal: false });
      setUpdateCategoryState({isLoading: false, dataIsDiferent: false})
    }
  }

  return (
    <Modal state={state} setState={setState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Editar Categoria</S.TitleModalH2>
          <CloseIcon onClick={() => setState(initialCategoryValue)} />
        </S.TitleModal>
        <S.ModalContentText>Para editar uma categoria, faça as alterações e clique em Editar.</S.ModalContentText>
        <S.InputModal
          value={state?.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        <S.ButtonModal 
          disabled={updateCategoryState.dataIsDiferent} 
          onClick={handleUpdateCategory}
        >
          { updateCategoryState.isLoading ? <SpinnerIcon /> : 'Editar'}
        </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
}
