import { Plus } from 'phosphor-react';
import style from './style.module.scss';

import friendsIcon from '../../../assets/svg/friends-icon.svg';
import nitroIcon from '../../../assets/svg/nitro-icon.svg';
import perfil01Img from '../../../assets/imgs/foto-perfil.jpg';
import perfil02Img from '../../../assets/imgs/teste-perfil.jpg';

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

            <div className={style['container-buttonOptions']}>
                <a 
                    className={style['buttonOptions-friends']}
                    href="#"
                >
                    <img src={friendsIcon} alt="Amigos" />
                    
                    Amigos
                </a>

                <a 
                    className={style['buttonOptions-nitro']}
                    href="#"
                >
                    <img src={nitroIcon} alt="Nitro" />

                    Nitro
                </a>
            </div>

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
                        <a href="" className={style.friend}>
                            <img
                                src={perfil01Img}
                                alt="foto de gustavo"
                                className={style['photo-user']}
                            />

                            <span className={style['user-name']}>
                                Gustavo
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="" className={style.friend}>
                            <img
                                src={perfil02Img}
                                alt="foto de Pedro"
                                className={style['photo-user']}
                            />

                            <span className={style['user-name']}>
                                Pedro
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={style['user-config']}>

            </div>
        </div>
    );
};
