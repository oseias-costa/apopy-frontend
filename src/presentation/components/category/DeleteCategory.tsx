import { useDispatch } from "react-redux";
import { updateCategoryUseCase } from "../../../application/category/get-categories.usecase";
import { updateCategory } from "../../../infra/redux/slice/categorySlice";
import { Modal } from "../global/Modal";

export function DeleteCategory({ state, setState }) {
  const dispatch = useDispatch();

  async function handleDeleteCategory() {
    const req = await updateCategoryUseCase(state._id, state.name);

    if (req.status === 200) {
      console.log(req);
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
        <h2 style={{ color: "black" }}>Delete Categoria</h2>
        <input
          value={state?.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <button onClick={handleDeleteCategory}>Delete Categoria</button>
      </div>
    </Modal>
  );
}
