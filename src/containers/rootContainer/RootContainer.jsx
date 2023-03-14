import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navigation from "../../components/Navigation/Navigation"
import ContactPage from "../../pages/contactPage/ContactPage"
import HomePage from "../../pages/homePage/HomePage"
import ShopPage from "../../pages/shopPage/ShopPage"
import AuthPage from "../../pages/AuthPage/AuthPage"

const RootContainer = () => {
    const rootsArr = [
        { Component: HomePage, path: '/' },
        { Component: ShopPage, path: '/shop' },
        { Component: ContactPage, path: '/contact' }
    ]
    const roots = rootsArr.map(({ Component, path }) => <Route path={path} element={<Component />} />)
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<HomePage />} />
                    <Route path='shop' element={<ShopPage />} />
                    <Route path='auth' element={<AuthPage />} />
                    <Route path='contact' element={<ContactPage />} />
                </Route>
            </Routes>
        </Router>
    )
}
export default RootContainer
