import { useDispatch } from "react-redux";
import { deleteCategoryUseCase } from "../../../application/category/get-categories.usecase";
import { deleteCategory } from "../../redux/slice/categorySlice";
import { Modal } from "../global/Modal";

export function DeleteCategory({ state, setState }) {
  const dispatch = useDispatch();

  async function handleDeleteCategory() {
    const req = await deleteCategoryUseCase(state._id);

    if (req.status === 200) {
      dispatch(deleteCategory({ _id: req.data.data.deleteCategory._id }));
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
