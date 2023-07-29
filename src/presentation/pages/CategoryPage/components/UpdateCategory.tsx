import { useDispatch } from "react-redux";
import { updateCategoryUseCase } from "../../../../application/category/get-categories.usecase";
import { updateCategory } from "../../../redux/slice/categorySlice";
import { Modal } from "../../../components/global/Modal";

export function UpdateCategory({ state, setState }) {
  const dispatch = useDispatch();

  async function handleUpdateCategory() {
    const req = await updateCategoryUseCase(state._id, state.name);

    if (req.status === 200) {
      dispatch(
        updateCategory({
          _id: req.data.data.updateCategory._id,
          name: req.data.data.updateCategory.name,
        })
      );
      setState({ ...state, openModal: false });
    }
  }

  return (
    <Modal state={state} setState={setState}>
      <div>
        <h2 style={{ color: "black" }}>Update Categoria</h2>
        <input
          value={state?.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <button onClick={handleUpdateCategory}>Criar Categoria</button>
      </div>
    </Modal>
  );
}
