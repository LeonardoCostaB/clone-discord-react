import { useState } from 'react';
import ClassNames from 'classnames';

import style from './style.module.scss';

interface ModalProviderProps {
    children: React.ReactNode
    open: boolean;
}

export function ModalProvider({ children, open }: ModalProviderProps) {
    return (
        <div 
            className={ClassNames(style["modal-overlay"], {
                [style["open"]]: open
            })}
        >
            {children}
        </div>
    );
};
