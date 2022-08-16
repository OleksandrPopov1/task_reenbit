import {IChats} from "../interfaces/chat.interface";

export const staticChat: IChats = {
    chats: [
        {
            userName: 'Josefina',
            userImage: {
                userImage: 'https://zvezda.today/contents/models/1114/s1_josefina-monasterio-image.jpg',
                statusOnline: false
            },
            message: [
                {
                    value: 'Hello',
                    date: '08/16/22, 4:00 AM',
                    authorMessage: 'Josefina'
                },
                {
                    value: 'Hello!',
                    date: '08/16/22, 4:05 AM',
                    authorMessage: 'Me'
                },
                {
                    value: 'My name is Josefina',
                    date: '08/16/22, 4:10 AM',
                    authorMessage: 'Josefina'
                }

            ]
        }
    ]
}

