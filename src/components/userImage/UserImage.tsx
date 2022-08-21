import {FC} from "react";

import {IUserImage} from "../../interfaces";
import './userImage.css';

const UserImage: FC<IUserImage> = ({userImage, statusOnline}) => {
    return (
        <div className={'userImageBlock'}>
            <img
                className={'userInfoImage'}
                src={userImage || require('../../images/UndefinedUser.png')}
                alt=""
            />

            {statusOnline && <img
                className={'checkMarkOnlineImage'}
                src={require('../../images/StatusOnline.png')}
                alt=""
            />}
        </div>
    );
};

export {
    UserImage
};