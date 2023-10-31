import {
  Table,
  TableHeader,
  HeaderRow,
  HeaderCell,
} from './TransactionHistory.styled';

import { TransactionRow } from './TransactionRow';

export const TransactionTable = ({ transactions }) => {
  return (
    <Table>
      <TableHeader>
        <HeaderRow>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Currency</HeaderCell>
        </HeaderRow>
      </TableHeader>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </Table>
  );
};