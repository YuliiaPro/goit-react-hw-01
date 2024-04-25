import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="100" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(
          css.status,
          isOnline === true ? css.online : css.offline
        )}
      >
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
}
