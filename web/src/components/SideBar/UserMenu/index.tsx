import { SeekConversation } from './search-seekConversation';
import { UserActivity } from './UserActivity';
import { FriendList } from './FriendList';
import { UserConfig } from './UserConfig';

import style from './style.module.scss';

export function UserMenu() {  
    return (
        <div className={style['user-menu']}>
            <SeekConversation />

            <UserActivity />
            
            <FriendList />

            <UserConfig />
        </div>
    );
};
