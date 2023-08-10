import { Modal } from "../../../components/global/Modal"
import { StockStateProps } from "../../../types/pages/stock.types"
import { TransferToSale } from "../../SalesPage/components/TransferToSale"

export const MovimentStockItem: React.FC<StockStateProps> = ({stockState, setStockState}) => {
    return(
        <Modal state={stockState} setState={setStockState}>
            <input disabled={true} value={stockState.product} />
            <input disabled={true} value={stockState.category} />
            <input disabled={true} value={stockState.subcategory} />
            <input disabled={true} value={stockState.suplier} />
            <input disabled={true} value={stockState.quantity} />
            <input disabled={true} value={stockState.total} />
            <input disabled={true} value={stockState.costPrice} />

            <TransferToSale stockState={stockState} setStockState={setStockState} />
        </Modal>
    )
}