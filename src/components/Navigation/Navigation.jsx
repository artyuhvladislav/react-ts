import { Link, Outlet } from "react-router-dom"
import Cart from "../Cart/Cart"
import Logo from "../Logo/Logo"
import './navigation.style.scss'
import { convertNavigationPathName } from './../../utils/convertNavigationPathName';
import { useContext } from 'react';
import { UserDataContext } from "../../providers/UserDataProvider";
import { signOutUser } from "../../utils/fireBase";




const Navigation = () => {
    const nav = ['shop', 'contact', 'auth']
    const { currentUser, setCurrentUser } = useContext(UserDataContext)

    const handleSignOut = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

    const navElements = nav.map((item, idx) => {
        return (
            <li className="nav__item" key={idx}>
                {currentUser ?
                    <div className='nav__item-link' onClick={handleSignOut}>SIGN OUT</div> :
                    <Link to={`/${item}`} className='nav__item-link'>{item.toLocaleUpperCase()}</Link>}
                {/* <Link to={`/${item}`} className='nav__item-link'>{item.toLocaleUpperCase()}</Link> */}
            </li>
        )
    })
    return (
        <>
            <header className="header">
                <Logo />
                <nav className="nav">
                    <ul>{navElements}</ul>
                </nav>
                <Cart />
            </header>
            <main>
                <Outlet />
            </main>
        </>

    )
}

export default Navigation