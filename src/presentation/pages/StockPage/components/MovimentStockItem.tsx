import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { InputNumberModalWithLabel } from "../../Layout/components/InputNumberModalWithLabel"; 
import { InputModalWithLabel } from "../../Layout/components/InputModalWithLabel";
import { Modal } from "../../../components/global/Modal";
import * as S from "../../../styles/GlobalStyles/modal.style";
import {
  initialStockState,
  StockStateProps,
} from "../../../types/pages/stock.types";
import { TransferToSale } from "../../SalesPage/components/TransferToSale";

export const MovimentStockItem: React.FC<StockStateProps> = ({stockState, setStockState }) => {

  return (
    <Modal state={stockState} setState={setStockState}>
      <S.ModalContent>
        <S.TitleModal>
          <S.TitleModalH2>Nova venda</S.TitleModalH2>
          <CloseIcon onClick={() => setStockState(initialStockState)} />
        </S.TitleModal>
        <S.ProductContainerFlex>
          <InputModalWithLabel
            label="Produto"
            disabled={true}
            value={stockState.product}
          />
          <InputModalWithLabel
            label="Categoria"
            disabled={true}
            value={stockState.category}
          />
        </S.ProductContainerFlex>
        <S.ProductContainerFlex>
          <InputModalWithLabel
            label="Subcategoria"
            disabled={true}
            value={stockState.subcategory}
          />
          <InputModalWithLabel
            label="Fornecedor"
            disabled={true}
            value={stockState.suplier}
          />
        </S.ProductContainerFlex>
        <S.InputNumbersContent>
          <InputNumberModalWithLabel
            label="Qtde em Estoque"
            disabled={true}
            value={stockState.quantity}
          />
          <InputNumberModalWithLabel
            label="Total"
            disabled={true}
            second={true}
            value={`R$ ${stockState.total}`}
          />
          <InputNumberModalWithLabel
            label="Preço de Custo"
            disabled={true}
            value={`R$ ${stockState.costPrice}`}
          />
        </S.InputNumbersContent>
        <TransferToSale stockState={stockState} setStockState={setStockState} />
      </S.ModalContent>
    </Modal>
  );
};
