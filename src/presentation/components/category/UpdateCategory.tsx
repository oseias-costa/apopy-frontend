import { useDispatch } from "react-redux";
import { updateCategoryUseCase } from "../../../application/category/get-categories.usecase";
import { updateCategory } from "../../../infra/redux/slice/categorySlice";
import { closeModal } from "../../../infra/redux/slice/modalSlice";

export function UpdateCategory({ state, setState }) {
  const dispatch = useDispatch();

  async function handleUpdateCategory() {
    const req = await updateCategoryUseCase(state._id, state.name);

    if (req.status === 200) {
      console.log(req);
      dispatch(updateCategory(req.data.data.updateCategory));
      dispatch(closeModal());
    }
  }

  return (
    <div>
      <h2 style={{ color: "black" }}>Update Categoria</h2>
      <input
        value={state?.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <button onClick={handleUpdateCategory}>Criar Categoria</button>
    </div>
  );
}
