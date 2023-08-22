import React, { Dispatch } from "react";
import { Sale } from "../../../../domain/entities/sale"
import * as S from "../../../styles/GlobalStyles/table.style";
import { SaleState } from "../../../types/pages/sale.types";
import { MenuDropDownSales } from "./MenuDropDownSales";
import { formatDate } from "./utils-sales";

interface SalesStateProp {
    sales: Sale[];
    setSaleState: Dispatch<React.SetStateAction<SaleState>>;
}

export const SalesRow: React.FC<SalesStateProp> = (props) => {
    const salesList = props.sales?.map((item: Sale) => {
        return(
            <S.TableRow key={item._id}>
                <S.TableRowItem position="left">{item.product}</S.TableRowItem>
                <S.TableRowItem position="left">{`${item.category} ${item.subcategory} ${item.suplier}`}</S.TableRowItem>
                <S.TableRowItem position="right">{`R$ ${item.costPrice}`}</S.TableRowItem>
                <S.TableRowItem position="right">{`R$ ${item.price}`}</S.TableRowItem>
                <S.TableRowItem position="center">{item.quantity}</S.TableRowItem>
                <S.TableRowItem position="right">{`R$ ${item.total}`}</S.TableRowItem>
                <S.TableRowItem position="center">
                    <S.TableProfitItem profit={Number((item.percentage * 100).toFixed(1)) > 0}>{(item.percentage * 100).toFixed(1)} %</S.TableProfitItem>
                </S.TableRowItem>
                <S.TableRowItem position="center">{formatDate(item.date)}</S.TableRowItem>
                <S.TableRowItem position="left">{item.description}</S.TableRowItem>
                <S.TableRowItem position="center">
                    <MenuDropDownSales item={item} setState={props.setSaleState} />
                </S.TableRowItem>
                
            </S.TableRow>
        )
    })

    return(
        <S.Table>
                <S.TableRow>
                    <S.TableRowTh position="left">Produto</S.TableRowTh>
                    <S.TableRowTh position="left">Categoria</S.TableRowTh>
                    <S.TableRowTh position="right">P. Custo</S.TableRowTh>
                    <S.TableRowTh position="right">Preço</S.TableRowTh>
                    <S.TableRowTh position="center">Qtd</S.TableRowTh>
                    <S.TableRowTh position="right">Total</S.TableRowTh>
                    <S.TableRowTh position="center">Lucro</S.TableRowTh>
                    <S.TableRowTh position="center">Data</S.TableRowTh>
                    <S.TableRowTh position="left">Descrição</S.TableRowTh>
                    <S.TableRowTh></S.TableRowTh>
                </S.TableRow>
            {salesList}
        </S.Table>
    )
}