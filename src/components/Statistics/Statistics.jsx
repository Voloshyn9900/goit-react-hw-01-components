import {
  Section,
  Container,
  Card,
  StatisticsItem,
  StatisticsList,
} from './Statistics.styled';

export function Statistics(props) {
    const numberOfItems = props.item.length;
  return (
    <>
      <Section>
        <Container>
          <Card>
            {props.title && <h2>{props.title}</h2>}
            <StatisticsList>
              {props.item.map(item => {
                return (
                  <StatisticsItem
                    key={item.id}
                    $numberOfItems={numberOfItems}
                    style={{ backgroundColor: getRandomHexColor() }}
                  >
                    <span>{item.label}</span>
                    <span>{item.percentage}%</span>
                  </StatisticsItem>
                );
              })}
            </StatisticsList>
          </Card>
        </Container>
      </Section>
    </>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
