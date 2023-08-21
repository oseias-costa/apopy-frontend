import { SetStateAction } from "react";
import { Stock } from "../../../../domain/entities/stock"
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import * as S from "../../../styles/PageStyles/StockStyles/filter-stock.styles";
import { InitialFilterStock, initialFilterStockState } from "../../../types/pages/stock.types";
import { FilterType } from "./FilterType";
import { uniqueData } from "./stock-utils";

interface FilterStateProps {
    stock: Stock[];
    filterState: any;
    setFilterState: React.Dispatch<SetStateAction<InitialFilterStock>>;
    positionButton: any
}

export const FilterStock: React.FC<FilterStateProps> = ({ stock, filterState, setFilterState, positionButton }) => {
    const dataFilters = uniqueData(stock)
    type TypesFilter = "category" | "suplier" | "product"

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
                </S.FilterContainer>
                <S.ButtonFilterContainer>
                    <S.ButtonCleanFilters
                        onClick={() => setFilterState(initialFilterStockState)}
                    >
                        Limpar Filtros
                    </S.ButtonCleanFilters>
                </S.ButtonFilterContainer>
            </S.FilterDropdownContainer>
        </S.FilterDropDowFullBody>
    )
}