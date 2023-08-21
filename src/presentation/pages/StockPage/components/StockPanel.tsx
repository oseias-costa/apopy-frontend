import { Eye } from "../../../assets/icons/Eye";
import { useState } from "react";
import * as S from "../../../styles/PageStyles/SaleStyles/salePanel.style";
import { Stock } from "../../../../domain/entities/stock";

export const StockPanel: React.FC<{ stock: Stock[]; className: string }> = ({
  stock,
  className,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const total = stock.reduce((acc, val) => acc + val.total, 0);

  return (
    <S.SalePanelContainer className={className}>
      <Eye isVisible={isVisible} setIsVisible={setIsVisible} />
      <S.SalePanelItem>
        <S.SalePanelItemNumber isVisible={isVisible}>
          <S.SaleRealSign>R$</S.SaleRealSign>
          {total.toFixed(2)}
        </S.SalePanelItemNumber>
        <S.SalePanelItemText>Total</S.SalePanelItemText>
      </S.SalePanelItem>
      <S.SalePanelItem>
        <S.SalePanelItemNumber isVisible={isVisible}>
          {stock.length}
        </S.SalePanelItemNumber>
        <S.SalePanelItemText>Quantidade</S.SalePanelItemText>
      </S.SalePanelItem>
    </S.SalePanelContainer>
  );
};
