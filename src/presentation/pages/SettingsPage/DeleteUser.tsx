import { SetStateAction, useEffect, useState } from "react";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { InputModalWithLabel } from "../../components/global/Input/InputModalWithLabel";
import { Modal } from "../../components/global/Modal";
import * as S from "../../styles/GlobalStyles/modal.style";
import { ButtonSettings } from "../../styles/PageStyles/SettingsStyles/settings.style";
import { DeleteUserState } from "./Settings"

interface DeleteUserProps {
    state: DeleteUserState;
    setState: React.Dispatch<SetStateAction<DeleteUserState>>
}

export const DeleteUser: React.FC<DeleteUserProps> = ({ state, setState }) => {
    const [ deleteUserState, setDeleteUserState ] = useState({
        emailIsEqual: false,
        email: ''
    })

    useEffect(() => {
        deleteUserState.email === state.user.email 
        ? setDeleteUserState({...deleteUserState, emailIsEqual: true})
        : null 
    },[deleteUserState])

    return(
        <Modal state={state} setState={setState}>
            <S.ModalContent>
            <S.TitleModal>
          <S.TitleModalH2>Excluir minha Conta</S.TitleModalH2>
          <CloseIcon onClick={() => setState({...state, openModal: false})} />
        </S.TitleModal>
        <S.ModalContentText>Para excluir sua conta, digite seu email abaixo e clique em excluir. Todos seus dados serão excluídos, essa ação não poderá ser desfeita.</S.ModalContentText>
        <InputModalWithLabel 
            onChange={(e) =>
                setDeleteUserState({...deleteUserState, email: e.target.value})} 
        />
            <ButtonSettings 
                    disabled={deleteUserState.emailIsEqual} 
                    onClick={() => setState({...state, openModal: true})}
                >
                    Excluir Conta
                </ButtonSettings>
            </S.ModalContent>
        </Modal>
    )
}