import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {staticChat} from "../../constants";
import {chatAction} from "../../redux";
import {DescriptionChat} from "../descriptionChat/DescriptionChat";
import './chats.css';

const Chats: FC = () => {

    const {chats} = useAppSelector(state => state.chat);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!localStorage.getItem('chats')) {
            localStorage.setItem('chats', JSON.stringify(staticChat));
        }
        dispatch(chatAction.setChats(JSON.parse(localStorage.getItem('chats') || '{}')));


    }, [dispatch]);

    // const time = new Date();
    // console.log(
    //     time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
    // );
    // console.log(chats)

    return (
        <div className={'allChatsBlock'}>
            {chats.chats.map(chat => <DescriptionChat
                key={chat.chatId}
                userName={chat.userName}
                userImage={chat.userImage}
                message={chat.message}
                chat={chat}
            />)}
        </div>
    );
};

export {
    Chats
};