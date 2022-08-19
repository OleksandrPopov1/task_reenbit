import React, {FC, useState} from "react";

import {send} from "../../helpers";
import {useAppDispatch, useAppSelector} from "../../hooks";
import './sendMessage.css';

const SendMessage: FC = () => {

    const {chat, newResponse} = useAppSelector(state => state.chat);
    const [inputValue, setInputValue] = useState<string>('');

    const dispatch = useAppDispatch();


    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const buttonSend = (): void => {
        send(inputValue, setInputValue, dispatch, chat, newResponse);
    }

    const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            send(inputValue, setInputValue, dispatch, chat, newResponse);
        }
    }

    return (
        <div className={'sendMessageBlock'}>
            <input
                type="text"
                placeholder="Type your message"
                onKeyPress={keyPress}
                value={inputValue}
                onChange={change}
            />
            <button onClick={buttonSend}>
                <img src="https://cdn.icon-icons.com/icons2/1509/PNG/512/documentsend_104490.png" alt=""/>
            </button>
        </div>
    );
};

export {
    SendMessage
};