import { useState } from "react";
import { Stock } from "../../../../domain/entities/stock";
import { Modal } from "../../../components/global/Modal";
import {
  initialStockState,
  initialStockStateCreate,
  StockStateProps,
} from "../../../types/pages/stock.types";
import { deleteStockUseCase } from "../../../../application/stock.usecase";
import { useDispatch } from "react-redux";
import { deleteStock } from "../../../redux/slice/stockSlice";

export const DeleteStockItem: React.FC<StockStateProps> = ({
  stockState,
  setStockState,
}) => {
  const [ deleteStockItem, setDeleteStockItem ] = useState<Stock>(stockState);
  const dispatch = useDispatch()

  async function handleDeleteStockItem() {
    const deleteItem = await deleteStockUseCase(deleteStockItem._id);

    if (deleteItem.status === 200) {
      
      dispatch(deleteStock(deleteItem.data.data.deleteStockItem))
      setDeleteStockItem(initialStockStateCreate);
      setStockState(initialStockState)
    }
  }

  return (
    <Modal state={stockState} setState={setStockState}>
      <input disabled={true} value={deleteStockItem?.product} />
      <input disabled={true} value={deleteStockItem?.category} />
      <input disabled={true} value={deleteStockItem?.subcategory} />
      <input disabled={true} value={deleteStockItem?.suplier} />
      <input
        disabled={true}
        type="number"
        value={deleteStockItem.quantity}
        placeholder="Quantidade"
        onChange={(e) =>
            setDeleteStockItem({ ...deleteStockItem, quantity: Number(e.target.value) })
        }
      />
        <input
          disabled={true}
          type="number"
          placeholder="Preço de Custo"
          value={deleteStockItem.quantity}
          onChange={(e) =>
            setDeleteStockItem({ ...deleteStockItem, costPrice: Number(e.target.value) })
          }
        />
      <input
        type="number"
        disabled={true}
        placeholder="Total"
        value={deleteStockItem.total}
        onChange={(e) =>
          setDeleteStockItem({
            ...deleteStockItem,
            total: Number(e.target.value),
          })
        }
      />
      <input
        type="string"
        disabled={true}
        value={deleteStockItem.description}
        onChange={(e) =>
          setDeleteStockItem({ ...deleteStockItem, description: e.target.value })
        }
      />
      <button onClick={handleDeleteStockItem}>Excluir</button>
    </Modal>
  );
};
