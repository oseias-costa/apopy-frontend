import { useEffect, useState } from "react";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { Modal } from "../../components/global/Modal";
import * as S from "../../styles/GlobalStyles/modal.style";
import {
  ButtonSettings,
  InputSettings,
} from "../../styles/PageStyles/SettingsStyles/settings.style";
import { deleteMyAccountUseCase } from "../../../application/acess/register.usecase";
import { useDispatch } from "react-redux";
import { fetchUser, initialUserState } from "../../redux/slice/userSlice";
import { DeleteUserProps } from "../../types/pages/settings.types";

export const DeleteUser: React.FC<DeleteUserProps> = ({ state, setState }) => {
  const dispatch = useDispatch();
  const [deleteUserState, setDeleteUserState] = useState({
    emailIsEqual: false,
    email: "",
  });

  useEffect(() => {
    deleteUserState.email === state.user.email
      ? setDeleteUserState({ ...deleteUserState, emailIsEqual: true })
      : setDeleteUserState({ ...deleteUserState, emailIsEqual: false });
  }, [deleteUserState.email]);

  async function handleDeleteUser() {
    const req = await deleteMyAccountUseCase();

    if (req.status === 200) {
      dispatch(fetchUser(initialUserState.user));
      localStorage.removeItem("apopyToken");
    }
  }

  return (
    <Modal state={state} setState={setState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Excluir minha Conta</S.TitleModalH2>
          <CloseIcon onClick={() => setState({ ...state, openModal: false })} />
        </S.TitleModal>
        <S.ModalContentText>
          Seus dados serão excluídos, essa ação não poderá ser desfeita.
        </S.ModalContentText>
        <InputSettings
          label="Coloque seu email"
          placeholder="Digite"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDeleteUserState({ ...deleteUserState, email: e.target.value })
          }
        />
        <ButtonSettings
          disabled={!deleteUserState.emailIsEqual}
          onClick={handleDeleteUser}
        >
          Quero exluir minha conta
        </ButtonSettings>
      </S.ModalContent>
    </Modal>
  );
};
