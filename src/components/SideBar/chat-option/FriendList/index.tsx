import { Link } from 'react-router-dom';

import { users } from "../../../../../users.json";

import style from './style.module.scss';

import { Plus } from 'phosphor-react';
import closeIcon from  '../../../../assets/svg/close-icon.svg';

export function FriendList() {
    return (
        <div className={style['container-chatFriends']}>
            <div className={style.title}>
                <h2>
                    Mensagens diretas
                </h2>

                <button className={style.createMD} type='button'>
                    <Plus
                        className={style['createMD-icon']}
                        color='#DCDDDE'
                        weight='bold'
                        cursor="pointer"
                        size={15}
                    />
                </button>
            </div>

            <ul className={style['friends-list']}>
                {users.map(item => {
                    return (
                        <li key={item.id}>
                            <Link 
                                to={`/channels/@me/${item.id}`}
                                className={style.friend}
                            >
                                <img
                                    src={item.photo}
                                    alt={`foto de ${item.name}`}
                                    className={'photo-user'}
                                />
                                <span className={style['user-name']}>
                                    { item.name }
                                </span>

                                <img
                                    src={closeIcon}
                                    alt="Clique aqui para excluir essa mensagem"
                                    className={style['delete-chat']}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
