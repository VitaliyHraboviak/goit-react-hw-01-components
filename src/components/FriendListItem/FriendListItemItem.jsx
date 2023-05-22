import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({
    avatar,
    name,
    isOnline,
    id,
}) => {
    return (<li className={css.item} key={id}>
        <span className={isOnline ? css.onlineStatus : css.offlineStatus}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{ name}</p>
    </li>
    );
};
FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
export default FriendListItem