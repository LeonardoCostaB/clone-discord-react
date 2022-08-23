import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { FriendList } from './FriendList';
import { SeekConversation } from './search-seekConversation';

import style from './style.module.scss';

import friendsIcon from '../../../assets/svg/friends-icon.svg';
import nitroIcon from '../../../assets/svg/nitro-icon.svg';
import micIcon from  '../../../assets/svg/mic-icon.svg';
import phoneIcon from  '../../../assets/svg/phone-icon.svg';
import configIcon from  '../../../assets/svg/config-icon.svg';

import perfil01Img from '../../../assets/imgs/foto-perfil.jpg';


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
    const locationUrl = useLocation()

    const pathNameFriend = locationUrl.pathname == "/channels/@me";
    const pathNameStore = locationUrl.pathname == "/store";
    
    return (
        <>
            <div className={style['chat-option']}>
                <SeekConversation />

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

                <FriendList />

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
