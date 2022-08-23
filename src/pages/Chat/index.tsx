import { ScreenChat } from "../../components/ScreenChat";
import { SideBar } from "../../components/SideBar";

export function Chat() {
    return (
        <div className="container">
            <SideBar />

            <main className="main">
                <ScreenChat chatID="121231545148415154131" />
            </main>
        </div>
    );
};
