import { useState } from "react";
import { Stock } from "../../../../domain/stock"; 
import { Modal } from "../../Layout/components/Modal";
import {
  initialStockState,
  initialStockStateCreate,
  ProductComponentState,
  StockStateProps,
} from "../../../types/pages/stock.types";
import { deleteStockUseCase } from "../../../../application/stock.usecase";
import { useDispatch } from "react-redux";
import { deleteStock } from "../../../redux/slice/stockSlice";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { InputModalWithLabel } from "../../Layout/components/InputModalWithLabel";
import { InputNumberModalWithLabel } from "../../Layout/components/InputNumberModalWithLabel"; 
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";

export const DeleteStockItem: React.FC<StockStateProps> = ({ stockState, setStockState }) => {
  const [ deleteStockItem, setDeleteStockItem ] = useState<Stock>(stockState);
  const dispatch = useDispatch()
  const [stockComponentState, setStockComponentState] = useState<ProductComponentState>({
    isEmpty: false,
    loading: false,
  });

  async function handleDeleteStockItem() {
    setStockComponentState({ isEmpty: false, loading: true })
    const deleteItem = await deleteStockUseCase(deleteStockItem._id);

    if (deleteItem.status === 200) {
      dispatch(deleteStock(deleteItem.data.data.deleteStockItem))
      setDeleteStockItem(initialStockStateCreate);
      setStockState(initialStockState)
      setStockComponentState({ isEmpty: false, loading: false })
    }
  }

  return (
    <Modal state={stockState} setState={setStockState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Excluir item do Estoque</S.TitleModalH2>
          <CloseIcon onClick={() => setStockState(initialStockState)} />
        </S.TitleModal>
        <S.ProductContainerFlex>
          <InputModalWithLabel label='Produto' disabled={true} value={deleteStockItem?.product} />
          <InputModalWithLabel label='Categoria' disabled={true} value={deleteStockItem?.category} />
        </S.ProductContainerFlex>
        <S.ProductContainerFlex>
          <InputModalWithLabel label='Subcategoria' disabled={true} value={deleteStockItem?.subcategory} />
          <InputModalWithLabel label='Fornecedor' disabled={true} value={deleteStockItem?.suplier} />
        </S.ProductContainerFlex>
        <S.InputNumbersContent>
          <InputNumberModalWithLabel
            label='Quantidade'
            disabled={true}
            type="number"
            value={deleteStockItem.quantity}
            placeholder="Quantidade"
          />
            <InputNumberModalWithLabel
              label='Preço de Custo'
              disabled={true}
              type="number"
              placeholder="Preço de Custo"
              value={deleteStockItem.quantity}
            />
          <InputNumberModalWithLabel
            label='Total'
            type="number"
            disabled={true}
            placeholder="Total"
            value={deleteStockItem.total.toFixed(2)}
          />
       </S.InputNumbersContent>
        <InputModalWithLabel label='Descrição'
          type="string"
          disabled={true}
          value={deleteStockItem.description}
        />
        <S.ButtonModal 
          disabled={stockComponentState.loading} 
          onClick={handleDeleteStockItem}
        >
        {stockComponentState.loading ? (
            <SpinnerIcon />
          ) : (
            "Excluir Produto do Estoque"
          )}
        </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
};
