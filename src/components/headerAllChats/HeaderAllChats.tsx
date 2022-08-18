import React, {FC, useState} from "react";

import {UserImage} from "../userImage/UserImage";
import './headerAllChats.css';
import {useAppDispatch} from "../../hooks";
import {chatAction} from "../../redux";

const HeaderAllChats:FC = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useAppDispatch();

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const search = ():void => {
        if (inputValue) {
            dispatch(chatAction.setChats(JSON.parse(localStorage.getItem('chats') ?? '{}')));
            dispatch(chatAction.searchChatByName(inputValue));
            setInputValue('');
        }
    };

    const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            search();
        }
    }

    return (
        <div className={'headerAllChatBlock'}>
            <UserImage userImage={''} statusOnline={true}/>

            <input
                className={'searchInput'}
                type="text"
                onKeyPress={keyPress}
                value={inputValue}
                onChange={change}
                placeholder={'Search or start new chat'}
            />
        </div>
    );
};

export {
    HeaderAllChats
};