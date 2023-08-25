import { useDispatch } from "react-redux";
import { deleteSubcategoryUseCase } from "../../../../application/subcategory.usecase";
import { deleteSubcategory } from "../../../redux/slice/categorySlice";
import { Modal } from "../../../components/global/Modal";
import { CategoryStateProps, initialCategoryValue } from "../../../types/pages/category.types";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { useState } from "react";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";

export const DeleteSubcategory: React.FC<CategoryStateProps> = ({ state, setState }) => {
  const { _id, oldSubcategory } = state
  const dispatch = useDispatch()
  const [ subcategoryState, setSubcategoryState ] = useState({
    isLoading: false,
    isEmpty: false
  })  

  async function handleDeleteSubcategory(){
    const req = await deleteSubcategoryUseCase(_id, oldSubcategory)

    if(req.status === 200){
      setSubcategoryState({isLoading: true, isEmpty: false })
      dispatch(deleteSubcategory({
        _id: _id,
        oldSubcategory: oldSubcategory
      }))
      setState({ ...state, openModal: false})
      setSubcategoryState({isLoading: false, isEmpty: false })
    }
  }

  return (
    <Modal state={state} setState={setState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Excluir Subcategoria</S.TitleModalH2>
          <CloseIcon onClick={() => setState(initialCategoryValue)} />
        </S.TitleModal>
        <S.ModalContentText>Para Excluir uma subcategoria, clique no botão excluir. Essa ação não poderá ser desfeita.</S.ModalContentText>
        <S.InputModal value={state.name} disabled={true} />
        <S.InputModal value={state.oldSubcategory} disabled={true} />
        <S.ButtonModal 
          disabled={subcategoryState.isLoading}
          onClick={handleDeleteSubcategory}
        >{ subcategoryState.isLoading ? <SpinnerIcon /> : 'Excluir' }</S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
};
