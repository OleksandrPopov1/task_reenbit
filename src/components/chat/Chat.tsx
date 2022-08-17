import {FC, useEffect} from "react";

import './chat.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Message} from "../message/Message";
import {chatAction} from "../../redux";

const Chat: FC = () => {

    const {chats, chat} = useAppSelector(state => state.chat);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (chats.chats.length > 0) {
            dispatch(chatAction.setChat(chats.chats[0]))
        }
    }, [dispatch, chats]);

    return (
        <div className={'chatBlock'}>
            {chat.message.map(message => <Message
                key={message.messageId}
                userImage={chat.userImage}
                message={message.value}
                author={message.authorMessage}
                date={message.date}/>)}
        </div>
    );
};

export {
    Chat
};