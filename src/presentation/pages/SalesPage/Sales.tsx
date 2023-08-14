import { useState } from "react";
import { useGetSales } from "../../hooks/useGetSales";
import * as S from "../../styles/GlobalStyles/titleWithButton.style";
import { SalesContainerPage } from "../../styles/PageStyles/SaleStyles/sales.style";
import { initialSaleState, SaleState } from "../../types/pages/sale.types";
import { ReverseToStock } from "./components/ReverseToStock";
import { SalesRow } from "./components/SalesRow";

export const Sales = () => {
  const { sales } = useGetSales();
  const [saleState, setSaleState] = useState<SaleState>(initialSaleState);

  return (
    <SalesContainerPage>
      <S.TitleWithButton>
        <S.TitleSection>Vendas</S.TitleSection>
      </S.TitleWithButton>
      <SalesRow sales={sales} setSaleState={setSaleState} />
      <ReverseToStock saleState={saleState} setSaleState={setSaleState} />
    </SalesContainerPage>
  );
};
