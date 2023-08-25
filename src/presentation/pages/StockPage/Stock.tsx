import { useGetStock } from "../../hooks/useGetStock";
import * as S from "../../styles/GlobalStyles/titleWithButton.style";
import { StockRow } from "./components/StockRow";
import { useRef, useState } from "react";
import { StockContainerPage } from "../../styles/PageStyles/StockStyles/stock-row.styles";
import { initialFilterStockState, initialStockState } from "../../types/pages/stock.types";
import { StockModal } from "./components/StockModal";
import { FilterStock } from "./components/FilterStock";
import { filterStock } from "./components/stock-utils";
import { ButtonOpenFilter } from "../../styles/PageStyles/StockStyles/filter-stock.styles";
import { FilterTag } from "./components/FilterTag";
import { FilterTagsList } from "../../styles/PageStyles/StockStyles/filter-tag";
import { StockPanel } from "./components/StockPanel";
import { LoadingComponent } from "../../components/global/Loading/LoadingComponent";

export const Stock = () => {
  const refButtonFilter = useRef(null);
  const { stock, loading } = useGetStock();
  const [ filteredStock, setFilteredStock ] = useState(initialFilterStockState);
  const [ stockState, setStockState ] = useState(initialStockState);
  const stockAfterFilter = filterStock(stock, filteredStock);

  return (
    <StockContainerPage>
      <S.TitleWithButtonPanel>
        <S.TitleSectionWithPanel>
          Estoque
          <S.ButtonCreateItem 
            onClick={() =>
              setStockState({ ...stockState, type: "create", openModal: true })
            }
          >
            Adicionar Item
          </S.ButtonCreateItem>
        </S.TitleSectionWithPanel>
        <StockPanel className="stockPanel" stock={stockAfterFilter} />
      </S.TitleWithButtonPanel>
      <FilterTagsList>
        <ButtonOpenFilter
          ref={refButtonFilter}
          onClick={() =>
            setFilteredStock({ ...filteredStock, openFilter: true })
          }
        >
          Filtrar Estoque
        </ButtonOpenFilter>
        <FilterTag
          setFilteredStock={setFilteredStock}
          filteredStock={filteredStock}
        />
      </FilterTagsList>
      <FilterStock
        stock={stock}
        filterState={filteredStock}
        setFilterState={setFilteredStock}
        positionButton={refButtonFilter}
      />
      { loading ? (
         <LoadingComponent />
      ):(
         <StockRow stockList={stockAfterFilter} setStockState={setStockState} />
      )}
      <StockModal stockState={stockState} setStockState={setStockState} />
    </StockContainerPage>
  );
};
