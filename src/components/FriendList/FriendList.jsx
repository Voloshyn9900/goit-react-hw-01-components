import {
  Section,
  Container,
  WrapCard,
  List,
} from './FriendList.styled';

import { FriendListItem } from './FriendListItem';

export function FriendList({ item }) {
  return (
    <>
      <Section>
        <Container>
          <WrapCard>
            <List>
              {item.map(({ avatar, name, isOnline, id }) => {
                return (
                  <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                  />
                );
              })}
            </List>
          </WrapCard>
        </Container>
      </Section>
    </>
  );
};
