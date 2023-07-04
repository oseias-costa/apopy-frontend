import { useDispatch } from "react-redux";
import { closeModal } from "../../../infra/redux/slice/modalSlice";
import { removeSuplier } from "../../../infra/redux/slice/suplierSlice";
import { ItemProps } from "./SuplierList";
import { deleteSuplierUseCase } from "../../../application/suplier/delete-suplier.usecase";

export const DeleteSuplier = ({
  state,
  setState,
}: {
  state: { id: string; name: string; type: string };
  setState: (value: ItemProps) => void;
}) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const data = await deleteSuplierUseCase(state.id);

    if (data.status === 200) {
      dispatch(removeSuplier({ _id: state.id, name: state.name }));
      dispatch(closeModal());
    }
  };

  return (
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
  );
};
