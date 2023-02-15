import Navbar from 'components/Navbar/Navbar';
import UserSettings from 'components/UserSettings/UserSettings';
import { Pane } from 'evergreen-ui';

export default function userSettings() {
    return (
        <Pane>
            <Navbar />
            <UserSettings />
        </Pane>
    );
}
