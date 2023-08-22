import { styled } from "styled-components";

export const Table = styled.table`
  font-family: var(--font-primary);
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow-x: auto;

  .Thead {
    margin-bottom: 20px;
  }
`;

export const TableRow = styled.tr`
  width: auto;

  &:hover{
    background-color: var(--color-gray-hover);
  }
`;

export const TableRowItem = styled.td<{ position?: string }>`
  font-size: 13px;
  color: var(--color-gray-text);
  padding-left: 18px;
  padding-right: 18px;
  text-align: ${(props) => props.position};
  border-bottom: 1px solid #E7E7E7;
`;

export const TableThead = styled.thead`
  background-color: #e5e4e2;
`;

export const TableRowTh = styled.th<{ position?: string }>`
  /* background-color: #e5e4e2; */
  font-size: 14px;
  color: var(--color-gray-text);
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
  color: #828282;
  text-align: ${(props) => props.position};
  border-bottom: 1px solid #E7E7E7;
`;

export const TableProfitItem = styled.p<{profit: boolean}>`
  /* background-color: #f1adb5; */
  background-color: ${props => props.profit ? '#8DDFEE' : '#ffe1e1' }; 
  border-radius: 3px;
  padding: 2px;
  font-size: 12px;
  color: ${props => props.profit ? '012E40' : '#fa5e5e'}; 
`