import {createSlice} from "@reduxjs/toolkit";
import {IChats} from "../../interfaces/chat.interface";

interface IState {
    chats: IChats;
}

const initialState: IState = {
    chats: {chats:[]}
};
const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        setChat: ((state, action) => {
            state.chats = action.payload;
        })
    }
});

const {reducer: chatReducer, actions: {setChat}} = chatSlice;

const chatAction = {
    setChat
};

export {
    chatReducer,
    chatAction
}