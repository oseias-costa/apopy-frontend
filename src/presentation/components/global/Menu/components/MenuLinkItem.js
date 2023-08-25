import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { LinkMenu, MenuItem } from "../../../../styles/GlobalStyles/menu.style";
export const MenuLinkItem = ({ path, content, Icon }) => {
    const isSelected = false;
    const location = useLocation();
    return (_jsxs(MenuItem, { children: [_jsx(Icon, { isSelected: isSelected }), _jsx(LinkMenu, { to: path, children: content })] }));
};
