import { Modal } from "../../../components/global/Modal"
import { StockStateProps } from "../../../types/pages/stock.types"

export const MovimentStockItem: React.FC<StockStateProps> = ({stockState, setStockState}) => {
    return(
        <Modal state={stockState} setState={setStockState}>
            <div>MovimentItem</div>
        </Modal>
    )
}