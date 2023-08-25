var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { transferSaleUseCase } from "../../../../application/sale.usecase";
import { originStockMoviment, variablesSales } from "./utils-sales";
import { transferSale } from "../../../redux/slice/saleSlice";
import { initialSaleState, initialStateNewSale, } from "../../../types/pages/sale.types";
import { transferStockToSale } from "../../../redux/slice/stockSlice";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { InputNumberModalWithLabel } from "../../../components/global/Input/InputNumberModalWithLabel";
import { Spinner } from "../../LoginPage/Spinner";
export const TransferToSale = ({ stockState, setStockState, }) => {
    const [newSale, setNewSale] = useState(initialStateNewSale);
    const [saleVariables, setSaleVariables] = useState(initialSaleState);
    const dispatch = useDispatch();
    const [transferToSaleState, setTransferToSaleState] = useState({
        isLoading: false,
        isError: false,
        isEmpty: true
    });
    useEffect(() => {
        if (saleVariables.quantity === 0 && saleVariables.price === 0) {
            setTransferToSaleState(Object.assign(Object.assign({}, transferToSaleState), { isEmpty: true }));
        }
        else {
            setTransferToSaleState(Object.assign(Object.assign({}, transferToSaleState), { isEmpty: false }));
        }
        setSaleVariables(variablesSales(stockState, newSale));
    }, [stockState, newSale]);
    function handleTransferSale() {
        return __awaiter(this, void 0, void 0, function* () {
            const transferSaleReq = yield transferSaleUseCase(saleVariables);
            if (transferSaleReq.status === 200) {
                dispatch(transferSale(transferSaleReq.data.data.transferSale));
                dispatch(transferStockToSale(originStockMoviment(stockState, newSale)));
                setStockState(initialSaleState);
            }
        });
    }
    return (_jsxs(_Fragment, { children: [_jsxs(S.InputNumbersContent, { children: [_jsx(InputNumberModalWithLabel, { label: "Quantidade", error: transferToSaleState.isError, type: "number", max: stockState.quantity, min: 1, value: saleVariables.quantity, onChange: (e) => {
                            setNewSale(Object.assign(Object.assign({}, newSale), { quantity: Number(e.target.value) }));
                        } }), _jsx(InputNumberModalWithLabel, { label: "Pre\u00E7o Unidade", type: "number", second: true, value: saleVariables.price, onChange: (e) => setNewSale(Object.assign(Object.assign({}, newSale), { price: Number(e.target.value) })) }), _jsx(InputNumberModalWithLabel, { label: "Total da Venda", type: "string", disabled: true, value: `R$ ${saleVariables.total}` })] }), _jsx(S.ButtonModal, { disabled: transferToSaleState.isEmpty, onClick: handleTransferSale, children: transferToSaleState.isLoading ? (_jsx(Spinner, {})) : ('Nova Venda') })] }));
};
