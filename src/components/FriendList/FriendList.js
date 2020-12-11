import PropTypes from 'prop-types';
import s from './friendList.module.css';

export default function FriendList({friends}) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => {
                return (
                    <li className={s.item} key={friend.id}>
                        <span className={friend.isOnline ? `${s.status} ${s.true}` : `${s.status} ${s.false}`}></span>
                        <img className={s.avatar} src={friend.avatar} alt={friends.name} width="48" height="48"/>
                        <p className={s.name}>{friend.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}