import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #e4eaf0;
`;

export const Container = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const WrapCard = styled.div`
  border-radius: ${props => props.theme.radii.md};
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  background-color: white;
`;

export const TableRow = styled.tr`
  background-color: #f5f5f5;
  &:hover {
    background-color: #ddd;
  }
`;

export const TableCell = styled.td`
  text-align: center;
  padding: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const TableHeader = styled.thead`
  background-color: #333;
  color: #fff;
`;

export const HeaderRow = styled.tr``;

export const HeaderCell = styled.th`
  padding: 10px;
`;
