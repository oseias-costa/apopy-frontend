import { useDispatch, useSelector } from "react-redux";
import { updateSuplier } from "../../../redux/slice/suplierSlice";
import { Modal } from "../../Layout/components/Modal";
import { useEffect, useState } from "react";
import { SuplierComponentState, suplierInitialState, SuplierStateProps } from "../../../types/pages/suplier.types";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { RootState } from "../../../redux/store";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";
import { updateSuplierUseCase } from "../../../../application/suplier.usecase";

export const UpdateSuplier: React.FC<SuplierStateProps> = ({ state, setState }) => {
  const dispatch = useDispatch();
  const suplierItem = useSelector((state: RootState) => state.suplier.supliers)
  .filter(suplier => suplier._id === state.id)[0]
  const [ suplierComponentState, setSuplierComponentState ] = useState<SuplierComponentState>({
    isEmpty: false,
    loading: false
  })

  useEffect(() => {
    state.name?.length >= 3 && state.name !== suplierItem.name
    ? setSuplierComponentState({ loading: false,  isEmpty: false}) 
    : setSuplierComponentState({ loading: false,  isEmpty: true }) 
  } ,[state])

  const handleUpdate = async () => {
    setSuplierComponentState({ loading: true,  isEmpty: true})
    const data = await updateSuplierUseCase(state.id, state.name);

    if (data.status === 200) {
      dispatch(updateSuplier({ _id: state.id, name: state.name }));
      setState({ ...state, openModal: false });
      setSuplierComponentState({ loading: false,  isEmpty: false})
    }
  };

  return (
    <Modal state={state} setState={setState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Editar Suplier</S.TitleModalH2>
          <CloseIcon onClick={() => setState(suplierInitialState)} />
        </S.TitleModal>
        <S.ModalContentText>Faça as alterações e clique abaixo para editar um fornecedor.</S.ModalContentText>
          <S.InputModal
            type="text"
            value={state.name}
            disabled={state.type === "delete" ? true : false}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          <S.ButtonModal 
            disabled={suplierComponentState.isEmpty}
            onClick={handleUpdate}
          >{ suplierComponentState.loading ? <SpinnerIcon /> : 'Editar' }
          </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
};
