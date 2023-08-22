import { styled } from "styled-components";

export const SalePanelContainer = styled.div`
  display: flex;
  @media (max-width: 740px) {
    position: relative;
    right: 55px;
  }
`;

export const SalePanelItem = styled.div`
  padding: 15px;
  /* background-color: #d9d9d9;
  background-color: #e5e4e2; */
  background-color: var(--color-gray-hover);
  margin: 4px;
  min-width: 100px;
  border-radius: 4px;
  @media (max-width: 740px) {
    position: relative;
    left: -25px;
  }
`;

export const SalePanelItemText = styled.p`
  color: var(--color-gray-placeholder);
  text-transform: uppercase;
  font-size: 9px;
  border-radius: 2px;
  margin-bottom: 2px;
`;

export const SalePanelItemNumber = styled.p<{ isVisible: boolean }>`
  font-weight: 100;
  font-size: 20px;
  color: var(--color-blue-light);
  display: inline-block;
  border-radius: 2px;
  margin-bottom: 2px;
  background-color: ${(props) =>
    props.isVisible ? "var(--color-blue-light)" : "transparent"};
`;

export const SaleRealSign = styled.p`
  color: var(--color-blue-light);
  font-size: 10px;
  display: inline-block;
  margin-right: 5px;
`;
