import { useReactiveVar } from "@apollo/client";
import { useState } from "react";
import { createSuplierUseCase } from "../../../application/suplier/add-suplier.usecase";
import { dispatchSuplier } from "../../../infra/context/suplier-reactiveVar";


export const AddNewSuplier = () => {
  const [ suplier, setSuplier ] = useState({
    id: '',
    name: '' 
  })
  const suplierState = useReactiveVar(dispatchSuplier)
  const [ data, error, loading ] = createSuplierUseCase()

  return (
    <div>
      <h2>Adicionar Suplier</h2>
      <div>
        <input
          type="text"
          value={suplierState.name}
          disabled={suplierState.type === "delete" ? true : false}
          onChange={(e) => setSuplier({ ...suplier, name: e.target.value })}
        />
        <button onClick={() => handlerMutationSuplier()}>{state.type}</button>
      </div>
    </div>
  );
};