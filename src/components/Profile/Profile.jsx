import s from './Profile.module.css';

const Profile = ({name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
  <div className={s.profileWrapper}>
    <div className={s.imgWrapper}>
        <img
          src={image}
          alt="User avatar"
        />
    </div>
    <p className={s.name}>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={s.statsList}>
    <li>
      <span>Followers</span>
      <span className={s.likes}>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span className={s.likes}>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span className={s.likes}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile