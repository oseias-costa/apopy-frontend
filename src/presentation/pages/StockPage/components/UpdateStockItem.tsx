import { useState } from "react";
import { Product } from "../../../../domain/entities/product";
import { Stock } from "../../../../domain/entities/stock";
import { Modal } from "../../../components/global/Modal";
import { useGetProducts } from "../../../hooks/useGetProducts";
import {
  initialStockState,
  initialStockStateCreate,
  StockStateProps,
  UpdateStockItemData,
} from "../../../types/pages/stock.types";
import { updateStockUseCase } from "../../../../application/stock.usecase";
import { useDispatch } from "react-redux";
import { updateStock } from "../../../redux/slice/stockSlice";

export const UpdateStockItem: React.FC<StockStateProps> = ({
  stockState,
  setStockState,
}) => {
  const { products } = useGetProducts();
  const [ updateStockItem, setUpdateStockItem ] = useState<Stock>(stockState);
  const dispatch = useDispatch()

  const filterItem = (id: string): Product =>
    products.filter((item) => item._id === id)[0];

  async function handleUpdateStockItem() {
    const update = await updateStockUseCase(UpdateStockItemData(updateStockItem));

    if (update.status === 200) {
      
      dispatch(updateStock(update.data.data.editStockItem))
      setUpdateStockItem(initialStockStateCreate);
      setStockState(initialStockState)
    }
  }


  return (
    <Modal state={stockState} setState={setStockState}>
      <select
        value={updateStockItem?.product}
        onChange={(e) => {
          const product = filterItem(e.target.value);
          setUpdateStockItem({
            ...updateStockItem,
            category: product.category,
            subcategory: product.subcategory,
            suplier: product.suplier,
            product: product.name,
          });
        }}
      >
        <option>{updateStockItem.product}</option>

        {products?.map((item: Product) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      <input disabled={true} value={updateStockItem?.category} />
      <input disabled={true} value={updateStockItem?.subcategory} />
      <input disabled={true} value={updateStockItem?.suplier} />
      <input
        type="number"
        value={updateStockItem.quantity}
        placeholder="Quantidade"
        onChange={(e) =>
            setUpdateStockItem({ ...updateStockItem, quantity: Number(e.target.value) })
        }
      />
        <input
          type="number"
          placeholder="Preço de Custo"
          value={updateStockItem.quantity}
          onChange={(e) =>
            setUpdateStockItem({ ...updateStockItem, costPrice: Number(e.target.value) })
          }
        />
      <input
        type="number"
        placeholder="Total"
        value={updateStockItem.total}
        onChange={(e) =>
          setUpdateStockItem({
            ...updateStockItem,
            total: Number(e.target.value),
          })
        }
      />
      <input
        type="string"
        value={updateStockItem.description}
        onChange={(e) =>
          setUpdateStockItem({ ...updateStockItem, description: e.target.value })
        }
      />
      <button onClick={handleUpdateStockItem}>Update</button>
    </Modal>
  );
};
