import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Store } from "./pages/Store/Index";
import { Chat } from "./pages/Chat";

export function Router() {
    return (
        <Routes>
            <Route path="/channels/@me" element={ <Home  /> } />
            <Route path="/store" element={ <Store  /> } />
            <Route path="/channels/@me/:chatId" element={ <Chat  /> } />
        </Routes>
    );
};
