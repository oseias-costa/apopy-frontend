import { useDispatch } from "react-redux";
import { removeSuplier } from "../../../redux/slice/suplierSlice";
import { Modal } from "../../../components/global/Modal";
import { SuplierComponentState, suplierInitialState, SuplierStateProps } from "../../../types/pages/suplier.types";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";
import { useState } from "react";
import { deleteSuplierUseCase } from "../../../../application/suplier.usecase";

export const DeleteSuplier: React.FC<SuplierStateProps> = ({state,setState}) => {
  const dispatch = useDispatch();
  const [ suplierComponentState, setSuplierComponentState ] = useState<SuplierComponentState>({
    isEmpty: false,
    loading: false
  })

  const handleDelete = async () => {
    setSuplierComponentState({ isEmpty: false, loading: true })
    const data = await deleteSuplierUseCase(state.id);

    if (data.status === 200) {
      dispatch(removeSuplier({ _id: state.id, name: state.name }));
      setState({ ...state, openModal: false });
      setSuplierComponentState({ isEmpty: false, loading: false })
    }
  };

  return (
    <Modal state={state} setState={setState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Excluir Fornecedor</S.TitleModalH2>
          <CloseIcon onClick={() => setState(suplierInitialState)} />
        </S.TitleModal>
        <S.ModalContentText>Clique abaixo para excluir um fornecedor, essa ação não pode ser desfeita.</S.ModalContentText>
          <S.InputModal
            type="text"
            value={state.name}
            disabled={true}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          <S.ButtonModal 
            disabled={suplierComponentState.loading}
            onClick={handleDelete}
          >
            { suplierComponentState.loading ? <SpinnerIcon /> : 'Excluir Fornecedor'}
          </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
};
