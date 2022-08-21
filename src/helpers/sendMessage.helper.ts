import {v4 as uuidv4} from 'uuid';

import {IChat, IChats, IMessage} from "../interfaces";
import {AppDispatch, chatAction} from "../redux";
import {Dispatch, SetStateAction} from "react";


const addMessage = (message: IMessage, chat: IChat, dispatch: AppDispatch): void => {

    const newChats: IChats = JSON.parse(localStorage.getItem('chats') ?? '{}');

    const idChat: string = chat.chatId;
    const index: number = newChats.chats.findIndex(chat => chat.chatId === idChat);
    newChats.chats[index].message.push(message)

    localStorage.setItem('chats', JSON.stringify(newChats));
    dispatch(chatAction.setChats(newChats));
    dispatch(chatAction.setChat(newChats.chats.find(value => value.chatId === idChat)));
}


const send = (inputValue: string,
              setInputValue: Dispatch<SetStateAction<string>>,
              dispatch: AppDispatch,
              chat: IChat,
              newResponse: string): void => {

    if (inputValue) {
        const newMessage: IMessage = {
            messageId: uuidv4(),
            authorMessage: "Me",
            date: new Date().toString(),
            value: inputValue
        };

        addMessage(newMessage, chat, dispatch);

        setTimeout(() => {
            dispatch(chatAction.getJoke());
            const response: IMessage = {
                messageId: uuidv4(),
                authorMessage: chat.userName,
                date: new Date().toString(),
                value: newResponse
            };

            addMessage(response, chat, dispatch);
        }, 10000);

        setInputValue('');
    }
};


export {
    addMessage,
    send
}