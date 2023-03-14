import './button.style.scss'

const BUTTON_TYPE = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button {...otherProps} className={`button-container ${BUTTON_TYPE[buttonType]}`}>{children}</button>
    )
}

export default Button