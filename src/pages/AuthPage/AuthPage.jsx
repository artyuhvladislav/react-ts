import { auth, signInWithGooglePopup } from '../../utils/fireBase'
import { createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/fireBase';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './authPage.scss'

const AuthPage = () => {
    return (
        <div className='auth-container'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default AuthPage