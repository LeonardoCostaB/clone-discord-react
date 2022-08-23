import { Header } from '../Header';

import style from './style.module.scss';

import wumpus from "../../assets/svg/wumpus.svg";
import friendsIcon from "../../assets/svg/friends-icon.svg";

const buttonsNav = {
    available: {
        name: "Disponível",
        class: "navigation-button"
    },

    all: {
        name: "Todos",
        class: "navigation-button"
    },

    pending: {
        name: "Pendente",
        class: "navigation-button"
    },

    blocked: {
        name: "Bloqueado",
        class: "navigation-button"
    },

    addFriend: {
        name: "Adicionar amigo",
        class: "add-friends"
    }
}

export function Friends() {
    return(
        <main className="main">
            <Header>
                <span className="header-title">
                    <img src={friendsIcon} alt="icone de um usuário acenando" />
                    
                    <strong>
                        Amigos
                    </strong>
                </span>

                <div className={style.divider} />

                <nav>
                    <ul className={style["navigation-list"]}>
                        { Object.entries(buttonsNav).map(([ key, value ]) => {
                            return <li key={key} className={style[`${value.class}`]}>
                                <button type='button'>
                                    { value.name }
                                </button>     
                            </li>
                        })}
                    </ul>
                </nav>
            </Header>
            
            <div className={style["friends-container"]}>
                <div className={style.wumpus}>
                    <img 
                        src={wumpus}
                        alt="" 
                    />

                    <span>Ninguém por perto para brincar com Wumpus.</span>
                </div>

                <div className={style["active-friend"]}>
                    <h5 className={style["title-not-friend"]}>Ativo agora</h5>

                    <p className={style["not-friend"]}>
                        <strong>Por enquanto está quieto...</strong>
                        Quando um(a) amigo(a) começa uma atividade, como jogar um jogo ou bater papo por voz, mostraremos aqui!
                    </p>
                </div>
            </div>
        </main>
    );
};
