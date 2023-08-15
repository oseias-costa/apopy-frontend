import { useDispatch } from "react-redux";
import { createCategoryUseCase } from "../../../../application/category/get-categories.usecase";
import { createCategory } from "../../../redux/slice/categorySlice";
import { Modal } from "../../../components/global/Modal";
import { ModalContent, TitleModal } from "../../../styles/PageStyles/CategoryStyles/category.styles";
import { CloseIcon } from "../../../assets/icons/CloseIcon";

export function CreateCategory({ state, setState }) {
  const dispatch = useDispatch();

  async function handleCreateCategory() {
    const req = await createCategoryUseCase(state.name);

    if (req.status === 200) {
      dispatch(createCategory(req.data.data.createCategory));
      setState({ ...state, openModal: false });
    }
  }

  return (
    <Modal state={state} setState={setState}>
      <ModalContent>
        <TitleModal>
          <h2>Criar Categoria</h2>
          <CloseIcon onClick={() => setState({...state, openModal: false})} />
        </TitleModal>
        <input
          value={state?.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <button onClick={handleCreateCategory}>Criar Categoria</button>
      </ModalContent>
    </Modal>
  );
}
