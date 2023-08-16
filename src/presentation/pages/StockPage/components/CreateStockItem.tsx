import { useState } from "react";
import { Product } from "../../../../domain/entities/product";
import { Stock } from "../../../../domain/entities/stock";
import { Modal } from "../../../components/global/Modal";
import { useGetProducts } from "../../../hooks/useGetProducts";
import {
  initialStockState,
  initialStockStateCreate,
  StockComponentState,
  StockStateProps,
} from "../../../types/pages/stock.types";
import { createStockUseCase } from "../../../../application/stock.usecase";
import { createStock } from "../../../redux/slice/stockSlice";
import { useDispatch } from "react-redux";
import * as S from "../../../styles/GlobalStyles/modal.style";

export const CreateStockItem: React.FC<StockStateProps> = ({ stockState, setStockState }) => {
  const { products } = useGetProducts();
  const [newStockItem, setNewStockItem] = useState<Stock>(initialStockStateCreate)
  const dispatch = useDispatch();
  const [ stockComponentState, setStockComponentState ] = useState<StockComponentState>({
    isEmpty: false,
    loading: false
  })

  const filterItem = (id: string): Product =>
    products.filter((item) => item._id === id)[0];

  async function handleCreateStockItem() {
    const create = await createStockUseCase(newStockItem);

    if (create.status === 200) {
      dispatch(createStock(create.data.data.createStockItem));
      setNewStockItem(initialStockStateCreate);
      setStockState(initialStockState);
    }
  }

  return (
    <Modal state={stockState} setState={setStockState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Inserir Produto</S.TitleModalH2>
        </S.TitleModal>
      <select
        value={newStockItem?.product}
        onChange={(e) => {
          const product = filterItem(e.target.value);
          setNewStockItem({
            ...initialStockStateCreate,
            _id: product._id,
            category: product.category,
            subcategory: product.subcategory,
            suplier: product.suplier,
            product: product.name,
          });
        }}
      >
        <option disabled={true}>Selecione</option>

        {products?.map((item: Product) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      <input disabled={true} value={newStockItem?.category} />
      <input disabled={true} value={newStockItem?.subcategory} />
      <input disabled={true} value={newStockItem?.suplier} />
      <input
        type="number"
        placeholder="Quantidade"
        onChange={(e) =>
          setNewStockItem({ ...newStockItem, quantity: Number(e.target.value) })
        }
      />
      <input
        type="number"
        placeholder="Preço de Custo"
        onChange={(e) =>
          setNewStockItem({
            ...newStockItem,
            costPrice: Number(e.target.value),
          })
        }
      />
      <input
        type="number"
        placeholder="total"
        onChange={(e) =>
          setNewStockItem({ ...newStockItem, total: Number(e.target.value) })
        }
      />
      <input
        type="string"
        placeholder="Descrição"
        onChange={(e) =>
          setNewStockItem({ ...newStockItem, description: e.target.value })
        }
      />
      <button onClick={handleCreateStockItem}>Adicionar</button>
      </S.ModalContent>
    </Modal>
  );
};
