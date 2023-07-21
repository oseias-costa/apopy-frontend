import { useDispatch } from "react-redux";
import { removeSuplier } from "../../redux/slice/suplierSlice";
import { ItemProps } from "./SuplierList";
import { deleteSuplierUseCase } from "../../../application/suplier/delete-suplier.usecase";
import { Modal } from "../global/Modal";

export const DeleteSuplier = ({
  state,
  setState,
}: {
  state: { id: string; name: string; type: string; openModal: boolean };
  setState: () => void;
}) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const data = await deleteSuplierUseCase(state.id);

    if (data.status === 200) {
      dispatch(removeSuplier({ _id: state.id, name: state.name }));
      setState({ ...state, openModal: false });
    }
  };

  return (
    <Modal state={state} setState={setState}>
      <div>
        <h2>Excluir Suplier</h2>
        <div>
          <input
            type="text"
            value={state.name}
            disabled={state.type === "delete" ? true : false}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <button onClick={handleDelete}>Excluir</button>
        </div>
      </div>
    </Modal>
  );
};
