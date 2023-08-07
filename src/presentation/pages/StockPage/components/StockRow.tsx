import React from "react";
import { Stock } from "../../../../domain/entities/stock"
import * as S from "../../../styles/PageStyles/StockStyles/stock-row.styles";
import { StockState } from "../../../types/pages/stock.types";
import { MenuDropdownStock } from "./MenuDropdownStock";

interface StockStateProps {
    stockList: Stock[];
    setStockState: React.Dispatch<React.SetStateAction<StockState>>
}

export const StockRow: React.FC<StockStateProps> = ({stockList, setStockState}) => {
    const stockItems = stockList.map((item: Stock) => {
        return(
            <S.StockRowContainer key={item._id}>
                <S.StockRowText>{item.product}</S.StockRowText>
                <S.StockRowText>{item.category}</S.StockRowText>
                <S.StockRowText>{item.subcategory}</S.StockRowText>
                <S.StockRowText>{item.suplier}</S.StockRowText>
                <S.StockRowText>{item.costPrice}</S.StockRowText>
                <S.StockRowText>{item.quantity}</S.StockRowText>
                <S.StockRowText>{item.total}</S.StockRowText>
                <S.StockRowText>{item.description}</S.StockRowText>
                <MenuDropdownStock item={item} setState={setStockState}  />
            </S.StockRowContainer>
        )
    })

    return  (
        <>
            <S.StockRowContainerHeader>
                <S.StockRowTextHeader>Produto</S.StockRowTextHeader>
                <S.StockRowTextHeader>Categoria</S.StockRowTextHeader>
                <S.StockRowTextHeader>Subcategoria</S.StockRowTextHeader>
                <S.StockRowTextHeader>Fornecedor</S.StockRowTextHeader>
                <S.StockRowTextHeader>Preço de Custo</S.StockRowTextHeader>
                <S.StockRowTextHeader>Quantidade</S.StockRowTextHeader>
                <S.StockRowTextHeader>Total</S.StockRowTextHeader>
                <S.StockRowTextHeader>Descrição</S.StockRowTextHeader>
                <S.Adjuste />
            </S.StockRowContainerHeader>
            {stockItems}
        </>)
}