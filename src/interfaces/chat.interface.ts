import {IUserImage} from "./userImage.interface";

export interface IMessage {
    messageId: string;
    value: string;
    date: string;
    authorMessage: string
}

export interface IChat {
    chatId: string;
    userName: string;
    userImage: IUserImage;
    message: IMessage[];
}

export interface IChats {
    chats: IChat[];
}