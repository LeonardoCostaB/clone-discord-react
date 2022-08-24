import { useParams } from "react-router-dom";

import { Header } from "../Header";

import { At } from "phosphor-react";

import { users } from "../../../users.json";

interface ScreenChatProps {
    chatID: string
}

export function ScreenChat({ chatID }:ScreenChatProps) {
    const { chatId } = useParams<{ chatId: string }>();

    if(chatId != chatID) {
        return (
            <div>
                Não encontramos essa conversa em nosso servidor, por favor, tente novamente
            </div>
        );
    }

    const filterChatUser = users
        .filter(user => user.id == chatId)
        .map(user => user.name)

    return (
        <main className="main">
            <Header>
                <span className="header-title">
                    <At size={24} weight="light" color="#9F9E9D"/>

                    <strong>{ filterChatUser }</strong>
                    
                </span>
            </Header>
            
            <span>chat { filterChatUser }</span>
        </main>
    );
};
