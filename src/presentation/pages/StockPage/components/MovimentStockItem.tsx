import { CloseIcon } from "../../../assets/icons/CloseIcon"
import { Modal } from "../../../components/global/Modal"
import * as S from "../../../styles/GlobalStyles/modal.style"
import { initialStockState, StockStateProps } from "../../../types/pages/stock.types"
import { TransferToSale } from "../../SalesPage/components/TransferToSale"

export const MovimentStockItem: React.FC<StockStateProps> = ({stockState, setStockState}) => {
    return(
        <Modal state={stockState} setState={setStockState}>
            <S.ModalContent>
                <S.TitleModal>
                    <S.TitleModalH2>Movimentar Estoque</S.TitleModalH2>
                    <CloseIcon onClick={() => setStockState(initialStockState)} />
                </S.TitleModal>
                <S.InputModal disabled={true} value={stockState.product} />
                <S.InputModal disabled={true} value={stockState.category} />
                <S.InputModal disabled={true} value={stockState.subcategory} />
                <S.InputModal disabled={true} value={stockState.suplier} />
                <S.InputNumbersContent>
                    <S.InputModalNumber disabled={true} value={stockState.quantity} />
                    <S.InputModalNumber disabled={true} second={true} value={stockState.total} />
                    <S.InputModalNumber disabled={true} value={stockState.costPrice} />
                </S.InputNumbersContent>
                <TransferToSale stockState={stockState} setStockState={setStockState} />
            </S.ModalContent>
        </Modal>
    )
}