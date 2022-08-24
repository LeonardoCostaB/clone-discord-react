import style from './style.module.scss';

import perfil01Img from '../../../../assets/imgs/foto-perfil.jpg';
import micIcon from  '../../../../assets/svg/mic-icon.svg';
import phoneIcon from  '../../../../assets/svg/phone-icon.svg';
import configIcon from  '../../../../assets/svg/config-icon.svg';

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

export function UserConfig() {
    return (
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
    );
};
