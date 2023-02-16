import Navbar from 'components/Navbar/Navbar';
import { Pane } from 'evergreen-ui';
import PostDisplay from 'components/PostDisplay/PostDisplay';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SignIn from 'components/SignIn/SignIn';

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

    console.log(profile);

    return (
        <Pane>
            <Navbar setSignInActive={setSignInActive} />
            <PostDisplay
                post={{
                    author: 'owo',
                    createdDate: 5,
                    title: 'ART TITLE',
                    src: 'https://media.printables.com/media/prints/375908/images/3160471_a5e402d6-017e-4791-b62c-500ea716844a/thumbs/cover/1280x960/jpeg/020ae98af02c4b6da2c8d1e1584cded3.webp',
                    likes: 0,
                    critiques: [],
                }}
            />
            {signInActive ? (
                <div>
                    <SignIn />
                </div>
            ) : null}
        </Pane>
    );
}
