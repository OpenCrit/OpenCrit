import SignUpForm from 'components/SignUpForm/SignUpForm';
import SignUpBackground from 'components/SignUpBackground/SignUpBackground';
import { GoogleLogin } from '@react-oauth/google';

export default function UserSettingsPage() {
    return (
        <div>
            <div className="signUp-container">
                <div className="signUp-signUpText">Sign Up</div>
                <SignUpForm />
            </div>
            <div className="signUp-background">
                <SignUpBackground />
            </div>
        </div>
    );
}
