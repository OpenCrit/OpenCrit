import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';
import UserInfo from 'components/UserInfo/UserInfo';
import SearchBar from 'components/SearchBar/SearchBar';
import { Pane } from 'evergreen-ui';

export default function Home() {
    return (
        <Pane>
            <Navbar />
            {/* <UserInfo name="" profileImage="" bio="" date="" points={0} /> */}
        </Pane>
    );
}
