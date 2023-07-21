import { useDispatch } from "react-redux";
import { deleteSubcategoryUseCase } from "../../../application/category/subcategory.usecase";
import { deleteCategory, deleteSubcategory } from "../../redux/slice/categorySlice";
import { Modal } from "../global/Modal";

export const DeleteSubcategory = ({ state, setState }) => {
  const { _id, oldSubcategory } = state
  const dispatch = useDispatch()

  async function handleDeleteSubcategory(){
    const req = await deleteSubcategoryUseCase(_id, oldSubcategory)

    if(req.status === 200){
      dispatch(deleteSubcategory({
        _id: _id,
        oldSubcategory: oldSubcategory
      }))
      setState({ ...state, openModal: false})
    }
  }

  return (
    <Modal state={state} setState={setState}>
      <div>
        <h2>Delete Subcategory</h2>
        <input value={state.name} disabled={true} />
        <input value={state.oldSubcategory} disabled={true} />
        <button onClick={handleDeleteSubcategory}>Delete</button>
      </div>
    </Modal>
  );
};
