import React, {FC, useState} from "react";

import './sendMessage.css';

const SendMessage:FC = () => {

    const [inputValue, setInputValue] = useState<string|''>('');

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const send = () => {
        if (inputValue) {

            setInputValue('');
        }
    };

    const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            send();
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
            <button onClick={send}>
                <img src="https://cdn.icon-icons.com/icons2/1509/PNG/512/documentsend_104490.png" alt=""/>
            </button>
        </div>
    );
};

export {
    SendMessage
};