import Profile from './Profile/Profile';
import user from 'database/user.json';
import Statistics from './Statistics/Statistics';
import data from 'database/data.json';
import FriendList from './FriendList/FriendList';
import friends from 'database/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from 'database/transactions.json'


const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};
export default App