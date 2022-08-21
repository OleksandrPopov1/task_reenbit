import React, {FC, useState} from "react";

import {UserImage} from "../userImage/UserImage";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {chatAction} from "../../redux";
import './headerAllChats.css';


const HeaderAllChats: FC = () => {

    const {googleUser} = useAppSelector(state => state.chat);
    const [inputValue, setInputValue] = useState<string>('');

    const dispatch = useAppDispatch();

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (e.target.value === '') {
            dispatch(chatAction.setChats(JSON.parse(localStorage.getItem('chats') ?? '{}')));
        }
        dispatch(chatAction.searchChatByName(e.target.value));
    };

    return (
        <div className={'headerAllChatBlock'}>
            <div>
                <UserImage userImage={googleUser.imageUrl} statusOnline={true}/>
                <h3>{googleUser.name}</h3>
            </div>
            <input
                className={'searchInput'}
                type="text"
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