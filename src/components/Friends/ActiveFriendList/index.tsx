import style from "./style.module.scss";

export function ActiveFriendList() {
    return (
        <div className={style["active-friend"]}>
            <h5 className={style["title-not-friend"]}>Ativo agora</h5>

            <p className={style["not-friend"]}>
                <strong>Por enquanto está quieto...</strong>
                Quando um(a) amigo(a) começa uma atividade, como jogar um jogo ou bater papo por voz, mostraremos aqui!
            </p>
        </div>
    );
};
