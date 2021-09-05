import defaultImage from "./default.png";
import s from "./UserProfile.module.css";

console.log(defaultImage);

const UserProfile = (props) => {
  const {
    name,
    tag,
    location,
    avatar = defaultImage,
    statsFollowers,
    statsViews,
    statsLikes,
  } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{statsFollowers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{statsViews}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{statsLikes}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
