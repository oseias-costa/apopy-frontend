import { useRef, useState } from "react";
import { useGetSales } from "../../hooks/useGetSales";
import * as S from "../../styles/GlobalStyles/titleWithButton.style";
import { SalesContainerPage } from "../../styles/PageStyles/SaleStyles/sales.style";
import { ButtonOpenFilter } from "../../styles/PageStyles/StockStyles/filter-stock.styles";
import { FilterTagsList } from "../../styles/PageStyles/StockStyles/filter-tag";
import { initialFilterStockSale, initialSaleState, SaleState } from "../../types/pages/sale.types";
import { FilterTag } from "../StockPage/components/FilterTag";
import { FilterSales } from "./components/FilterSales";
import { ReverseToStock } from "./components/ReverseToStock";
import { SalesRow } from "./components/SalesRow";
import { filterSales } from "./components/utils-sales";

export const Sales = () => {
  const { sales } = useGetSales();
  const [ filteredSales, setFilteredSales ] = useState(initialFilterStockSale)
  const refButtonFilter = useRef(null)
  const [saleState, setSaleState] = useState<SaleState>(initialSaleState);
  const salesAfterFilter = filterSales(sales, filteredSales)

  return (
    <SalesContainerPage>
      <S.TitleWithButton>
        <S.TitleSection>Vendas</S.TitleSection>
      </S.TitleWithButton>
      <FilterTagsList>
                    <ButtonOpenFilter 
                        ref={refButtonFilter} 
                        onClick={() => setFilteredSales({...filteredSales, openFilter: true})}
                        >  
                        Filtrar Vendas
                    </ButtonOpenFilter>
                    <FilterTag setFilteredStock={setFilteredSales} filteredStock={filteredSales} />
                </FilterTagsList>
            <FilterSales
                sales={sales} 
                filterState={filteredSales}
                setFilterState={setFilteredSales} 
                positionButton={refButtonFilter}
            />
      <SalesRow sales={salesAfterFilter} setSaleState={setSaleState} />
      <ReverseToStock saleState={saleState} setSaleState={setSaleState} />
    </SalesContainerPage>
  );
};
