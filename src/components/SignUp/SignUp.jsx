import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/fireBase';
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import './signUp.style.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => setFormFields(defaultFormFields)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, { displayName });

            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div>
            <h2>I do not have an account</h2>
            <p>sign up with email password</p>
            <form onSubmit={handleSubmit} className='form'>
                <FormInput
                    label='Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />
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
                <FormInput
                    label='Confirm password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />
                <Button buttonType='default' type="submit">sign up</Button>
            </form>
        </div>
    )
}

export default SignUp