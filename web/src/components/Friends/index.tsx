import { useState } from 'react';
import classNames from 'classnames';

import { Header } from '../Header';
import { WumpusMsg } from './WumpusMsg';
import { ActiveFriendList } from './ActiveFriendList';

import style from './style.module.scss';

import wumpus from "../../assets/svg/wumpus.svg";
import wumpusPending from "../../assets/svg/wumpus-pending.svg";
import wumpusBlocked from "../../assets/svg/wumpus-blocked.svg";
import wumpusAdd from "../../assets/svg/wumpus-add.svg";
import friendsIcon from "../../assets/svg/friends-icon.svg";

const buttonsNav = {
    available: {
        name: "Disponível",
        class: "navigation-button",
        link: "available"
    },

    all: {
        name: "Todos",
        class: "navigation-button",
        link: "all"
    },

    pending: {
        name: "Pendente",
        class: "navigation-button",
        link: "pending"
    },

    blocked: {
        name: "Bloqueado",
        class: "navigation-button",
        link: "blocked"
    },

    addFriend: {
        name: "Adicionar amigo",
        class: "add-friends",
        link: "addFriend"
    }
}

export function Friends() {
    const [ menuLinkValue, setMenuLinkValue ] = useState<string>("available")

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
                            const validateValueLink = value.link == menuLinkValue

                            return <li 
                                key={key} 
                                className={classNames(style["navigation-button"], {
                                    [style.sessionActive]: validateValueLink,
                                    [style[value.class]]: value.class === "add-friends"
                                })}
                                onClick={() => setMenuLinkValue(value.link)}
                            >
                                <button type='button'>
                                    { value.name }
                                </button>     
                            </li>
                        })}
                    </ul>
                </nav>
            </Header>

            { menuLinkValue == "available" && (
                <div className={style["friends-container"]}>
                    <WumpusMsg
                        img={wumpus}
                        msg="Ninguém por perto para brincar com Wumpus"
                    />

                    <ActiveFriendList />
                </div>
            )}

            { menuLinkValue == "all" && (
                <div className={style["friends-container"]}>
                    <WumpusMsg
                        img={wumpus}
                        msg="Ninguém por perto para brincar com Wumpus"
                    />

                    <ActiveFriendList />
                </div>

            )}

            { menuLinkValue == "pending" && (
                <div className={style["friends-container"]}>
                    <WumpusMsg
                        img={wumpusPending}
                        msg="Não há pedidos de amizade pendentes. Fique com o Wumpus enquanto isso."
                    />

                    <ActiveFriendList />
                </div>
            )}

            { menuLinkValue == "blocked" && (
                <div className={style["friends-container"]}>
                    <WumpusMsg
                        img={wumpusBlocked}
                        msg="Você não pode desbloquear o Wumpus."
                    />

                    <ActiveFriendList />
                </div>
            )}

            { menuLinkValue == "addFriend" && (
                <div className={style["friends-container"]}>
                    <WumpusMsg
                        img={wumpusAdd}
                        msg="Ninguém por perto para brincar com Wumpus"
                    />

                    <ActiveFriendList />
                </div>
            )}
        </main>
    );
};
