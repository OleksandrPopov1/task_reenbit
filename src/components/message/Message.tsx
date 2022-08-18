import {FC} from "react";

import './message.css';
import {IUserImage} from "../../interfaces";
import {UserImage} from "../userImage/UserImage";
import {generateTimeMessage} from "../../helpers";

interface IProps{
    userImage: IUserImage;
    message: string;
    author: string;
    date: string
}

const Message:FC<IProps> = ({userImage, message, date, author}) => {

    const messageClass:string = author === 'Me' ? 'meMessage' : 'interlocutorMessage';

    return (
        <div className={'messageBlock ' + messageClass}>
            {author !== "Me" && <UserImage userImage={userImage.userImage} statusOnline={false}/>}
            <div className={'messageAndDateBlock'}>
                <p className={'messageValue'}>
                    {message}
                </p>
                <p className={'messageDate'}>
                    {generateTimeMessage(date)}
                </p>
            </div>
        </div>
    );
};

export {
    Message
};