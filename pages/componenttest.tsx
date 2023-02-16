import SignIn from 'components/SignIn/SignIn';
import UserInfo from 'components/UserInfo/UserInfo';
import { Pane } from 'evergreen-ui';

export default function ComponentTest() {
    return (
        <Pane>
            <SignIn />
            <UserInfo name="" profileImage="" bio="" date="" points={0} />
        </Pane>
    );
}
