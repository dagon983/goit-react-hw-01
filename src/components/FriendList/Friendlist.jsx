import FriendListItem from "./FriendListItem";
import s from './Friendlist.module.css';

const Friendlist = ({friends}) => {
  return (
    <ul className={s.friendList}>
	{friends.map(item => {
        return (<li className={s.listItem} key={item.id}>
          <FriendListItem 
          avatar={item.avatar}
          name={item.name} 
          isOnline={item.isOnline}/>
      </li>)
    })}
	
</ul>
  )
}

export default Friendlist