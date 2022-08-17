import classNames from 'classnames';
import { useState } from 'react';

import style from './style.module.scss';

export function SeekConversation() {
    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <>
            <div className={style['container-seekConversation']}>
                <button
                    type='button'
                    className={style['seek-conversation']}
                    onClick={() => setIsOpen(true)}
                >
                    Encontre ou comece uma conversa
                </button>
            </div>

            {isOpen && (
                <div 
                    className={classNames(style["modal-overlay"], {
                        [style["open"]]: isOpen,
                    })}
                    onClick={() => setIsOpen(false)}
                >
                    <div className={style['modal-wrapper']}>
                        <span className={style['title-modal']}>
                            Buscar servidores, canais ou mensagens diretas
                        </span>
    
                        <div className={style['searchMyProfile']}>
                            <input 
                                type="text"
                                placeholder="Aonde você gostaria de ir?"
                                className={style["search-myConversation"]}
                            />
    
                            <div className={style["channels-mentions"]}>
                                <ul className={style["container-channels-entions"]}>
                                    <li className={style["channels-content"]}>
                                        canais anteriores
    
                                        <ul className={style["channels-list"]}>
                                            <li className={style["channels"]}>
    
                                            </li>
                                        </ul>
                                    </li>
    
                                    <li className={style["mentions-content"]}>
                                        menções
    
                                        <ul className={style["mentions-list"]}>
                                            <li className={style["mentions"]}>
    
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
    
                                <div className={style["tip-search"]}>
                                    <span className={style["tip"]}>
                                        <strong>Fica a dica:</strong> Escreva <span className={style["emphasis"]}>@</span> <span className={style["emphasis"]}>#</span> <span className={style["emphasis"]}>!</span> <span className={style["emphasis"]}>*</span> no começo da caixa de pesquisa para limitar o resultado. <a href="#" target="_blank">Saiba mais</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}
