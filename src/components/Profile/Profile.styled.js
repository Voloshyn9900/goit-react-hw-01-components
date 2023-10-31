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
  padding-top: 50px;
  width: 100%;
  background-color: white;
`;

export const PersonImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: gray;
`;

export const Username = styled.h2`
  margin-top: 60px;
  text-align: center;

  font-size: 36px;
  font-weight: 700;
`;

export const Tag = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: grey;
`;

export const Location = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: grey;
`;

export const StatisticalList = styled.ul`
  display: flex;
`;

export const StatisticalItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  /* align-items: center; */
  /* width: calc(100% / 3); */
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: lightgray;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: grey;

  &:not(:last-child) {
    border-right: solid 2px black;
  }
`;
