import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { DootsIcon } from "../../CategoryPage/components/DootsIcon";
import * as S from "../../../styles/PageStyles/CategoryStyles/category-row.styles";
import { useState } from "react";
export const MenuDropDownSales = ({ item, setState }) => {
    const [positionItem, setPositionItem] = useState();
    const [menuState, setMenuState] = useState({ openMenu: false, item: "" });
    return (_jsxs(_Fragment, { children: [_jsx(S.DropMenu, { height: document.body.scrollHeight, display: menuState.item === (item === null || item === void 0 ? void 0 : item._id), onClick: () => setMenuState({ openMenu: false, item: "" }), children: _jsx(S.DropMenuContent, { left: positionItem === null || positionItem === void 0 ? void 0 : positionItem.pageX, top: positionItem === null || positionItem === void 0 ? void 0 : positionItem.pageY, children: _jsx(S.DropMenuButtons, { children: _jsx(S.ButtonUpdate, { onClick: () => setState(Object.assign(Object.assign({}, item), { type: "moviment", openModal: true })), children: "Reverter" }) }) }) }), _jsx(DootsIcon, { onClick: (e) => {
                    setMenuState({ openMenu: !menuState, item: item === null || item === void 0 ? void 0 : item._id });
                    setPositionItem(e);
                } })] }));
};
