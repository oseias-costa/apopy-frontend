import { Modal } from "../global/Modal";
import { UpdateSuplier } from "./UpdateSuplier";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../../infra/redux/slice/suplierSlice";
import getSupliersUseCase from "../../../application/suplier/get-supliers.usecase";
import { openModal } from "../../../infra/redux/slice/modalSlice";

type ItemProps = {
  _id: string;
  name: string;
};

export const SuplierList = () => {
  const data = useSelector((state) => state.suplier.supliers);
  const dispatch = useDispatch()

  console.log('data', data)

   useEffect(() => {
    getSupliersUseCase().then(res => dispatch(fetchData(res.data.data.supliers)))
},[])

  const supliersList = data?.map((item: ItemProps) => {
    return (
      <div key={item._id}>
        <p>{item.name}</p>
        <button
          onClick={() => {
            // dispatchSuplier({ id: item._id, type: "update", name: item.name });
            dispatch(openModal());
          }}
        >
          Editar
        </button>
        <button>Delete</button>
      </div>
    );
  });

  return (
    <div>
      <h1>Supliers</h1>
      <div>{supliersList}</div>
      <Modal>
        <UpdateSuplier />
      </Modal>
    </div>
  );
};
