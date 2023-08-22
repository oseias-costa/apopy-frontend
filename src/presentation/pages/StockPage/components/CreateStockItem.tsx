import React, { useEffect, useState } from "react";
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
import { InputModalWithLabel } from "../../../components/global/Input/InputModalWithLabel";
import { InputNumberModalWithLabel } from "../../../components/global/Input/InputNumberModalWithLabel";
import { verifyFieldsStock } from "./stock-utils";

export const CreateStockItem: React.FC<StockStateProps> = ({
  stockState,
  setStockState,
}) => {
  const [newStockItem, setNewStockItem] = useState<Stock>(
    initialStockStateCreate
  );
  const dispatch = useDispatch();
  const [stockComponentState, setStockComponentState] =
    useState<ProductComponentState>({
      isEmpty: false,
      loading: false,
    });

  useEffect(() => {
    if (verifyFieldsStock(newStockItem)) {
      setStockComponentState({ isEmpty: false, loading: false });
    } else {
      setStockComponentState({ isEmpty: true, loading: false });
    }
  }, [newStockItem]);

  async function handleCreateStockItem() {
    setStockComponentState({ isEmpty: true, loading: true });
    const create = await createStockUseCase(newStockItem);

    if (create.status === 200) {
      dispatch(createStock(create.data.data.createStockItem));
      setNewStockItem(initialStockStateCreate);
      setStockState(initialStockState);
      setStockComponentState({ isEmpty: false, loading: false });
    }
  }

  return (
    <Modal state={stockState} setState={setStockState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Inserir novo </S.TitleModalH2>
          <CloseIcon onClick={() => setStockState(initialStockState)} />
        </S.TitleModal>
        <S.ProductContainerFlex>
          <ProductSelect
            newStockItem={newStockItem}
            setNewStockItem={setNewStockItem}
          />
          <InputModalWithLabel
            label="Categoria"
            disabled={true}
            value={newStockItem?.category}
            placeholder="Categoria do Produto"
          />
        </S.ProductContainerFlex>
        <S.ProductContainerFlex>
          <InputModalWithLabel
            label="Subcategoria"
            disabled={true}
            placeholder="Subcategoria do Produto"
            value={newStockItem?.subcategory}
          />
          <InputModalWithLabel
            label="Fornecedor"
            disabled={true}
            placeholder="Fornecedor do Produto"
            value={newStockItem?.suplier}
          />
        </S.ProductContainerFlex>
        <S.InputNumbersContent>
          <InputNumberModalWithLabel
            label="Quantidade"
            type="number"
            placeholder="Qtd"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewStockItem({
                ...newStockItem,
                quantity: Number(e.target.value),
                total: Number(newStockItem.costPrice * Number(e.target.value)),
              })
            }
          />
          <InputNumberModalWithLabel
            label="Preço de Custo"
            type="number"
            placeholder="P. de Custo"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewStockItem({
                ...newStockItem,
                costPrice: Number(e.target.value),
                total: Number(e.target.value) * newStockItem.quantity,
              })
            }
            second={true}
          />
          <InputNumberModalWithLabel
            label="Total"
            disabled={true}
            type="number"
            placeholder="Total"
            value={newStockItem.total}
          />
        </S.InputNumbersContent>
        <InputModalWithLabel
          label="Descrição"
          type="string"
          placeholder="Descrição"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewStockItem({ ...newStockItem, description: e.target.value })
          }
        />
        <S.ButtonModal
          disabled={stockComponentState.isEmpty}
          onClick={handleCreateStockItem}
        >
          {stockComponentState.loading ? (
            <SpinnerIcon />
          ) : (
            "Adicionar Produto no Estoque"
          )}
        </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
};
