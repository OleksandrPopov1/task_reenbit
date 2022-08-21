import React, {FC} from "react";

import {UserImage} from "../userImage/UserImage";
import {useAppSelector} from "../../hooks";
import './headerOneChat.css';
import {GoogleLogButton} from "../googleLogButton/GoogleLogButton";

const HeaderOneChat: FC = () => {

    const {chat} = useAppSelector(state => state.chat);

    return (
        <div className={'headerOneChatBlock'}>
            <UserImage userImage={chat.userImage.userImage} statusOnline={true}/>
            <h2>{chat.userName}</h2>
            {<GoogleLogButton/>}
        </div>
    );
};

export {
    HeaderOneChat
};