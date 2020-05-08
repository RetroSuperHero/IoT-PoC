import React from 'react';
import { shortAddress } from '../utils/Utils'

const Header = (props) => {
    return(
        <div style={{margin: "20px 0 20px 20px"}}>
            <img id="logo" src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/car-512.png"/>
            <h1 id="appName"><span style={{fontWeight: 100}}>Car</span>Share</h1>
            <img className="userAvatar" src="https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg"/>
            <p className="userName">{props.account ? <span>Logged <span style={{fontWeight: 200}}>as:</span> {shortAddress(props.account)}</span> : "Not logged in"}</p>
        </div>
    )
}

export default Header;