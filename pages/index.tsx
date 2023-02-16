import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';
import UserInfo from 'components/UserInfo/UserInfo';
import { Pane } from 'evergreen-ui';
import PostDisplay from 'components/PostDisplay/PostDisplay';
import { GoogleLogin } from '@react-oauth/google';

export default function Home() {
    return (
        <Pane>
            <Navbar />
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
            <GoogleLogin onSuccess={(res) => {}} />
            {/* <UserInfo name="" profileImage="" bio="" date="" points={0} /> */}
        </Pane>
    );
}
