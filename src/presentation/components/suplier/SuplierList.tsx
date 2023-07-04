import { Modal } from "../global/Modal";
import { UpdateSuplier } from "./UpdateSuplier";
import { CreateSuplier } from "./CreateSuplier";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../../infra/redux/slice/suplierSlice";
import getSupliersUseCase from "../../../application/suplier/get-supliers.usecase";
import { openModal } from "../../../infra/redux/slice/modalSlice";

export type ItemProps = {
  id: string;
  name: string;
  type: string;
};

type typeModal = {
  [key: string]: React.ReactNode;
};

export const SuplierList = () => {
  const [suplierState, setSuplierState] = useState<
    React.SetStateAction<ItemProps>
  >({
    id: "",
    name: "",
    type: "",
  });
  const data = useSelector((state) => state.suplier.supliers);
  const dispatch = useDispatch();

  const typeModal: typeModal = {
    update: <UpdateSuplier state={suplierState} setState={setSuplierState} />,
    create: <CreateSuplier state={suplierState} setState={setSuplierState} />,
  };

  useEffect(() => {
    getSupliersUseCase().then((res) =>
      dispatch(fetchData(res.data.data.supliers))
    );
  }, []);

  const supliersList = data?.map((item) => {
    return (
      <div key={item._id}>
        <p>{item.name}</p>
        <button
          onClick={() => {
            setSuplierState({ id: item._id, name: item.name, type: "update" });
            dispatch(openModal());
          }}
        >
          Editar
        </button>
        <button
         onClick={() => {
            setSuplierState({ id: item._id, name: item.name, type: "delete" });
            dispatch(openModal());
          }}>Delete</button>
      </div>
    );
  });

  return (
    <div>
      <h1>Supliers</h1>
      <button
        onClick={() => {
          setSuplierState({ id: "", name: "", type: "create" });
          return dispatch(openModal());
        }}
      >
        Abrir
      </button>
      <div>{supliersList}</div>
      <Modal children={typeModal[suplierState.type]} />
    </div>
  );
};
