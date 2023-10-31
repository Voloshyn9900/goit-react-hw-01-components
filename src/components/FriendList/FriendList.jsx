import {
  Section,
  Container,
  WrapCard,
  List,
  FriendItem,
  Name,
  StatusOnline,
} from './FriendList.styled';

export function FriendList({ item }) {
  return (
    <>
      <Section>
        <Container>
          <WrapCard>
            <List>
              {item.map(({ avatar, name, isOnline,id }) => {
                return (
                  <FriendItem key={id}>
                    <StatusOnline $isOnline={isOnline}>
                      {/* {isOnline ? 'Online' : 'Offline'} */}
                    </StatusOnline>
                    <img src={avatar} alt={`avatar of ${name}`} width="40px" />
                    <Name>{name}</Name>
                  </FriendItem>
                );
              })}
            </List>
          </WrapCard>
        </Container>
      </Section>
    </>
  );
};
