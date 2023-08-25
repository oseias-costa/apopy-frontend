import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from "../../../styles/GlobalStyles/table.style";
import { MenuDropDownSales } from "./MenuDropDownSales";
import { formatDate } from "./utils-sales";
export const SalesRow = (props) => {
    var _a;
    const salesList = (_a = props.sales) === null || _a === void 0 ? void 0 : _a.map((item) => {
        return (_jsxs(S.TableRow, { children: [_jsx(S.TableRowItem, { position: "left", children: item.product }), _jsx(S.TableRowItem, { position: "left", children: `${item.category} ${item.subcategory} ${item.suplier}` }), _jsx(S.TableRowItem, { position: "right", children: `R$ ${item.costPrice}` }), _jsx(S.TableRowItem, { position: "right", children: `R$ ${item.price}` }), _jsx(S.TableRowItem, { position: "center", children: item.quantity }), _jsx(S.TableRowItem, { position: "right", children: `R$ ${item.total}` }), _jsx(S.TableRowItem, { position: "center", children: _jsxs(S.TableProfitItem, { profit: Number((item.percentage * 100).toFixed(1)) > 0, children: [(item.percentage * 100).toFixed(1), " %"] }) }), _jsx(S.TableRowItem, { position: "center", children: formatDate(item.date) }), _jsx(S.TableRowItem, { position: "left", children: item.description }), _jsx(S.TableRowItem, { position: "center", children: _jsx(MenuDropDownSales, { item: item, setState: props.setSaleState }) })] }, item._id));
    });
    return (_jsxs(S.Table, { children: [_jsxs(S.TableRow, { children: [_jsx(S.TableRowTh, { position: "left", children: "Produto" }), _jsx(S.TableRowTh, { position: "left", children: "Categoria" }), _jsx(S.TableRowTh, { position: "right", children: "P. Custo" }), _jsx(S.TableRowTh, { position: "right", children: "Pre\u00E7o" }), _jsx(S.TableRowTh, { position: "center", children: "Qtd" }), _jsx(S.TableRowTh, { position: "right", children: "Total" }), _jsx(S.TableRowTh, { position: "center", children: "Lucro" }), _jsx(S.TableRowTh, { position: "center", children: "Data" }), _jsx(S.TableRowTh, { position: "left", children: "Descri\u00E7\u00E3o" }), _jsx(S.TableRowTh, {})] }), salesList] }));
};
