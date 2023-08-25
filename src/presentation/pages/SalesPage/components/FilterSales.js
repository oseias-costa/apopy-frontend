import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import * as S from "../../../styles/PageStyles/StockStyles/filter-stock.styles";
import { initialFilterStockSale } from "../../../types/pages/sale.types";
import { FilterType } from "../../StockPage/components/FilterType";
import { uniqueDataSales } from "./utils-sales";
export const FilterSales = ({ sales, filterState, setFilterState, positionButton, }) => {
    var _a, _b;
    const dataFilters = uniqueDataSales(sales);
    const FilterItem = ({ title, type }) => {
        return (_jsxs(S.FilterTypeContainer, { children: [_jsx(S.FilterTypeTitle, { children: title }), _jsx(S.FilterList, { children: _jsx(FilterType, { filterState: filterState, setFilterState: setFilterState, arr: dataFilters[type], type: type }) })] }));
    };
    return (_jsx(S.FilterDropDowFullBody, { className: "filterDropfull", display: filterState.openFilter, onClick: (event) => {
            const target = event.target;
            if (target.className.includes("filterDropfull")) {
                setFilterState(Object.assign(Object.assign({}, filterState), { openFilter: false }));
            }
        }, children: _jsxs(S.FilterDropdownContainer, { left: (_a = positionButton.current) === null || _a === void 0 ? void 0 : _a.offsetLeft, top: (_b = positionButton.current) === null || _b === void 0 ? void 0 : _b.offsetTop, children: [_jsxs(S.FilteredDropDowTitleContainer, { children: [_jsx(S.FilterDropDowTitle, { children: "Filtros" }), _jsx(CloseIcon, { onClick: () => setFilterState(Object.assign(Object.assign({}, filterState), { openFilter: false })) })] }), _jsxs(S.FilterContainer, { children: [_jsx(FilterItem, { title: "Categoria", type: "category" }), _jsx(FilterItem, { title: "Fornecedor", type: "suplier" }), _jsx(FilterItem, { title: "Produto", type: "product" }), _jsx(FilterItem, { title: "M\u00EAs", type: "month" }), _jsx(FilterItem, { title: "Ano", type: "year" })] }), _jsx(S.ButtonFilterContainer, { children: _jsx(S.ButtonCleanFilters, { onClick: () => setFilterState(initialFilterStockSale), children: "Limpar Filtros" }) })] }) }));
};
