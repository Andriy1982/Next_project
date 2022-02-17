import Profile from '../../components/HomeWork_1/Profile';
import Statistics from '../../components/HomeWork_1/Statistics';
import FriendList from '../../components/HomeWork_1/FriendList';

import transactions from '../../components/HomeWork_1/datajson/transactions.json';

import TransactionHistory from '../../components/HomeWork_1/TransactionHistory';

import user from '../../components/HomeWork_1/datajson/user.json';
import statisticalData from '../../components/HomeWork_1/datajson/statistical-data.json';
import friends from '../../components/HomeWork_1/datajson/friends.json';

const GoItReact = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
export default GoItReact;