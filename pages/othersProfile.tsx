import Navbar from 'components/Navbar/Navbar';
import { Pane } from 'evergreen-ui';
import PostView from 'components/PostView/PostView';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SignIn from 'components/SignIn/SignIn';
import UserInfo from 'components/UserInfo/UserInfo';

export default function Home() {
    const [user, setUser] = useState<TokenResponse>();
    const [profile, setProfile] = useState();
    const [signInActive, setSignInActive] = useState(false);

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json',
                        },
                    }
                )
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const handleGoogleLogin: any = useGoogleLogin({
        onSuccess: (res) => setUser(res),
        onError: (err) => console.log('Login Failed', err),
    });

    const handleSignInClose = () => {
        setSignInActive(false);
    };

    console.log(profile);

    return (
        <Pane>
            {signInActive ? (
                <div>
                    <div className="index-signInComponent">
                        <SignIn />
                    </div>
                    <div
                        className="index-dimBackground"
                        onClick={handleSignInClose}
                    />
                </div>
            ) : null}
            <div className="index-background">
                <div>
                    <Navbar setSignInActive={setSignInActive} />
                    <div style={{ float: 'left', width: '70%' }}>
                        <PostView
                            post={{
                                author: 'owo',
                                createdDate: 5,
                                title: 'ART TITLE',
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                src: 'https://media.printables.com/media/prints/375908/images/3160471_a5e402d6-017e-4791-b62c-500ea716844a/thumbs/cover/1280x960/jpeg/020ae98af02c4b6da2c8d1e1584cded3.webp',
                                likes: 0,
                                critiques: [],
                            }}
                        />
                    </div>
                    <div
                        className="userInfo"
                        style={{ float: 'left', width: '30%' }}
                    >
                        <UserInfo
                            user={{
                                name: 'user name',
                                profileImage:
                                    'https://media.printables.com/media/prints/375908/images/3160471_a5e402d6-017e-4791-b62c-500ea716844a/thumbs/cover/1280x960/jpeg/020ae98af02c4b6da2c8d1e1584cded3.webp',
                                bio: 'bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio',
                                date: 'date',
                                points: 0,
                            }}
                        />
                    </div>
                </div>
            </div>
        </Pane>
    );
}
