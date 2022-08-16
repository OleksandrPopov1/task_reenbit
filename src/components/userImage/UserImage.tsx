import {FC} from "react";

import {IUserImage} from "../../interfaces";
// import css from './userImage.module.css'

const UserImage: FC<IUserImage> = ({userImage, statusOnline}) => {
    return (
        <div>
            {statusOnline && <img
                // className={css.checkMarkOnlineImage}
                src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39-340x340.png"
                alt=""
            />}
            <img
                // className={css.userInfoImage}
                src={userImage || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt=""
            />
        </div>
    );
};

export {
    UserImage
};