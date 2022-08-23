import { Link } from 'react-router-dom';

import style from './style.module.scss';

import { Plus } from 'phosphor-react';
import closeIcon from  '../../../../assets/svg/close-icon.svg';

import perfil01Img from '../../../../assets/imgs/foto-perfil.jpg';
import perfil02Img from '../../../../assets/imgs/teste-perfil.jpg';

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
                <li>
                    <Link 
                        to="/channels/@me/121231545148415154131" 
                        className={style.friend}
                    >
                        <img
                            src={perfil01Img}
                            alt="foto de gustavo"
                            className={'photo-user'}
                        />
                        <span className={style['user-name']}>
                            Gustavo
                        </span>
                        <img
                            src={closeIcon}
                            alt="Clique aqui para excluir essa mensagem"
                            className={style['delete-chat']}
                        />
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/channels/@me/121231545148415154132"
                        className={style.friend}
                    >
                        <img
                            src={perfil02Img}
                            alt="foto de Pedro"
                            className={'photo-user'}
                        />
                        <span className={style['user-name']}>
                            Pedro
                        </span>
                        <img
                            src={closeIcon}
                            alt="Clique aqui para excluir essa mensagem"
                            className={style['delete-chat']}
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
};
