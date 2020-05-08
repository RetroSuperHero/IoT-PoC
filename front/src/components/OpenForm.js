import React, { useState, useRef } from 'react';
import '../App.css';
import carPool from '../carPool';

const OpenForm = (props) => {
    const inputRef = useRef(null)
    const [fee, setFee] = useState(0)

    const onSubmit = async (e) => {
        e.preventDefault()
        await carPool.methods.registerUser().send({ 
            from: props.account, 
            value: fee,
            gas: 2000000
        });
    }

    const onChange = () => {
        const value = parseInt(inputRef.current.value)
        if(value !== NaN && value !== "") {
            setFee(value)
        } else {
            setFee(0)
        }
    }

    return (
        <div style={{borderBottom: "1px solid #ccc", paddingBottom: 30, marginBottom: 30}}>
            <form onSubmit={onSubmit}>
                <h3 style={{margin: 0, color: "#282d35", fontWeight: 300, fontSize: 25, marginTop: 15}}>Become user:</h3>
                <input id="fee" onChange={onChange} ref={inputRef} className="longInput" placeholder="Entry fee (in Wei)"></input>
                <button className="longInput" disabled={fee < props.fee}>Submit</button>
            </form>
        </div>
    );
}

export default OpenForm;
