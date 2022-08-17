import {FC} from "react";

import './message.css';
import {IUserImage} from "../../interfaces";
import {UserImage} from "../userImage/UserImage";

interface IProps{
    userImage: IUserImage;
    message: string;
    author: string;
    date: string
}

const Message:FC<IProps> = ({userImage, message, date, author}) => {

    const messageClass = author === 'Me' ? 'meMessage' : 'interlocutorMessage';

    return (
        <div className={'messageBlock ' + messageClass}>
            {author !== "Me" && <UserImage userImage={userImage.userImage} statusOnline={false}/>}
            <div>
                <p className={'messageValue'}>
                    {message}
                </p>
                <p className={'messageDate'}>
                    {date}
                </p>
            </div>
        </div>
    );
};

export {
    Message
};