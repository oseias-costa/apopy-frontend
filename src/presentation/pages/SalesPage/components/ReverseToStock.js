var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reverseSaleUseCase } from "../../../../application/sale.usecase";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { SpinnerIcon } from "../../../assets/icons/SpinnerIcon";
import { InputModalWithLabel } from "../../../components/global/Input/InputModalWithLabel";
import { InputNumberModalWithLabel } from "../../../components/global/Input/InputNumberModalWithLabel";
import { Modal } from "../../../components/global/Modal";
import { reverseSale } from "../../../redux/slice/saleSlice";
import { reverseToStock } from "../../../redux/slice/stockSlice";
import * as S from "../../../styles/GlobalStyles/modal.style";
import { initialSaleState } from "../../../types/pages/sale.types";
import { originStockReverse, variablesReverseSales } from "./utils-sales";
export const ReverseToStock = ({ saleState, setSaleState }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsloading] = useState(false);
    function handleReverse() {
        return __awaiter(this, void 0, void 0, function* () {
            setIsloading(true);
            const reverse = yield reverseSaleUseCase(variablesReverseSales(saleState));
            if (reverse.status === 200) {
                dispatch(reverseSale(saleState));
                dispatch(reverseToStock(originStockReverse(saleState)));
                setSaleState(initialSaleState);
                setIsloading(false);
                console.log(reverse.data);
            }
        });
    }
    return (_jsx(Modal, { state: saleState, setState: setSaleState, children: _jsxs(S.ModalContent, { children: [_jsxs(S.TitleModal, { children: [_jsx(S.TitleModalH2, { children: "Retornar para o Estoque" }), _jsx(CloseIcon, { onClick: () => setSaleState(initialSaleState) })] }), _jsx(S.ModalContentText, { children: "Ao clicar abaixo esse item ir\u00E1 retornar para o estoque." }), _jsxs(S.ProductContainerFlex, { children: [_jsx(InputModalWithLabel, { label: 'Produto', value: saleState.product, disabled: true }), _jsx(InputModalWithLabel, { label: 'Categoria', value: saleState.category, disabled: true })] }), _jsxs(S.ProductContainerFlex, { children: [_jsx(InputModalWithLabel, { label: 'Subcategoria', value: saleState.subcategory, disabled: true }), _jsx(InputModalWithLabel, { label: 'Fornecedor', value: saleState.suplier, disabled: true })] }), _jsx(InputNumberModalWithLabel, { label: 'Quantidade', value: saleState.quantity, disabled: true }), _jsx(S.ButtonModal, { disabled: isLoading, onClick: handleReverse, children: isLoading ? (_jsx(SpinnerIcon, {})) : ('Reverter Para o Estoque') })] }) }));
};
