import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';
<<<<<<< HEAD
=======
import UserInfo from 'components/UserInfo/UserInfo';
>>>>>>> ecf2b5f85d6f3f18ba3a7460fd0196589c3e2243
import SearchBar from 'components/SearchBar/SearchBar';
import { Pane } from 'evergreen-ui';

export default function Home() {
    return (
        <Pane>
            <Button onClick={() => {}}>Post</Button>
            <SearchBar></SearchBar>
			<Pane display="flex" justifyContent="center">
				<Pane color="white" fontSize={26} margin="25%">
					Why hath you forsaken me.
				</Pane>
			</Pane>
      <UserInfo name={''} profileImage={''} bio={''} date={''} points={0}></UserInfo>
		</Pane>
	);
}
