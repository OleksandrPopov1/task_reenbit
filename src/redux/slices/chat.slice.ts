import {createSlice} from "@reduxjs/toolkit";
import {IChat, IChats} from "../../interfaces/chat.interface";

interface IState {
    chats: IChats;
    chat: IChat;
}

const initialState: IState = {
    chats: {chats: []},
    chat: {chatId: '', message: [], userImage: {statusOnline: false, userImage: ''}, userName: 'User Name'}
};
const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        setChats: (state, action) => {
            state.chats = action.payload;
            // state.chats.chats.sort((a, b) => b.message[message.length - 1].date - a.message[message.length - 1].date)
        },
        searchChatByName: (state, action) => {
            state.chats.chats = state.chats.chats.filter(value => value.userName.toLowerCase().includes(action.payload.toLowerCase()));
        },
        setChat: (state, action) => {
            state.chat = action.payload;
        }
    }
});

const {reducer: chatReducer, actions: {setChats, searchChatByName, setChat}} = chatSlice;

const chatAction = {
    setChats,
    searchChatByName,
    setChat
};

export {
    chatReducer,
    chatAction
}