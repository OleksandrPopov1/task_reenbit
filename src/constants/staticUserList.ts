import {v4 as uuidv4} from 'uuid';

import {IChats} from "../interfaces";

export const staticChat: IChats = {
    chats: [
        {
            chatId: uuidv4(),
            userName: 'Josefina',
            userImage: {
                userImage: require('../images/Josefina.jpg'),
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hello',
                    date: 'Thu Aug 18 2022 10:00:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Josefina'
                },
                {
                    messageId: uuidv4(),
                    value: 'Hello!',
                    date: 'Thu Aug 18 2022 10:05:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                },
                {
                    messageId: uuidv4(),
                    value: 'My name is Josefina',
                    date: 'Thu Aug 18 2022 10:10:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Josefina'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Alice Freeman',
            userImage: {
                userImage: require('../images/AliceFreeman.jpg'),
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hello, how are you',
                    date: 'Thu Aug 18 2022 13:20:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Alice Freeman'
                },
                {
                    messageId: uuidv4(),
                    value: 'Hi, good and you?',
                    date: 'Thu Aug 18 2022 13:25:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Manu Rios',
            userImage: {
                userImage: require('../images/ManuRios.jpg'),
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hello, when you will return my money',
                    date: 'Thu Aug 18 2022 15:40:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Manu Rios'
                },
                {
                    messageId: uuidv4(),
                    value: 'Hello, sorry, now i cant return your money...',
                    date: 'Thu Aug 18 2022 15:42:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                },
                {
                    messageId: uuidv4(),
                    value: 'Ok, and when?',
                    date: 'Thu Aug 18 2022 15:43:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Manu Rios'
                },
                {
                    messageId: uuidv4(),
                    value: 'I try return your money next month',
                    date: 'Thu Aug 18 2022 15:45:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Oliver Moy',
            userImage: {
                userImage: require('../images/OliverMoy.jpg'),
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Where are you?',
                    date: 'Thu Aug 18 2022 17:30:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Oliver Moy'
                },
                {
                    messageId: uuidv4(),
                    value: 'Sorry, I am sleep',
                    date: 'Thu Aug 18 2022 17:31:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                },
                {
                    messageId: uuidv4(),
                    value: 'Oh... Ok',
                    date: 'Thu Aug 18 2022 17:32:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Oliver Moy'
                },
                {
                    messageId: uuidv4(),
                    value: 'Goodbye!',
                    date: 'Thu Aug 18 2022 17:33:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Natalia Barulich',
            userImage: {
                userImage: require('../images/NataliaBarulich.jpg'),
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hello',
                    date: 'Thu Aug 18 2022 11:30:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Natalia Barulich'
                },
                {
                    messageId: uuidv4(),
                    value: 'Hello',
                    date: 'Thu Aug 18 2022 11:33:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                },
                {
                    messageId: uuidv4(),
                    value: 'Go to the Cafe?',
                    date: 'Thu Aug 18 2022 11:34:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Natalia Barulich'
                },
                {
                    messageId: uuidv4(),
                    value: 'Ok',
                    date: 'Thu Aug 18 2022 11:35:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Steve Cook',
            userImage: {
                userImage: require('../images/SteveCook.jpg'),
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hi, man! Go to the pab after work?',
                    date: 'Thu Aug 18 2022 14:56:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Steve Cook'
                },
                {
                    messageId: uuidv4(),
                    value: 'so sure, where are we going?',
                    date: 'Thu Aug 18 2022 14:57:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                },
                {
                    messageId: uuidv4(),
                    value: 'Belfast?',
                    date: 'Thu Aug 18 2022 14:58:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Steve Cook'
                },
                {
                    messageId: uuidv4(),
                    value: 'Ok, I will!',
                    date: 'Thu Aug 18 2022 14:59:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Vyvan Le',
            userImage: {
                userImage: require('../images/VyvanLe.jpg'),
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'Hello, do you repair phones?',
                    date: 'Thu Aug 18 2022 12:14:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Vyvan Le'
                },
                {
                    messageId: uuidv4(),
                    value: 'Hi, no',
                    date: 'Thu Aug 18 2022 12:30:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                }
            ]
        },
        {
            chatId: uuidv4(),
            userName: 'Zach King',
            userImage: {
                userImage: require('../images/ZachKing.jpg'),
                statusOnline: true
            },
            message: [
                {
                    messageId: uuidv4(),
                    value: 'I should have all the reports tomorrow!',
                    date: 'Thu Aug 18 2022 20:36:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Zach King'
                },
                {
                    messageId: uuidv4(),
                    value: 'I won\'t make it until tomorrow, it\'s too late',
                    date: 'Thu Aug 18 2022 20:47:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                },
                {
                    messageId: uuidv4(),
                    value: 'Your problems!',
                    date: 'Thu Aug 18 2022 20:48:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Zach King'
                },
                {
                    messageId: uuidv4(),
                    value: 'Ok...',
                    date: 'Thu Aug 18 2022 20:50:00 GMT+0300 (Eastern European Summer Time)',
                    authorMessage: 'Me'
                }
            ]
        },
    ]
}

