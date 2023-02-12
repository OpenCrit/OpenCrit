import Button from 'components/Button/Button';
import Navbar from 'components/Navbar/Navbar';
import { Pane } from 'evergreen-ui';

export default function Home() {
	return (
		<Pane>
			<Button onClick={() => {}}>Post</Button>

			<Pane display="flex" justifyContent="center">
				<Pane color="white" fontSize={26} margin="25%">
					Why hath you forsaken me.
				</Pane>
			</Pane>
		</Pane>
	);
}
