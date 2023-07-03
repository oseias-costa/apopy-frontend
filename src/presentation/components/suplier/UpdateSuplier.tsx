import { useReactiveVar } from "@apollo/client";
import { updateSuplierUseCase } from "../../../application/suplier/update-suplier.usecase";
import { dispatchSuplier } from "../../../infra/context/suplier-reactiveVar";

export const UpdateSuplier = () => {
const suplierState = useReactiveVar(dispatchSuplier)

async function handleUpdate(){
    const [ data, error, loading ] = await updateSuplierUseCase(suplierState.id, suplierState.name)
    console.log(`data ${data}
    error ${error}
    loading ${loading}`)
    return [ data, error, loading]

    }

  return (
    <div>
      <h2>Editar Suplier</h2>
      <div>
        <input
          type="text"
          value={suplierState.name}
          disabled={suplierState.type === "delete" ? true : false}
          onChange={(e) => dispatchSuplier({ ...suplierState, name: e.target.value })}
        />
        <button onClick={async () => await updateSuplierUseCase(suplierState.id, suplierState.name)}>Editar</button>
      </div>
    </div>
  );
};