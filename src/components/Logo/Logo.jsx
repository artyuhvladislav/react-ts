import { NavLink } from 'react-router-dom'
import './logo.style.scss'

const Logo = () => {
    return (
        <NavLink to='/'>
            <img className='logo' src="https://lh3.googleusercontent.com/blogger_img_proxy/ANbyha3zPnk8dfy-MEUs0RJPDE0gRPASAECwtBUT1unzgejaWSCdHI4lN8Gied23p-4sdpOgYjWVCcXKs8N-p8Yqq5DVwjCA_pxJx1cAJ898-oPhKRoBjZWnguTeLxV1hd4mDnc4-1IDWc6bE7ElVvBsuQ=w1200-h630-p-k-no-nu" alt="logo" />
        </NavLink>
    )
}

export default Logo