import { v4 as uuidv4 } from 'uuid';

import {IChats} from "../interfaces/chat.interface";

export const staticChat: IChats = {
    chats: [
        {
            chatId: uuidv4(),
            userName: 'Josefina',
            userImage: {
                userImage: 'https://zvezda.today/contents/models/1114/s1_josefina-monasterio-image.jpg',
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hello',
                    date: '08/16/22, 4:00 AM',
                    authorMessage: 'Josefina'
                },
                {
                    messageId: uuidv4(),
                    value: 'Hello!',
                    date: '08/16/22, 4:05 AM',
                    authorMessage: 'Me'
                },
                {
                    messageId: uuidv4(),
                    value: 'My name is Josefina',
                    date: '08/16/22, 4:10 AM',
                    authorMessage: 'Josefina'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Alice Freeman',
            userImage: {
                userImage: 'https://zvezda.today/contents/models/1114/s1_josefina-monasterio-image.jpg',
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hello, how are you',
                    date: '08/13/22, 5:00 AM',
                    authorMessage: 'Alice Freeman'
                },
                {
                    messageId: uuidv4(),
                    value: 'Hi, good and you?',
                    date: '08/16/22, 5:05 AM',
                    authorMessage: 'Me'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Alina Popova',
            userImage: {
                userImage: 'https://zvezda.today/contents/models/1114/s1_josefina-monasterio-image.jpg',
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hello, when you will return my money',
                    date: '07/24/22, 4:15 PM',
                    authorMessage: 'Alina Popova'
                },
                {
                    messageId: uuidv4(),
                    value: 'Hello, sorry, now i cant return your money...',
                    date: '07/24/22, 4:18 PM',
                    authorMessage: 'Me'
                },
                {
                    messageId: uuidv4(),
                    value: 'Ok, and when?',
                    date: '07/24/22, 4:19 PM',
                    authorMessage: 'Alina Popova'
                },
                {
                    messageId: uuidv4(),
                    value: 'I try return your money next month',
                    date: '07/24/22, 4:25 PM',
                    authorMessage: 'Me'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Alina Popova',
            userImage: {
                userImage: 'https://zvezda.today/contents/models/1114/s1_josefina-monasterio-image.jpg',
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hello, when you will return my money',
                    date: '07/24/22, 4:15 PM',
                    authorMessage: 'Alina Popova'
                },
                {
                    messageId: uuidv4(),
                    value: 'Hello, sorry, now i cant return your money...',
                    date: '07/24/22, 4:18 PM',
                    authorMessage: 'Me'
                },
                {
                    messageId: uuidv4(),
                    value: 'Ok, and when?',
                    date: '07/24/22, 4:19 PM',
                    authorMessage: 'Alina Popova'
                },
                {
                    messageId: uuidv4(),
                    value: 'I try return your money next month',
                    date: '07/24/22, 4:25 PM',
                    authorMessage: 'Me'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Alina Popova',
            userImage: {
                userImage: 'https://zvezda.today/contents/models/1114/s1_josefina-monasterio-image.jpg',
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hello, when you will return my money',
                    date: '07/24/22, 4:15 PM',
                    authorMessage: 'Alina Popova'
                },
                {
                    messageId: uuidv4(),
                    value: 'Hello, sorry, now i cant return your money...',
                    date: '07/24/22, 4:18 PM',
                    authorMessage: 'Me'
                },
                {
                    messageId: uuidv4(),
                    value: 'Ok, and when?',
                    date: '07/24/22, 4:19 PM',
                    authorMessage: 'Alina Popova'
                },
                {
                    messageId: uuidv4(),
                    value: 'I try return your money next month',
                    date: '07/24/22, 4:25 PM',
                    authorMessage: 'Me'
                }
            ]
        }
    ]
}

