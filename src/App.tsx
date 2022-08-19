import {FC} from "react";

import {Chat, Chats, HeaderAllChats, HeaderOneChat, SendMessage} from "./components";
import './App.css';
import './styleMedia/media.css';

const App: FC = () => {
    return (
        <div className={'ownBlock'}>
            <div className={'ownLeftPartBlock'}>
                <HeaderAllChats/>
                <div>
                    <h2>Chats</h2>
                    <Chats/>
                </div>
            </div>

            <div className={'ownRightPartBlock'}>
                <HeaderOneChat/>
                <Chat/>
                <SendMessage/>
            </div>
        </div>
    );
};

export {
    App
};