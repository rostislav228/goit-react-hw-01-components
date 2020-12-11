import user from './propsData/user.json';
import statisticalData from './propsData/statistical-data.json';
import friends from './propsData/friends.json';
import transactions from './propsData/transactions.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics.js';
import FriendList from './components/FriendList/FriendList.js';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.js';


export default function App() {
  return (
    <div className="div">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}