import style from './style.module.scss';

export function ChatOption() {
    return (
        <div className={style['chat-option']}>
            <div className={style['container-seekConversation']}>
                <button
                    type='button'
                    className={style['seek-conversation']}
                >
                    Encontre ou comece uma conversa
                </button>
            </div>
        </div>
    );
};
