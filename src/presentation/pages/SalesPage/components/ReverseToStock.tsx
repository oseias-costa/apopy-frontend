import React, { Dispatch } from "react";
import { reverseSaleUseCase } from "../../../../application/sale.usecase";
import { Modal } from "../../../components/global/Modal";
import { SaleState } from "../../../types/pages/sale.types"
import { variablesReverseSales } from "./utils-sales";

interface ReverseToStockProps {
    saleState: SaleState;
    setSaleState: Dispatch<React.SetStateAction<SaleState>>
}

export const ReverseToStock: React.FC<ReverseToStockProps> = ({saleState, setSaleState}) => {
    async function handleReverse(){
        const reverse = await reverseSaleUseCase(variablesReverseSales(saleState))

        if(reverse.status === 200){
            console.log(reverse.data)
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