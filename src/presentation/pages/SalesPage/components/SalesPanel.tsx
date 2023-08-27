import { Sale } from "../../../../domain/sale"; 
import { Eye } from "../../../assets/icons/Eye";
import { useEffect, useState } from "react";
import * as S from "../../../styles/PageStyles/SaleStyles/salePanel.style";

export const SalesPanel: React.FC<{ sales: Sale[] }> = ({ sales }) => {
  const getVisibleAccount = localStorage.getItem('apopyVisibleAccount')
  const setVisibleAccount = getVisibleAccount === 'true' ? true : false
  const [isVisible, setIsVisible] = useState<boolean>(setVisibleAccount);
  const total = sales.reduce((acc, val) => acc + val.total, 0);

  return (
    <S.SalePanelContainer>
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
          {sales.length}
        </S.SalePanelItemNumber>
        <S.SalePanelItemText>Quantidade</S.SalePanelItemText>
      </S.SalePanelItem>
    </S.SalePanelContainer>
  );
};
