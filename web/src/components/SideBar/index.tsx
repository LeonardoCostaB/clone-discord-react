import { Conversations } from './Conversations';
import { UserMenu } from './UserMenu';

import style from './style.module.scss';

export function SideBar() {
    return (
        <aside  className={style['side-bar']}>
            <Conversations />
            <UserMenu />
        </aside>
    );
};
