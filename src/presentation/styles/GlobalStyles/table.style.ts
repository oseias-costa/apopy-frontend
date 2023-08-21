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
`;

export const TableRowItem = styled.td<{ position?: string }>`
  font-size: 14px;
  color: var(--color-gray-text);
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: ${(props) => props.position};
`;

export const TableThead = styled.thead`
  background-color: #e5e4e2;
`;

export const TableRowTh = styled.th<{ position?: string }>`
  background-color: #e5e4e2;
  font-size: 15px;
  color: var(--color-gray-text);
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
  color: #828282;
  text-align: ${(props) => props.position};
`;
