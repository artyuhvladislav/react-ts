import { useContext, useState } from "react"
import { UserDataContext } from "../../providers/UserDataProvider";
import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/fireBase';
import Button from "../Button/Button";
import FormInput from '../FormInput/FormInput';
import './signIn.style.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { setCurrentUser } = useContext(UserDataContext)
    const { email, password } = formFields;

    const resetFormFields = () => setFormFields(defaultFormFields)

    const handleSubmit = async (e) => {
        const { email, password } = formFields
        e.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user)
            setCurrentUser(user)
            resetFormFields()
        } catch (e) {
            console.error(e.message)
        }
    }
    const handleSubmitWithGoogle = async () => {
        try {
            const { user } = await signInWithGooglePopup()
            await createUserDocumentFromAuth(user)
        } catch (e) {
            console.error(e)
        }

    }

    const handleChange = ({ target }) => {
        const { name, value } = target
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div>
            <h2>I already have an account</h2>
            <p>sign in with email password</p>
            <form onSubmit={handleSubmit} className='form'>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className="buttons-container">
                    <Button buttonType='google' type="button" onClick={handleSubmitWithGoogle}>sign in with google</Button>
                    <Button type="submit">sign in</Button>
                </div>
            </form>
        </div>

    )
}

export default SignIn