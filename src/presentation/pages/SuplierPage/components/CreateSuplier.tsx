import { useDispatch } from "react-redux";
import { createSuplierUseCase } from "../../../../application/suplier/add-suplier.usecase";
import { createSuplier } from "../../../redux/slice/suplierSlice";
import { Modal } from "../../../components/global/Modal";
import { SuplierComponentState, suplierInitialState, SuplierStateProps } from "../../../types/pages/suplier.types";
import { useEffect, useState } from "react";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";

export const CreateSuplier: React.FC<SuplierStateProps> = ({ state, setState }) => {
  const dispatch = useDispatch();
  const [ suplierComponentState, setSuplierComponentState ] = useState<SuplierComponentState>({
    isEmpty: false,
    loading: false
  })

  useEffect(() => {
    state.name?.length >= 3 
    ? setSuplierComponentState({ loading: false,  isEmpty: false}) 
    : setSuplierComponentState({ loading: false,  isEmpty: true }) 
  } ,[state])

  const handleCreate = async () => {
    setSuplierComponentState({ loading: true,  isEmpty: true})
    const data = await createSuplierUseCase(state.name);

    if (data.status === 200) {
      dispatch(
        createSuplier({
          name: state.name,
          _id: data.data.createSuplier?._id,
        })
      );
      setState({ ...state, openModal: false });
      setSuplierComponentState({ loading: false,  isEmpty: false})
    }
  };

  return (
    <Modal state={state} setState={setState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Inserir Fornecedor</S.TitleModalH2>
          <CloseIcon onClick={() => setState(suplierInitialState)} />
        </S.TitleModal>
        <S.ModalContentText>Crie um novo fornecedor ou a marca do seu produto.</S.ModalContentText>
          <S.InputModal
            type="text"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          <S.ButtonModal 
            disabled={suplierComponentState.isEmpty}
            onClick={handleCreate}
          >
            { suplierComponentState.loading ? <SpinnerIcon /> : 'Criar Fornecedor' }
          </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
};
