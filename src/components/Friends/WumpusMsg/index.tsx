import style from './style.module.scss';

interface WumpusMsgProps {
    img: string;
    msg: string;
}

export function WumpusMsg({ img, msg }: WumpusMsgProps) {
    return (
        <div className={style.wumpus}>
            <img 
                src={img}
                alt="" 
            />

            <span>{ msg }</span>
        </div>
    );
};
