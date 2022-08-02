import style from './style.module.scss';

import discordLogoIcon from '../../../assets/svg/discord-icon.svg';
import { Compass, Plus, DownloadSimple } from 'phosphor-react';

const listConversations = {
    start: {
        logo: {
            src: discordLogoIcon,
            alt: "logo discord"
        },
        value: {
            class: "discord-container",
            link: "start"
        }
    },

    addNewServer: {
        logo: {
            src: <Plus size={24} color="#ffffff" weight='fill' />,
            alt: "Adicionar um servidor"
        },
        value: {
            class: "green-container",
            link: "newServer"
        }
    },

    explorerServerPublic: {
        logo: {
            src: <Compass size={24} color="#ffffff" weight='fill' />,
            alt: "Explore servidores públicos"
        },
        value: {
            class: "green-container",
            link: "serverPublic"
        }
    },

    downloadApps: {
        logo: {
            src: <DownloadSimple size={24} color="#ffffff" weight='fill' />,
            alt: "Explore servidores públicos"
        },
        value: {
            class: "green-container",
            link: "download"
        }
    }

}

export function Conversations() {
    return (
        <div className={style.conversations}>
            {
                Object.entries(listConversations).map(([key, value]) => {
                    return <button
                        key={key}
                        type='button'
                        className={style[value.value.class]}
                    >
                        {
                            value.logo.src == discordLogoIcon ? (
                                <img 
                                    src={value.logo.src} 
                                    alt={value.logo.alt}
                                    className={style['discord-logo']}
                                />
                            ) :
                            (
                                value.logo.src
                            )
                        }
                    </button>
                })
            }
        </div>
    );
};