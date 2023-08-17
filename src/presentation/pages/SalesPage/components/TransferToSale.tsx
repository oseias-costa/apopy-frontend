import { useState } from "react";
import { useDispatch } from "react-redux";
import { transferSaleUseCase } from "../../../../application/sale.usecase";
import { Sale } from "../../../../domain/entities/sale";
import { StockStateProps } from "../../../types/pages/stock.types";
import { originStockMoviment, variablesSales } from "./utils-sales";
import { transferSale } from "../../../redux/slice/saleSlice";
import { initialSaleState, initialStateNewSale, NewSale } from "../../../types/pages/sale.types";
import { transferStockToSale } from "../../../redux/slice/stockSlice";
import * as S from "../../../styles/GlobalStyles/modal.style"

export const TransferToSale: React.FC<StockStateProps> = ({
  stockState,
  setStockState,
}) => {
  const [newSale, setNewSale] = useState<NewSale>(initialStateNewSale);
  const dispatch = useDispatch();

  async function handleTransferSale() {
    const variables: Omit<Sale, "_id"> = variablesSales(stockState, newSale);
    const transferSaleReq = await transferSaleUseCase(variables);

    if (transferSaleReq.status === 200) {
      console.log(transferSale)
      dispatch(transferSale(transferSaleReq.data.data.transferSale));
      dispatch(transferStockToSale(originStockMoviment(stockState, newSale)));
      setStockState(initialSaleState);
    }
  }

  return (
    <>
      <S.InputNumbersContent>
        <S.InputModalNumber
          type="number"
          placeholder="Quantidade"
          value={newSale.quantity}
          onChange={(e) =>
            setNewSale({ ...newSale, quantity: Number(e.target.value) })
          }
        />
        <S.InputModalNumber
          type="number"
          second={true}
          placeholder="Preço"
          value={newSale.price}
          onChange={(e) =>
            setNewSale({ ...newSale, price: Number(e.target.value) })
          }
        />
        <S.InputModalNumber
          type="number"
          placeholder="Percentual de Lucro"
          value={newSale.price}
        />
      </S.InputNumbersContent>
      <S.InputNumbersContent>
        <S.InputModalNumber
          type="number"
          placeholder="Total"
          disabled={true}
          value={newSale.price * newSale.quantity}
        />
        <S.InputModalNumber 
          type="number" 
          placeholder="Lucro" 
          value={newSale.profit} 
          second={true}
        />
        <S.InputModalNumber
          type="number"
          disabled={true}
          value={newSale.price - stockState.costPrice}
        />
      </S.InputNumbersContent>
        <S.InputModalNumber
          type="text"
          disabled={true}
          value={(newSale.price - stockState.costPrice) / newSale.price}
        />
      <S.ButtonModal onClick={handleTransferSale}>Nova Venda</S.ButtonModal>
    </>
  );
};
