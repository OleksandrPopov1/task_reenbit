import {useEffect} from "react";
import {GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout} from 'react-google-login';
import {gapi} from 'gapi-script';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {chatAction} from "../../redux";
import {emptyGoogleUser} from "../../helpers";

const GoogleLogButton = () => {

    const {googleUser} = useAppSelector(state => state.chat);
    const dispatch = useAppDispatch();

    const clientId = '829420046036-hr69bdf5suull5tscg7nfa1d38kdtaml.apps.googleusercontent.com';

    useEffect(() => {
        const initClient = (): void => {
            gapi.auth2.init({
                client_id: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    }, []);

    const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        if ('profileObj' in res) {
            dispatch(chatAction.logGoogleUser(res.profileObj))
        }
    };
    const onFailure = (err: {}): void => {
        console.log('failed:', err);
    };

    const logout = (): void => {
        dispatch(chatAction.logGoogleUser(emptyGoogleUser));
    }

    return (
        <div className={'loginButton'}>
            {!googleUser.name && < GoogleLogin
                clientId={clientId}
                buttonText="LogIn"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />}

            {googleUser.name && <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout>}
        </div>
    );
};

export {
    GoogleLogButton
}