import React, { Dispatch } from "react";
import { Sale } from "../../../../domain/entities/sale"
import * as S from "../../../styles/PageStyles/SaleStyles/sales-row.style";
import { SaleState } from "../../../types/pages/sale.types";

interface SalesStateProp {
    sales: Sale[];
    setSaleState: Dispatch<React.SetStateAction<SaleState>>;
}

export const SalesRow: React.FC<SalesStateProp> = (props) => {
    const salesList = props.sales?.map((item: Sale) => {
        return(
            <S.SaleRowContainer key={item._id}>
                <S.SaleRowText>{item.product}</S.SaleRowText>
                <S.SaleRowText>{item.category}</S.SaleRowText>
                <S.SaleRowText>{item.subcategory}</S.SaleRowText>
                <S.SaleRowText>{item.suplier}</S.SaleRowText>
                <S.SaleRowText>{item.costPrice}</S.SaleRowText>
                <S.SaleRowText>{item.price}</S.SaleRowText>
                <S.SaleRowText>{item.quantity}</S.SaleRowText>
                <S.SaleRowText>{item.total}</S.SaleRowText>
                <S.SaleRowText>{item.percentage}</S.SaleRowText>
                <S.SaleRowText>{item.description}</S.SaleRowText>
            </S.SaleRowContainer>
        )
    })

    return(
        <>
        <S.SaleRowContainerHeader>
            <S.SaleRowTextHeader>Produto</S.SaleRowTextHeader>
            <S.SaleRowTextHeader>Categoria</S.SaleRowTextHeader>
            <S.SaleRowTextHeader>Fornecedor</S.SaleRowTextHeader>
            <S.SaleRowTextHeader>Preço Custo</S.SaleRowTextHeader>
            <S.SaleRowTextHeader>Preço</S.SaleRowTextHeader>
            <S.SaleRowTextHeader>Quantidade</S.SaleRowTextHeader>
            <S.SaleRowTextHeader>Total</S.SaleRowTextHeader>
            <S.SaleRowTextHeader>%</S.SaleRowTextHeader>
            <S.SaleRowTextHeader>Descrição</S.SaleRowTextHeader>
        </S.SaleRowContainerHeader>
            {salesList}
        </>
    )
}