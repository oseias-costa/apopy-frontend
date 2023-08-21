import { styled } from "styled-components";
import { Sale } from "../../../../domain/entities/sale";
import { Eye } from "../../../assets/icons/Eye";
import { useState } from "react";
import * as S from "../../../styles/PageStyles/SaleStyles/salePanel.style";

export const SalesPanel: React.FC<{ sales: Sale[] }> = ({ sales }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
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
