import { useDispatch } from "react-redux";
import { updateSubcategoryUseCase } from "../../../application/category/subcategory.usecase";
import { updateSubcategory } from "../../../infra/redux/slice/categorySlice";
import { Modal } from "../global/Modal";

export const UpdateSubcategory = ({ state, setState }) => {
  const {newSubcategory, _id, oldSubcategory } = state
  const dispatch = useDispatch()

  console.log(state)
  async function handleUpdateSubcategory(){
     const req = await updateSubcategoryUseCase(newSubcategory, _id, oldSubcategory)
  
     console.log(`deu certo`, req)
     if(req.status === 200){

      dispatch(updateSubcategory({
        _id: _id,
        newSubcategory: newSubcategory,
        oldSubcategory: oldSubcategory
      }))
      setState({ ...state, openModal: false })
     }
  }

  return (
    <Modal state={state} setState={setState}>
      <div>
        <input value={state.name} disabled={true} />
        <input value={state.newSubcategory} onChange={(e) => setState({ ...state, newSubcategory: e.target.value})} disabled={false} />
        <button onClick={handleUpdateSubcategory}>Update</button>
      </div>
    </Modal>
  );
};
