import { GlobalStyle } from './Global.styled';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        color: '#010101',
      }}
    >
      {' '}
      <Profile item={user}></Profile>
      <Statistics title="Upload stats" item={data}></Statistics>
      <FriendList item={friends}></FriendList>
      <TransactionHistory transactions={transactions}></TransactionHistory>
      <GlobalStyle></GlobalStyle>
    </div>
  );
};
