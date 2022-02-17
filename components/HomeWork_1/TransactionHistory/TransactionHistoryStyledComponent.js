import styled from 'styled-components';

export const Table = styled.table`
  display: table;
  margin-left: auto;
  margin-right: auto;
`;

export const TableHeadline = styled.thead`
  background-color: palevioletred;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  :nth-child(odd) {
    /* outline: 1px solid red; */
    background-color: #eee;
  }
`;

export const TableHead = styled.th`
  padding: 10px;
  height: 20px;
  text-align: center;
  color: #fff;
  background-color: #706d97;
`;

export const TableCell = styled.td`
  padding: 10px;
  height: 20px;
  text-align: center;
  min-width: 200px;
  color: #696969;
  border-bottom: 1px solid #eee;
`;