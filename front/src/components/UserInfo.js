import React, { useState, useEffect } from 'react';
import { balanceInEth } from '../utils/Utils'

const UserInfo = (props) => {
    const [account, setAccount] = useState(props.account)
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        if (account !== props.account && props.web3) {
            setAccount(props.account)
            props.web3.eth.getBalance(props.account)
                .then(balance => setBalance(balance))
        }
    }, [props.account]);

    return(
        <div style={{marginTop: 30}}>
            <div className="square balance">
                <h2 style={{margin: 0, fontSize: 30}}>Balance:</h2>
                <p style={{fontSize: 20, margin: "5px 0", fontWeight: 200}}>{account ? balanceInEth(balance) : balanceInEth(0)} Eth</p>
            </div>
            <div className="square role">
                <h2 style={{margin: 0, fontSize: 30}}>Roles:</h2>
                <p style={{fontSize: 20, margin: "5px 0", fontWeight: 200}}>{props.userInfo.manager ? "MANAGER " : ""}{props.userInfo.vehicle ? "VEHICLE " : ""}{props.userInfo.user ? "USER" : ""}&nbsp;</p>
            </div>
            <div className="square fee">
                <h2 style={{margin: 0, fontSize: 30}}>Minimal fee:</h2>
                <p style={{fontSize: 20, margin: "5px 0", fontWeight: 200}}>{props.userInfo.fee ? props.userInfo.fee : "0"} Wei</p>
            </div>
        </div>
    )
}

export default UserInfo;