import style from './style.module.scss';

interface HeaderProps {
    children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
    return(
        <header className={style["header-container"]}>
            { children }
        </header>
    );
};
