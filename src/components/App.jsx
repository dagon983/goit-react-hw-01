import Profile from "./Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import Friendlist from "./FriendList/Friendlist";
import TransactionHistory from "./Transactions/TransactionHistory";



const App = () => {
    return (
        <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <Friendlist friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    )
}

export default App;