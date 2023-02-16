import SignUpForm from 'components/SignUpForm/SignUpForm';
import { GoogleLogin } from '@react-oauth/google';

export default function UserSettingsPage() {
    return (
        <div className="signUp-pageBackground">
            <div className="signUp-signUpText">Sign Up</div>
            <SignUpForm />
            <div className="signUp-googleButton">
                <GoogleLogin text="signup_with" onSuccess={() => {}} />
            </div>
        </div>
    );
}
