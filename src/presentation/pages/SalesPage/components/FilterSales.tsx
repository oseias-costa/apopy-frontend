import { SetStateAction } from "react";
import { Sale } from "../../../../domain/entities/sale";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import * as S from "../../../styles/PageStyles/StockStyles/filter-stock.styles";
import { InitialFilterSale, initialFilterStockSale } from "../../../types/pages/sale.types";
import { initialFilterStockState } from "../../../types/pages/stock.types";
import { FilterType } from "../../StockPage/components/FilterType";
import { uniqueDataSales } from "./utils-sales";
// import { FilterType } from "./FilterType";
// import { uniqueData } from "./stock-utils";

interface FilterStateProps {
    sales: Sale[];
    filterState: any;
    setFilterState: React.Dispatch<SetStateAction<InitialFilterSale>>;
    positionButton: any
}

export const FilterSales: React.FC<FilterStateProps> = ({ sales, filterState, setFilterState, positionButton }) => {
    const dataFilters = uniqueDataSales(sales)
    type TypesFilter = "category" | "suplier" | "product" | "month" | "year"

    const FilterItem = ({ title, type }: { title: string, type:  TypesFilter }) => {
        return(
            <S.FilterTypeContainer>
                <S.FilterTypeTitle>{title}</S.FilterTypeTitle>
                <S.FilterList>
                    <FilterType 
                        filterState={filterState} 
                        setFilterState={setFilterState} 
                        arr={dataFilters[type]} 
                        type={type} 
                    />
                </S.FilterList>
            </S.FilterTypeContainer>
        )
    }

    return(
        <S.FilterDropDowFullBody 
            className="filterDropfull" 
            display={filterState.openFilter} 
            onClick={(event) => {
                const target  = event.target as Element
                if(target.className.includes('filterDropfull')){
                    setFilterState({ ...filterState, openFilter: false })
                }
            }
        }>    
            <S.FilterDropdownContainer 
                left={ positionButton.current?.offsetLeft}
                top={ positionButton.current?.offsetTop }
            >
                <S.FilteredDropDowTitleContainer>
                    <S.FilterDropDowTitle>Filtros</S.FilterDropDowTitle>
                    <CloseIcon onClick={() => setFilterState({...filterState, openFilter: false})} />
                </S.FilteredDropDowTitleContainer>
                <S.FilterContainer>
                    <FilterItem title="Categoria" type="category" />
                    <FilterItem title="Fornecedor" type="suplier" />
                    <FilterItem title="Produto" type="product" />
                    <FilterItem title="Mês" type="month" />
                    <FilterItem title="Ano" type="year" />
                </S.FilterContainer>
                <S.ButtonFilterContainer>
                    <S.ButtonCleanFilters
                        onClick={() => setFilterState(initialFilterStockSale)}
                    >
                        Limpar Filtros
                    </S.ButtonCleanFilters>
                </S.ButtonFilterContainer>
            </S.FilterDropdownContainer>
        </S.FilterDropDowFullBody>
    )
}