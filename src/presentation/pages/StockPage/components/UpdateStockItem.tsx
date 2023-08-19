import React, { useState } from "react";
import { Stock } from "../../../../domain/entities/stock";
import { Modal } from "../../../components/global/Modal";
import {
  initialStockState,
  initialStockStateCreate,
  ProductComponentState,
  StockStateProps,
  UpdateStockItemData,
} from "../../../types/pages/stock.types";
import { updateStockUseCase } from "../../../../application/stock.usecase";
import { useDispatch } from "react-redux";
import { updateStock } from "../../../redux/slice/stockSlice";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { ProductSelect } from "./ProductSelect";
import { InputModalWithLabel } from "../../../components/global/Input/InputModalWithLabel";
import { InputNumberModalWithLabel } from "../../../components/global/Input/InputNumberModalWithLabel";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";

export const UpdateStockItem: React.FC<StockStateProps> = ({
  stockState,
  setStockState,
}) => {
  const [ updateStockItem, setUpdateStockItem ] = useState<Stock>(stockState);
  const dispatch = useDispatch()
  const [stockComponentState, setStockComponentState] = useState<ProductComponentState>({
    isEmpty: false,
    loading: false,
  });

  async function handleUpdateStockItem() {
    setStockComponentState({ isEmpty: true, loading: true })
    const update = await updateStockUseCase(UpdateStockItemData(updateStockItem));

    if (update.status === 200) {
      dispatch(updateStock(update.data.data.editStockItem))
      setUpdateStockItem(initialStockStateCreate);
      setStockState(initialStockState)
      setStockComponentState({ isEmpty: false, loading: false })
    }
  }

  return (
    <Modal state={stockState} setState={setStockState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Editar item do estoque</S.TitleModalH2>
          <CloseIcon onClick={() => setStockState(initialStockState)} />
        </S.TitleModal>
        <S.ProductContainerFlex>
          <ProductSelect
              newStockItem={updateStockItem}
              setNewStockItem={setUpdateStockItem}
          />
          <InputModalWithLabel label='Categoria' disabled={true} value={updateStockItem?.category} />
        </S.ProductContainerFlex>
        <S.ProductContainerFlex>
          <InputModalWithLabel label='Subcategoria' disabled={true} value={updateStockItem?.subcategory} />
          <InputModalWithLabel label='Fornecedor' disabled={true} value={updateStockItem?.suplier} />
        </S.ProductContainerFlex>
        <S.InputNumbersContent>
            <InputNumberModalWithLabel
              label='Quantidade'
              type="number"
              value={updateStockItem.quantity}
              placeholder="Quantidade"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUpdateStockItem({ ...updateStockItem, quantity: Number(e.target.value) })
              }
            />
            <InputNumberModalWithLabel
              label='Preço de Custo'
              type="number"
              placeholder="Preço de Custo"
              value={updateStockItem.quantity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUpdateStockItem({ ...updateStockItem, costPrice: Number(e.target.value) })
              }
            />
            <InputNumberModalWithLabel
              label='Total'
              type="number"
              placeholder="Total"
              value={updateStockItem.total}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUpdateStockItem({
                  ...updateStockItem,
                  total: Number(e.target.value),
                })
              }
            />
        </S.InputNumbersContent>
      <InputModalWithLabel
        label='Descrição'
        type="string"
        value={updateStockItem.description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUpdateStockItem({ ...updateStockItem, description: e.target.value })
        }
      />
      <S.ButtonModal disabled={stockComponentState.isEmpty} onClick={handleUpdateStockItem}>
      {stockComponentState.loading ? (
            <SpinnerIcon />
          ) : (
            "Atualizar item do Estoque"
          )}
      </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
};
