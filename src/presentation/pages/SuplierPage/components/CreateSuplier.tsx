import { useDispatch } from "react-redux";
import { createSuplierUseCase } from "../../../application/suplier/add-suplier.usecase";
import { createSuplier } from "../../redux/slice/suplierSlice";
import { Modal } from "../global/Modal";

export const CreateSuplier = ({
  state,
  setState,
}: {
  state: { id: string; name: string; type: string; openModal: boolean };
  setState: void;
}) => {
  const dispatch = useDispatch();

  const handleCreate = async () => {
    const data = await createSuplierUseCase(state.name);

    if (data.status === 200) {
      dispatch(
        createSuplier({
          name: state.name,
          _id: data.data.createSuplier?._id
        })
      );
      setState({ ...state, openModal: false });
    }
  };

  return (
    <Modal state={state} setState={setState}>
      <div>
        <h2>Criar Suplier</h2>
        <div>
          <input
            type="text"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <button onClick={handleCreate}>Editar</button>
        </div>
      </div>
    </Modal>
  );
};
