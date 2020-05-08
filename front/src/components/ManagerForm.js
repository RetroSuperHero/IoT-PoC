import React, { useState, useRef } from 'react';
import '../App.css';
import carPool from '../carPool';

const ManagerForm = (props) => {
    const managerAddress = useRef(null)
    const vehicleAddress = useRef(null)
    const [mA, setMA] = useState(0)
    const [vA, setVA] = useState(0)

    const onManagerSubmit = async (e) => {
        e.preventDefault()
        await carPool.methods.registerManager(mA).send({ 
            from: props.account,
            gas: 2000000
        });
    }

    const onVehicleSubmit = async (e) => {
        e.preventDefault()
        
        const aaa = await carPool.methods.registerVehicle(vA).send({ 
            from: props.account,
            gas: 2000000
        });
        console.log('aa' + aaa)
    }

    const onManagerChange = () => {
        setMA(managerAddress.current.value)
    }

    const onVehicleChange = () => {
        setVA(vehicleAddress.current.value)
    }

    return (
        <div style={{borderBottom: "1px solid #ccc", paddingBottom: 30, marginBottom: 30}}>
            <h2 style={{margin: 0, color: "#282d35", fontWeight: 200, fontSize: 30}}>Manager methods:</h2>
            <form onSubmit={onManagerSubmit}>
                <h3 style={{margin: 0, color: "#282d35", fontWeight: 300, fontSize: 25, marginTop: 15}}>Register manager:</h3>
                <input onChange={onManagerChange} ref={managerAddress} className="longInput" placeholder="Address"></input>
                <button className="longInput" disabled={!props.manager}>Submit</button>
            </form>
            <form onSubmit={onVehicleSubmit}>
                <h3 style={{margin: 0, color: "#282d35", fontWeight: 300, fontSize: 25, marginTop: 15}}>Register vehicle:</h3>
                <input onChange={onVehicleChange} ref={vehicleAddress} className="longInput" placeholder="Address"></input>
                <button className="longInput" disabled={!props.manager}>Submit</button>
            </form>
        </div>
    );
}

export default ManagerForm;
