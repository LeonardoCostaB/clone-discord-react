import { ScreenChat } from "../../components/ScreenChat";
import { SideBar } from "../../components/SideBar";

import { useParams } from "react-router-dom";

export function Chat() {
    const { chatId } = useParams<{ chatId: string }>()

    if(!chatId) return ""
    
    return (
        <div className="container">
            <SideBar />

            <main className="main">
                <ScreenChat chatID={chatId} />
            </main>
        </div>
    );
};
