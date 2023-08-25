import { useDispatch } from "react-redux";
import { updateSubcategoryUseCase } from "../../../../application/subcategory.usecase";
import { updateSubcategory } from "../../../redux/slice/categorySlice";
import { Modal } from "../../../components/global/Modal";
import { CategoryStateProps, initialCategoryValue } from "../../../types/pages/category.types";
import { useEffect, useState } from "react";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";

export const UpdateSubcategory : React.FC<CategoryStateProps> = ({ state, setState }) => {
  const {newSubcategory, _id, oldSubcategory } = state
  const dispatch = useDispatch()
  const [ subcategoryState, setSubcategoryState ] = useState({
    isLoading: false,
    isEqual: false
  })  

  useEffect(() => {
    if(state.newSubcategory.length >= 3 && state.newSubcategory !== state.oldSubcategory){
      setSubcategoryState({ isLoading: false, isEqual: false })
    } else { 
      setSubcategoryState({ isLoading: false, isEqual: true })
    }
  },[state])

  async function handleUpdateSubcategory(){
    setSubcategoryState({ isLoading: true, isEqual: false })
     const req = await updateSubcategoryUseCase(newSubcategory, _id, oldSubcategory)
  
    if(req.status === 200){
      dispatch(updateSubcategory({
        _id: _id,
        newSubcategory: newSubcategory,
        oldSubcategory: oldSubcategory
      }))
      setState({ ...state, openModal: false })
      setSubcategoryState({ isLoading: false, isEqual: false })
     }
  }

  return (
    <Modal state={state} setState={setState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Editar Subcategoria</S.TitleModalH2>
          <CloseIcon onClick={() => setState(initialCategoryValue)} />
        </S.TitleModal>
        <S.ModalContentText>Edite a subcategoria {state.oldSubcategory} da categoria {state.name}.</S.ModalContentText>
        <S.InputModal value={state.name} disabled={true} />
        <S.InputModal 
          value={state.newSubcategory} 
          onChange={(e) => setState({ ...state, newSubcategory: e.target.value})} 
          disabled={false} 
        />
        <S.ButtonModal 
          onClick={handleUpdateSubcategory}
          disabled={subcategoryState.isEqual}
        >{ subcategoryState.isLoading ? <SpinnerIcon /> : 'Editar Subcategoria'}</S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
};
