import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { reverseSaleUseCase } from "../../../../application/sale.usecase";
import { Modal } from "../../../components/global/Modal";
import { reverseSale } from "../../../redux/slice/saleSlice";
import { reverseToStock } from "../../../redux/slice/stockSlice";
import { initialSaleState, SaleState } from "../../../types/pages/sale.types"
import { originStockReverse, variablesReverseSales } from "./utils-sales";

interface ReverseToStockProps {
    saleState: SaleState;
    setSaleState: Dispatch<React.SetStateAction<SaleState>>
}

export const ReverseToStock: React.FC<ReverseToStockProps> = ({saleState, setSaleState}) => {
    const dispatch = useDispatch()

    async function handleReverse(){
        const reverse = await reverseSaleUseCase(variablesReverseSales(saleState))

        if(reverse.status === 200){
            dispatch(reverseSale(saleState))
            dispatch(reverseToStock(originStockReverse(saleState)))
            setSaleState(initialSaleState)
        }
    }

    return(
        <Modal state={saleState} setState={setSaleState}>
            <p>Reverse to Stock</p>
            <input value={saleState.product} />
            <input value={saleState.category} />
            <input value={saleState.subcategory} />
            <input value={saleState.suplier} />
            <input value={saleState.quantity} />
            <button onClick={handleReverse}>Reverter Para o Estoque</button>
        </Modal>
    )
}