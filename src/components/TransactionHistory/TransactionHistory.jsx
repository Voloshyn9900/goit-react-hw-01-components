import {
  Section,
  Container,
  WrapCard,
} from './TransactionHistory.styled';

import { TransactionTable } from './TransactionTable';

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
