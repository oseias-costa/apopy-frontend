import getSupliersUseCase from "../../../application/suplier/get-supliers.usecase";
import { dispatchModal } from "../../../infra/context/modal-reactiveVar";
import { dispatchSuplier } from "../../../infra/context/suplier-reactiveVar";
import { Modal } from "../global/Modal";
import { UpdateSuplier } from "./UpdateSuplier";

type ItemProps = {
  _id: string,
  name: string
}

export const SuplierList = () => {  
const [ data ] = getSupliersUseCase()

  const supliersList = data?.supliers.map((item: ItemProps) => {
    return (
      <>
        <div key={item._id}>
          <p>{item.name}</p>
          <button onClick={() => {
            dispatchSuplier({ id: item._id, type: 'update', name: item.name })
            dispatchModal({ openModal: true })
          }}>Editar</button>
          <button>Delete</button>
        </div>
      </>
    )
  })

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
