import {FC} from "react";

import {IUserImage, IMessage} from "../../interfaces";
import {UserImage} from "../userImage/UserImage";
import {generateTimeMessage} from "../../helpers";
import './message.css';

interface IProps {
    userImage: IUserImage;
    message: IMessage;
}

const Message: FC<IProps> = ({message, userImage}) => {

    const {value: userMessage, authorMessage: author, date} = message;

    const messageClass: string = author === 'Me' ? 'meMessage' : 'interlocutorMessage';

    return (
        <div className={'messageBlock ' + messageClass}>
            {author !== "Me" && <UserImage userImage={userImage.userImage} statusOnline={false}/>}

            <div className={'messageAndDateBlock'}>
                <p className={'messageValue'}>
                    {userMessage}
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