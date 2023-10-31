import {
  Section,
  Container,
  WrapCard,
  TableRow,
  TableCell,
  Table,
  TableHeader,
  HeaderRow,
  HeaderCell,
} from './TransactionHistory.styled';

const TransactionRow = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </TableRow>
  );
};

const TransactionTable = ({ transactions }) => {
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

export function TransactionHistory({ transactions }) {
  return (
    <>
      <Section>
        <Container>
          <WrapCard>
            <TransactionTable transactions={transactions} />
          </WrapCard>
        </Container>
      </Section>
    </>
  );
}
