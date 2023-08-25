import React from "react";
import { Stock } from "../../../../domain/entities/stock"
import * as S from "../../../styles/GlobalStyles/table.style";
import { MenuDropdownStock } from "./MenuDropdownStock";
import { StockRowProps } from "./stock-utils";

export const StockRow: React.FC<StockRowProps> = ({stockList, setStockState}) => {
    const stockItems = stockList?.map((item: Stock) => {
        return(
            <S.TableRow key={item._id}>
                <S.TableRowItem position="left">{item.product}</S.TableRowItem>
                <S.TableRowItem position="left">{item.category}</S.TableRowItem>
                <S.TableRowItem position="left">{item.subcategory}</S.TableRowItem>
                <S.TableRowItem position="left">{item.suplier}</S.TableRowItem>
                <S.TableRowItem position="right">R$ {item.costPrice}</S.TableRowItem>
                <S.TableRowItem position="center">{item.quantity}</S.TableRowItem>
                <S.TableRowItem position="right">R$ {item.total}</S.TableRowItem>
                <S.TableRowItem position="left">{item.description}</S.TableRowItem>
                <S.TableRowItem position="center">
                    <MenuDropdownStock item={item} setState={setStockState}  />
                </S.TableRowItem>
            </S.TableRow>
        )
    })

    return  (
        <S.Table>
            <S.TableRow>
                <S.TableRowTh position="left">Produto</S.TableRowTh>
                <S.TableRowTh position="left">Categoria</S.TableRowTh>
                <S.TableRowTh position="left">Subcategoria</S.TableRowTh>
                <S.TableRowTh position="left">Fornecedor</S.TableRowTh>
                <S.TableRowTh position="right">P. Custo</S.TableRowTh>
                <S.TableRowTh position="center">Qtd</S.TableRowTh>
                <S.TableRowTh position="right">Total</S.TableRowTh>
                <S.TableRowTh position="left">Descrição</S.TableRowTh>
                <S.TableRowTh position="left"></S.TableRowTh>
            </S.TableRow>
            {stockItems}
        </S.Table>)
}