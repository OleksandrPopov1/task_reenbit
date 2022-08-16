import {IUserImage} from "./userImage.interface";

export interface IMessage{
    value: string;
    date: string;
    authorMessage: string
}

export interface IChat{
    userName: string;
    userImage: IUserImage;
    message: IMessage[];
}

export interface IChats{
    chats: IChat[];
}