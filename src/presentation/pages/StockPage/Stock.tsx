import { useGetStock } from "../../hooks/useGetStock"
import * as S from "../../styles/GlobalStyles/titleWithButton.style";
import { StockRow } from "./components/StockRow";
import { useState } from "react";
import { StockContainerPage } from "../../styles/PageStyles/StockStyles/stock-row.styles";
import { initialStockState } from "../../types/pages/stock.types";
import { StockModal } from "./components/StockModal";

export const Stock = () => {
    const { stock } = useGetStock()
    const [ stockState, setStockState ] = useState(initialStockState)

    return (
        <StockContainerPage>
            <S.TitleWithButton>
                    <S.TitleSection>Estoque</S.TitleSection>
                    <S.ButtonCreateItem onClick={() => 
                        setStockState({...stockState, type: 'create', openModal: true})
                    }>Adicionar</S.ButtonCreateItem>
            </S.TitleWithButton>
            <StockRow stockList={stock} setStockState={setStockState} />
            <StockModal stockState={stockState} setStockState={setStockState} />
        </StockContainerPage>
    )
}