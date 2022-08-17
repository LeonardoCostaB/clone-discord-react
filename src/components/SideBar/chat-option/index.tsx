import { Plus } from 'phosphor-react';
import { SeekConversation } from './search-seekConversation';

import style from './style.module.scss';

import friendsIcon from '../../../assets/svg/friends-icon.svg';
import nitroIcon from '../../../assets/svg/nitro-icon.svg';
import closeIcon from  '../../../assets/svg/close-icon.svg';
import micIcon from  '../../../assets/svg/mic-icon.svg';
import phoneIcon from  '../../../assets/svg/phone-icon.svg';
import configIcon from  '../../../assets/svg/config-icon.svg';

import perfil01Img from '../../../assets/imgs/foto-perfil.jpg';
import perfil02Img from '../../../assets/imgs/teste-perfil.jpg';

const configUser = {
    mic: {
        src: micIcon,
        alt: "Clique aqui para desativar o microfone"
    },
    phone: {
        src: phoneIcon,
        alt: "Clique aqui para desativar todos os sons"
    },
    config: {
        src: configIcon,
        alt: "Clique aqui para acessar suas configurações"
    }
}

export function ChatOption() {
    return (
        <>
            <div className={style['chat-option']}>
                <SeekConversation />

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
                            </a>
                        </li>

                        <li>
                            <a href="" className={style.friend}>
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
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={style['user-config']}>
                    <div className={style['user-identification']}>
                        <img
                            src={perfil01Img}
                            alt="Imagem de perfil Leonardo_costa"
                            className={'photo-user'}
                        />
            
                        <div className={style['userName-container']}>
                            <span className={style['name-identification']}>
                                leonardo_c...
                            </span>
            
                            <span className={style['id']}>
                                #9773
                            </span>
                        </div>
                    </div>

                    <div className={style['app-config']}>
                        {
                            Object.entries(configUser).map(([ key, value ]) => {
                                return (
                                    <button
                                        key={key}
                                        className={style["button-config"]}
                                    >
                                        <img
                                            src={value.src}
                                            alt={value.alt}
                                        />
                                    </button>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>

    );
};
