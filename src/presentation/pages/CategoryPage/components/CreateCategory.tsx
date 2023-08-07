import { useDispatch } from "react-redux";
import { createCategoryUseCase } from "../../../../application/category/get-categories.usecase";
import { createCategory } from "../../../redux/slice/categorySlice";
import { Modal } from "../../../components/global/Modal";

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
      <div>
        <h2 style={{ color: "black" }}>Criar Categoria</h2>
        <input
          value={state?.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <button onClick={handleCreateCategory}>Criar Categoria</button>
      </div>
    </Modal>
  );
}