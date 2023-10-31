import { Name, StatusOnline, Li } from './FriendList.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <Li>
        <StatusOnline $isOnline={isOnline}></StatusOnline>
        <img src={avatar} alt={`avatar of ${name}`} width="40px" />
        <Name>{name}</Name>
      </Li>
    </>
  );
}
