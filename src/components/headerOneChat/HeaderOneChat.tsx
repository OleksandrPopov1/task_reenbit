import {FC} from "react";

import './headerOneChat.css';
import {UserImage} from "../userImage/UserImage";
import {useAppSelector} from "../../hooks";

const HeaderOneChat:FC = () => {

    const {chat} = useAppSelector(state => state.chat);

    return (
        <div className={'headerOneChatBlock'}>
            <UserImage userImage={chat.userImage.userImage} statusOnline={true}/>
            <h2>{chat.userName}</h2>
        </div>
    );
};

export {
    HeaderOneChat
};