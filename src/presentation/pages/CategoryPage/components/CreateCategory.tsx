import { useDispatch } from "react-redux";
import { createCategoryUseCase } from "../../../../application/category/get-categories.usecase";
import { createCategory } from "../../../redux/slice/categorySlice";
import { Modal } from "../../../components/global/Modal";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { useEffect, useState } from "react";
import { CategoryStateProps, CreateCategoryState, initialCategoryValue } from "./category.types";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";
import * as S from "../../../styles/GlobalStyles/modal.style";

export const CreateCategory: React.FC<CategoryStateProps> = ({ state, setState }) => {
  const dispatch = useDispatch();
  const [ createCategoryState, setCreateCategoryState ] = useState<CreateCategoryState>({
    isEmpty: false,
    loading: false
  })

  useEffect(() => {
    state.name?.length >= 3 
    ? setCreateCategoryState({...createCategoryState,  isEmpty: false}) 
    : setCreateCategoryState({ ...createCategoryState,  isEmpty: true }) 
  } ,[state])
  
  async function handleCreateCategory() {
    setCreateCategoryState({ isEmpty: true, loading: true })
    const req = await createCategoryUseCase(state.name);

    if (req.status === 200) {
      dispatch(createCategory(req.data.data.createCategory));
      setState(initialCategoryValue);
      setCreateCategoryState({ isEmpty: false, loading: false })
    }
  }

  return (
    <Modal state={state} setState={setState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Criar Categoria</S.TitleModalH2>
          <CloseIcon onClick={() => setState(initialCategoryValue)} />
        </S.TitleModal>
        <S.ModalContentText>Crie uma nova categoria, exemplo: Poltrona, Estofado...</S.ModalContentText>
        <S.InputModal
          placeholder="Digite aqui a nova Categoria"
          error={false}
          value={state?.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <S.ButtonModal 
          onClick={handleCreateCategory}
          disabled={createCategoryState.isEmpty}
        >
          {createCategoryState.loading ?  <SpinnerIcon /> : 'Criar Categoria' }
        </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
}
