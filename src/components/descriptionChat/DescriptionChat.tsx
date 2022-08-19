import {FC} from "react";

import {IChat} from "../../interfaces";
import {UserImage} from "../userImage/UserImage";
import {useAppDispatch} from "../../hooks";
import {chatAction} from "../../redux";
import './descriptionChat.css';

interface IProps {
    chat: IChat
}

const DescriptionChat: FC<IProps> = ({chat}) => {

    const {userImage, userName, message} = chat;
    const dispatch = useAppDispatch();

    const lastMessage: string = message[message.length - 1].value;
    const smallMessage: string = lastMessage.length > 60 ? lastMessage.slice(0, 60) + '...' : lastMessage;

    const lastMessageDate: string = message[message.length - 1].date;
    const smallDate: string = new Date(lastMessageDate).toLocaleString('en-us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })

    const selectChat = (): void => {
        dispatch(chatAction.setChat(chat));
    };

    return (
        <div className={'descriptionChatBlock'} onClick={selectChat}>
            <div><UserImage userImage={userImage.userImage} statusOnline={true}/>
                <div>
                    <h3>{userName}</h3>
                    <p>{smallMessage}</p>
                </div>
            </div>

            <p>{smallDate}</p>
        </div>
    );
};

export {
    DescriptionChat
};