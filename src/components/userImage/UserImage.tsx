import {FC} from "react";

import {IUserImage} from "../../interfaces";
import './userImage.css';

const UserImage: FC<IUserImage> = ({userImage, statusOnline}) => {
    return (
        <div className={'userImageBlock'}>
            <img
                className={'userInfoImage'}
                src={userImage || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt=""
            />
            {statusOnline && <img
                className={'checkMarkOnlineImage'}
                src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39-340x340.png"
                alt=""
            />}

        </div>
    );
};

export {
    UserImage
};