import {FC} from "react";

import {UserImage} from "../userImage/UserImage";
import {useAppSelector} from "../../hooks";
import './headerOneChat.css';

const HeaderOneChat: FC = () => {

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