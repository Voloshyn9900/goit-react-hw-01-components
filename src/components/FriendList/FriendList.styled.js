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

export const List = styled.ul`
  width: 300px;
  margin: 0 auto;
  
  `;

export const Li = styled.li`
  display: flex;
  background-color: ${props => props.theme.colors.lightGray};
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

export const Name = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin-left: 20px;

`;

export const StatusOnline = styled.span`
  display: block;
  margin-left: 12px;
  margin-right: 12px;

  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: lightblue;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;