import {
  TableRow,
  TableCell,
} from './TransactionHistory.styled';


export const TransactionRow = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </TableRow>
  );
};