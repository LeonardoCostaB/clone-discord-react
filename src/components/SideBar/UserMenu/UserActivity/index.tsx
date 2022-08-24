import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import style from './style.module.scss';

import friendsIcon from '../../../../assets/svg/friends-icon.svg';
import nitroIcon from '../../../../assets/svg/nitro-icon.svg';

export function UserActivity() {
    const locationUrl = useLocation()

    const pathNameFriend = locationUrl.pathname == "/channels/@me";
    const pathNameStore = locationUrl.pathname == "/store";
    
    return (
        <div className={style['container-buttonOptions']}>
            <Link
                className={classNames(style['buttonOptions-friends'], {
                    [style.active]: pathNameFriend
                }) }
                to="/channels/@me"
            >
                <img src={friendsIcon} alt="Amigos" />
    
                Amigos
            </Link>

            <Link
                className={classNames(style['buttonOptions-nitro'], {
                    [style.active]: pathNameStore
                })}
                to="/store"
            >
                <img src={nitroIcon} alt="Nitro" />
                Nitro
            </Link>
        </div>

    );
};
