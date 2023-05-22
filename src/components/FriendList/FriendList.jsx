import  PropTypes  from 'prop-types';
import FriendListItem from "components/FriendListItem/FriendListItemItem";
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
          {friends.map(({
              id,
              isOnline,
              avatar,
              name
          }) => {
        return (
          <FriendListItem
            key={id}
            id={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
