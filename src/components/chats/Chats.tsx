import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {staticChat} from "../../constants";
import {chatAction} from "../../redux";

const Chats: FC = () => {

    const {chats} = useAppSelector(state => state.chat);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!localStorage.getItem('chats')) {
            localStorage.setItem('chats', JSON.stringify(staticChat));
        }
        dispatch(chatAction.setChat(JSON.parse(localStorage.getItem('chats') || '{}')));

    }, [dispatch]);

    useEffect(() => {
        console.log(chats.chats.map(value => value.message.map(value1 => console.log(value1))))
    }, [chats])


    return (
        <div>
            {/*{chats.chats.map(value => console.log(value))}*/}
        </div>
    );
};

export {
    Chats
};