import { useState } from "react";
import { Stock } from "../../../../domain/entities/stock";
import { Modal } from "../../../components/global/Modal";
import {
  initialStockState,
  initialStockStateCreate,
  ProductComponentState,
  StockStateProps,
} from "../../../types/pages/stock.types";
import { createStockUseCase } from "../../../../application/stock.usecase";
import { createStock } from "../../../redux/slice/stockSlice";
import { useDispatch } from "react-redux";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { ProductSelect } from "./ProductSelect";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";

export const CreateStockItem: React.FC<StockStateProps> = ({ stockState, setStockState }) => {
  const [newStockItem, setNewStockItem] = useState<Stock>(initialStockStateCreate)
  const dispatch = useDispatch();
  const [ stockComponentState, setStockComponentState ] = useState<ProductComponentState>({
    isEmpty: false,
    loading: false
  })
  console.log('newstock', newStockItem)

  async function handleCreateStockItem() {
    setStockComponentState({ isEmpty: true, loading: true })
    const create = await createStockUseCase(newStockItem);

    if (create.status === 200) {
      dispatch(createStock(create.data.data.createStockItem));
      setNewStockItem(initialStockStateCreate);
      setStockState(initialStockState);
      setStockComponentState({ isEmpty: false, loading: false })
    }
  }

  return (
    <Modal state={stockState} setState={setStockState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Inserir Produto</S.TitleModalH2>
          <CloseIcon onClick={() => setStockState(initialStockState)} />
        </S.TitleModal>
      <S.ModalContentText>Preencha os campos abaixo para adicionar um Produto ao estoque.</S.ModalContentText>
      <S.InputNumbersContent>
      <ProductSelect 
        newStockItem={newStockItem} 
        setNewStockItem={setNewStockItem} 
      />
        <S.InputModal 
          disabled={true} 
          value={newStockItem?.category} 
          placeholder='Categoria do Produto'
          />
      </S.InputNumbersContent>
        <S.InputModal 
          disabled={true}
          placeholder='Subcategoria do Produto' 
          value={newStockItem?.subcategory} />
      <S.InputModal 
        disabled={true}
        placeholder='Fornecedor do Produto' 
        value={newStockItem?.suplier} />
      <S.InputNumbersContent>
        <S.InputModalNumber
          type="number"
          placeholder="Qtd"
          onChange={(e) =>
            setNewStockItem({ ...newStockItem, quantity: Number(e.target.value) })
          }
        />
        <S.InputModalNumber
          type="number"
          placeholder="P. de Custo"
          onChange={(e) =>
            setNewStockItem({
              ...newStockItem,
              costPrice: Number(e.target.value),
            })
          }
          second={true}
        />
        <S.InputModalNumber
          disabled={true}
          type="number"
          placeholder="Total"
          onChange={(e) =>
            setNewStockItem({ ...newStockItem, total: Number(e.target.value) })
          }
        />
      </S.InputNumbersContent>
      <S.InputModal
        type="string"
        placeholder="Descrição"
        onChange={(e) =>
          setNewStockItem({ ...newStockItem, description: e.target.value })
        }
      />
      <S.ButtonModal 
        disabled={stockComponentState.isEmpty}
        onClick={handleCreateStockItem}
      >
        { stockComponentState.loading ?  <SpinnerIcon /> : 'Adicionar Produto no Estoque'}
      </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
};
