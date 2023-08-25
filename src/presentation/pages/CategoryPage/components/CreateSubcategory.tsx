import { useDispatch } from "react-redux"
import { createSubcategoryUseCase } from "../../../../application/subcategory.usecase"
import { createSubcategory } from "../../../redux/slice/categorySlice"
import { Modal } from "../../../components/global/Modal"
import { CategoryStateProps, initialCategoryValue } from "../../../types/pages/category.types"
import * as S from "../../../styles/GlobalStyles/modal.style"
import { CloseIcon } from "../../../assets/icons/CloseIcon"
import { useEffect, useState } from "react"
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon"

export const CreateSubcategory: React.FC<CategoryStateProps> = ({state, setState}) => {
    const { _id, name, newSubcategory } = state
    const dispatch = useDispatch()
    const [ subcategoryState, setSubcategoryState ] = useState({
        isLoading: false,
        isEmpty: false
    })

    useEffect(() => {
        if (newSubcategory && newSubcategory?.length >= 3) {
            setSubcategoryState({ isLoading: false, isEmpty: true })
        } else {
            setSubcategoryState({ isLoading: false, isEmpty: false })
        }
    },[state])

    async function handleCreateSubcategory(){
        setSubcategoryState({ isLoading: true, isEmpty: false })
        const req = await createSubcategoryUseCase(_id, newSubcategory)

        if(req.status === 200){
            dispatch(createSubcategory({
                _id: _id,
                newSubcategory: newSubcategory,
            }))
            setState({...state, openModal: false})
            setSubcategoryState({ isLoading: true, isEmpty: false })
        }
    }

    return(
        <Modal state={state} setState={setState}>
            <S.ModalContent>
                <S.TitleModal>
                    <S.TitleModalH2>Criar Subcategoria</S.TitleModalH2>
                    <CloseIcon onClick={() => setState(initialCategoryValue)} />
                </S.TitleModal>
                <S.ModalContentText>Crie uma nova subcategoria para a categoria {state.name}.</S.ModalContentText>
                <S.InputModal value={name} disabled={true} />
                <S.InputModal 
                    value={newSubcategory} 
                    onChange={(e) => setState({...state, newSubcategory: e.target.value})} 
                    disabled={false} 
                />
                <S.ButtonModal 
                    disabled={!subcategoryState.isEmpty} 
                    onClick={handleCreateSubcategory}
                >{ subcategoryState.isLoading ? <SpinnerIcon /> : 'Criar Subcategoria' }</S.ButtonModal>
            </S.ModalContent>
        </Modal>
    )
}