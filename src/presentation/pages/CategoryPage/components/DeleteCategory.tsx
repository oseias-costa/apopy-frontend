import { useDispatch } from "react-redux";
import { deleteCategoryUseCase } from "../../../../application/categories.usecase";
import { deleteCategory } from "../../../redux/slice/categorySlice";
import { Modal } from "../../Layout/components/Modal";
import { CategoryStateProps, initialCategoryValue } from "../../../types/pages/category.types";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { useState } from "react";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";

export const DeleteCategory : React.FC<CategoryStateProps> = ({ state, setState }) => {
  const dispatch = useDispatch();
  const [ isLoading, setLoading ] = useState<boolean>(false)

  async function handleDeleteCategory() {
    setLoading(true)
    const req = await deleteCategoryUseCase(state._id);

    if (req.status === 200) {
      dispatch(deleteCategory({ _id: req.data.data.deleteCategory._id }));
      setState({ ...state, openModal: false });
      setLoading(false)
    }
  }

  return (
    <Modal state={state} setState={setState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Exluir Categoria</S.TitleModalH2>
          <CloseIcon onClick={() => setState(initialCategoryValue)} />
        </S.TitleModal>
        <S.ModalContentText>Para Excluir uma categoria, clique no botão excluir. Essa ação não poderá ser desfeita.</S.ModalContentText>
        <S.InputModal
          value={state?.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          disabled={true}
        />
        <S.ButtonModal disabled={isLoading} onClick={handleDeleteCategory}>
        { isLoading ? <SpinnerIcon /> : 'Excluir Categoria' }
          </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
}
