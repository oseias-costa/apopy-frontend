import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { transferSaleUseCase } from "../../../../application/sale.usecase";
import { Sale } from "../../../../domain/entities/sale";
import { StockStateProps } from "../../../types/pages/stock.types";
import { originStockMoviment, variablesSales } from "./utils-sales";
import { transferSale } from "../../../redux/slice/saleSlice";
import {
  initialSaleState,
  initialStateNewSale,
  NewSale,
} from "../../../types/pages/sale.types";
import { transferStockToSale } from "../../../redux/slice/stockSlice";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { InputNumberModalWithLabel } from "../../../components/global/Input/InputNumberModalWithLabel";
import { Spinner } from "../../LoginPage/Spinner";

export const TransferToSale: React.FC<StockStateProps> = ({
  stockState,
  setStockState,
}) => {
  const [newSale, setNewSale] = useState<NewSale>(initialStateNewSale);
  const [saleVariables, setSaleVariables ] = useState<Omit<Sale, "_id">>(initialSaleState);
  const dispatch = useDispatch();
  const [ transferToSaleState, setTransferToSaleState ] = useState({
    isLoading: false,
    isError: false,
    isEmpty: true
  })

  useEffect(() => {
    if(saleVariables.quantity === 0 && saleVariables.price === 0){
      setTransferToSaleState({...transferToSaleState, isEmpty: true })
    } else {
      setTransferToSaleState({...transferToSaleState, isEmpty: false })
    }

    setSaleVariables(variablesSales(stockState, newSale)) 
  },[ stockState, newSale ])

  async function handleTransferSale() {
    const transferSaleReq = await transferSaleUseCase(saleVariables);

    if (transferSaleReq.status === 200) {
      dispatch(transferSale(transferSaleReq.data.data.transferSale));
      dispatch(transferStockToSale(originStockMoviment(stockState, newSale)));
      setStockState(initialSaleState);
    }
  }

  return (
    <>
      <S.InputNumbersContent>
        <InputNumberModalWithLabel
          label="Quantidade"
          error={transferToSaleState.isError}
          type="number"
          max={stockState.quantity}
          min={1}
          value={saleVariables.quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewSale({  ...newSale,  quantity: Number(e.target.value) })
          }}
        />
        <InputNumberModalWithLabel
          label="Preço Unidade"
          type="number"
          second={true}
          value={saleVariables.price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewSale({ ...newSale, price: Number(e.target.value) })
          }
        />
        <InputNumberModalWithLabel
          label="Total da Venda"
          type="string"
          disabled={true}
          value={`R$ ${saleVariables.total}`}
          />
        </S.InputNumbersContent>
      <S.ButtonModal disabled={transferToSaleState.isEmpty} onClick={handleTransferSale}>
        { transferToSaleState.isLoading ? (
          <Spinner />
        ) : (
          'Nova Venda'
        )} 
      </S.ButtonModal>
    </>
  );
};
