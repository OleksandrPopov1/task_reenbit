import React, {FC, useEffect, useRef} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Message} from "../message/Message";
import {chatAction} from "../../redux";
import './chat.css';

const Chat: FC = () => {

    const {chats, chat} = useAppSelector(state => state.chat);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();

    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    }

    useEffect(() => {
        if (chats.chats.length > 0) {
            if (chat.chatId.length < 1) {
                dispatch(chatAction.setChat(chats.chats[0]))
                dispatch(chatAction.getJoke());
            }
        }

        scrollToBottom();
    }, [chats, dispatch, chat]);

    return (
        <div className={'chatBlock'}>
            {chat.message.map(message => <Message
                key={message.messageId}
                message={message}
                userImage={chat.userImage}
            />)}

            <div ref={messagesEndRef}/>
        </div>
    );
};

export {
    Chat
};