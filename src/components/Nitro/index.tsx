import { Header } from "../Header";

import nitroIcon from '../../assets/svg/nitro-icon.svg';

export function Nitro() {
    return (
        <main className="main">
            <Header>
                <span className="header-title">
                    <img src={nitroIcon} alt="nitro" />

                    <strong>
                        Nitro
                    </strong>
                </span>
            </Header>

            <span style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff"
            }}>
                Em manuntenção...
            </span>
        </main>
    );
};
