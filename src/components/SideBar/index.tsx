import { Conversations } from './Conversations';
import { ChatOption } from './chat-option';

import style from './style.module.scss';

export function SideBar() {
    return (
        <aside  className={style['side-bar']}>
            <Conversations />
            <ChatOption />
        </aside>
    );
};
