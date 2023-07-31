import updateSuplierUseCase from "../../../../application/suplier/update-suplier.usecase";
import { useDispatch } from "react-redux";
import { updateSuplier } from "../../../redux/slice/suplierSlice";
import { ItemProps } from "./SuplierList";
import { Modal } from "../../../components/global/Modal";

export const UpdateSuplier = ({
  state,
  setState,
}: {
  state: { id: string; name: string; type: string; openModal: boolean };
  setState: (value: ItemProps) => void;
}) => {
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    const data = await updateSuplierUseCase(state.id, state.name);

    if (data.status === 200) {
      dispatch(updateSuplier({ _id: state.id, name: state.name }));
      setState({ ...state, openModal: false });
    }
  };

  return (
    <Modal state={state} setState={setState}>
      <div>
        <h2>Editar Suplier</h2>
        <div>
          <input
            type="text"
            value={state.name}
            disabled={state.type === "delete" ? true : false}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <button onClick={handleUpdate}>Editar</button>
        </div>
      </div>
    </Modal>
  );
};
