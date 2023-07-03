import { useReactiveVar } from "@apollo/client";
import updateSuplierUseCase from "../../../application/suplier/update-suplier.usecase";
import { dispatchSuplier } from "../../../infra/context/suplier-reactiveVar";

export const UpdateSuplier = () => {
  const suplierState = useReactiveVar(dispatchSuplier);

  const handleUpdate = async () => {
    const data = await updateSuplierUseCase(suplierState.id, suplierState.name);

    return console.log(`editado`, data);
  };

  return (
    <div>
      <h2>Editar Suplier</h2>
      <div>
        <input
          type="text"
          value={suplierState.name}
          disabled={suplierState.type === "delete" ? true : false}
          onChange={(e) =>
            dispatchSuplier({ ...suplierState, name: e.target.value })
          }
        />
        <button onClick={handleUpdate}>Editar</button>
      </div>
    </div>
  );
};
