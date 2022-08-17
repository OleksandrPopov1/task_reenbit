import {FC} from "react";

import {IUserImage} from "../../interfaces";
import {IChat, IMessage} from "../../interfaces/chat.interface";
import {UserImage} from "../userImage/UserImage";
import './descriptionChat.css';
import {useAppDispatch} from "../../hooks";
import {chatAction} from "../../redux";

interface IProps {
    userName: string;
    userImage: IUserImage;
    message: IMessage[];
    chat: IChat
}

const DescriptionChat: FC<IProps> = ({userImage, userName, message, chat}) => {

    const dispatch = useAppDispatch();

    const selectChat = () => {
        dispatch(chatAction.setChat(chat))
    };

    return (
        <div className={'descriptionChatBlock'} onClick={selectChat}>
            <div><UserImage userImage={userImage.userImage} statusOnline={true}/>
                <div>
                    <h3>{userName}</h3>
                    <p>{message[message.length - 1].value}</p>
                </div>
            </div>

            <p>{message[message.length - 1].date}</p>
        </div>
    );
};

export {
    DescriptionChat
};