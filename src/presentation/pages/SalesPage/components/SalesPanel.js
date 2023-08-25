import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Eye } from "../../../assets/icons/Eye";
import { useState } from "react";
import * as S from "../../../styles/PageStyles/SaleStyles/salePanel.style";
export const SalesPanel = ({ sales }) => {
    const [isVisible, setIsVisible] = useState(false);
    const total = sales.reduce((acc, val) => acc + val.total, 0);
    return (_jsxs(S.SalePanelContainer, { children: [_jsx(Eye, { isVisible: isVisible, setIsVisible: setIsVisible }), _jsxs(S.SalePanelItem, { children: [_jsxs(S.SalePanelItemNumber, { isVisible: isVisible, children: [_jsx(S.SaleRealSign, { children: "R$" }), total.toFixed(2)] }), _jsx(S.SalePanelItemText, { children: "Total" })] }), _jsxs(S.SalePanelItem, { children: [_jsx(S.SalePanelItemNumber, { isVisible: isVisible, children: sales.length }), _jsx(S.SalePanelItemText, { children: "Quantidade" })] })] }));
};
