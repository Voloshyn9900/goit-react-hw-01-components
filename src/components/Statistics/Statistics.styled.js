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

export const Card = styled.div`
  border-radius: ${props => props.theme.radii.md};
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  text-align: center;
  padding-top: 6px;
  width: 100%;
  background-color: white;
`;

export const StatisticsList = styled.ul`
    display: flex;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / ${props => props.$numberOfItems});
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: center;
  font-size: 20px;
  font-weight: 800;

  &:not(:last-child) {
    border-right: solid 2px white;
  }
`;