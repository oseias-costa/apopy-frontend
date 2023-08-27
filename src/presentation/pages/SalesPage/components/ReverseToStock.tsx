import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import { reverseSaleUseCase } from "../../../../application/sale.usecase";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";
import { InputModalWithLabel } from "../../Layout/components/InputModalWithLabel";
import { InputNumberModalWithLabel } from "../../Layout/components/InputNumberModalWithLabel";
import { Modal } from "../../Layout/components/Modal";
import { reverseSale } from "../../../redux/slice/saleSlice";
import { reverseToStock } from "../../../redux/slice/stockSlice";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { initialSaleState, SaleState } from "../../../types/pages/sale.types"
import { originStockReverse, variablesReverseSales } from "./utils-sales";

interface ReverseToStockProps {
    saleState: SaleState;
    setSaleState: Dispatch<React.SetStateAction<SaleState>>
}

export const ReverseToStock: React.FC<ReverseToStockProps> = ({saleState, setSaleState}) => {
    const dispatch = useDispatch()
    const [ isLoading, setIsloading ] = useState(false)

    async function handleReverse(){
        setIsloading(true)
        const reverse = await reverseSaleUseCase(variablesReverseSales(saleState))

        if(reverse.status === 200){
            dispatch(reverseSale(saleState))
            dispatch(reverseToStock(originStockReverse(saleState)))
            setSaleState(initialSaleState)
            setIsloading(false)
            console.log(reverse.data)
        }
    }

    return(
        <Modal state={saleState} setState={setSaleState}>
            <S.ModalContent>
                <S.TitleModal>
                    <S.TitleModalH2>Retornar para o Estoque</S.TitleModalH2>
                    <CloseIcon onClick={() => setSaleState(initialSaleState)} />
                </S.TitleModal>
                <S.ModalContentText>Ao clicar abaixo esse item irá retornar para o estoque.</S.ModalContentText>
                <S.ProductContainerFlex>
                    <InputModalWithLabel 
                        label='Produto' 
                        value={saleState.product} 
                        disabled={true}
                    />
                    <InputModalWithLabel 
                        label='Categoria' 
                        value={saleState.category} 
                        disabled={true}
                    />
                </S.ProductContainerFlex>
                <S.ProductContainerFlex>
                    <InputModalWithLabel 
                        label='Subcategoria' 
                        value={saleState.subcategory} 
                        disabled={true}
                    />
                    <InputModalWithLabel 
                        label='Fornecedor' 
                        value={saleState.suplier} 
                        disabled={true}
                    />
                </S.ProductContainerFlex>
                <InputNumberModalWithLabel 
                    label='Quantidade'
                    value={saleState.quantity} 
                    disabled={true}
                />
                <S.ButtonModal 
                    disabled={isLoading} 
                    onClick={handleReverse}
                >
                    {isLoading ? (
                        <SpinnerIcon />
                    ):(
                        'Reverter Para o Estoque'
                    )}
                </S.ButtonModal>
            </S.ModalContent>
        </Modal>
    )
}