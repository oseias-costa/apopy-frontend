import { Modal } from "../global/Modal";
import { UpdateSuplier } from "./UpdateSuplier";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  getSupliers,
  initialState,
} from "../../../infra/redux/slice/suplierSlice";

type ItemProps = {
  _id: string;
  name: string;
};

export const SuplierList = () => {
  const test = getSupliers().then((res) => res);
  console.log(test);
  // const data = useSelector((state) => state);

  const [data, setData] = useState({
    supliers: [],
  });

  // useEffect(() => {
  //   getSupliersUseCase().then((res) => setData(res.data.data));
  // }, []);

  const supliersList = data?.supliers.map((item: ItemProps) => {
    return (
      <div key={item._id}>
        <p>{item.name}</p>
        <button
          onClick={() => {
            // dispatchSuplier({ id: item._id, type: "update", name: item.name });
            // dispatchModal({ openModal: true });
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
