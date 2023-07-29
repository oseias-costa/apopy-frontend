import { useDispatch } from "react-redux"
import { createSubcategoryUseCase } from "../../../../application/category/subcategory.usecase"
import { createSubcategory } from "../../../redux/slice/categorySlice"
import { Modal } from "../../../components/global/Modal"


export const CreateSubcategory = ({state, setState}) => {
    const { _id, name, newSubcategory } = state
    const dispatch = useDispatch()

    async function handleCreateSubcategory(){
        const req = await createSubcategoryUseCase(_id, newSubcategory)

        if(req.status === 200){
            dispatch(createSubcategory({
                _id: _id,
                newSubcategory: newSubcategory,
            }))
            setState({...state, openModal: false})
        }
    }

    return(
        <Modal state={state} setState={setState}>
            <div>
                <h2>Create Subcategory</h2>
                <input value={name} disabled={true} />
                <input 
                    value={newSubcategory} 
                    onChange={(e) => setState({...state, newSubcategory: e.target.value})} 
                    disabled={false} 
                />
                <button onClick={handleCreateSubcategory}>Criar</button>
            </div>
        </Modal>
    )
}