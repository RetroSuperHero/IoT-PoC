import React from 'react';
import users from '../data/Users'

const OtherAccounts = (props) => {
    const options = users.map(user => {
        return <option value={user.index} onClick={() => { props.fetchData(user.index) }}>{user.name}</option>
    });

    return(
        <div>
            <h2 style={{marginLeft: 20, color: "#fff", display: "inline-block"}}>Other <span style={{fontWeight: 200}}>accounts:</span></h2>
            <select id="users" name="users" style={{display: "inline-block"}}>
                {options}
            </select>
        </div>
    )
}

export default OtherAccounts;