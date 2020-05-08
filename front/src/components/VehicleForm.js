import React, { useState, useRef } from 'react';
import '../App.css';
import carPool from '../carPool';

const VehicleForm = (props) => {
    const necessityDesc = useRef(null)
    const necessityValue = useRef(null)
    const usageDesc = useRef(null)
    const usageValue = useRef(null)
    const usageAddress = useRef(null)
    const [nD, setND] = useState("")
    const [nV, setNV] = useState(0)
    const [uD, setUD] = useState("")
    const [uV, setUV] = useState(0)
    const [uA, setUA] = useState(0)

    const onNecessitySubmit = async (e) => {
        e.preventDefault()
        await carPool.methods.createNecessity(nD, nV).send({ 
            from: props.account,
            gas: 2000000
        });
    }

    const onUsageSubmit = async (e) => {
        e.preventDefault()
        await carPool.methods.registerUsage(uD, uV, uA).send({ 
            from: props.account,
            gas: 2000000
        });
    }

    const onNecessityChange = () => {
        const value = parseInt(necessityValue.current.value)
        if(value !== NaN && value !== "") {
            setNV(value)
        } else {
            setNV(0)
        }
        setND(necessityDesc.current.value)
    }

    const onUsageChange = () => {
        const value = parseInt(usageValue.current.value)
        if(value !== NaN && value !== "") {
            setUV(value)
        } else {
            setUV(0)
        }
        setUD(usageDesc.current.value)
        setUA(usageAddress.current.value)
    }

  return (
    <div style={{borderBottom: "1px solid #ccc", paddingBottom: 30, marginBottom: 30}}>
        <h2 style={{margin: 0, color: "#282d35", fontWeight: 200, fontSize: 30}}>Vehicle methods:</h2>
        <form onSubmit={onNecessitySubmit}>
            <h3 style={{margin: 0, color: "#282d35", fontWeight: 300, fontSize: 25, marginTop: 15}}>Create necessity:</h3>
            <input onChange={onNecessityChange} ref={necessityDesc} className="longInput" placeholder="Description"></input>
            <input onChange={onNecessityChange} ref={necessityValue} className="longInput" placeholder="Value"></input>
            <button className="longInput" disabled={!props.vehicle}>Submit</button>
        </form>
        <form onSubmit={onUsageSubmit}>
            <h3 style={{margin: 0, color: "#282d35", fontWeight: 300, fontSize: 25, marginTop: 15}}>Register usage:</h3>
            <input onChange={onUsageChange} ref={usageDesc} className="longInput" placeholder="Description"></input>
            <input onChange={onUsageChange} ref={usageValue} className="longInput" placeholder="Value"></input>
            <input onChange={onUsageChange} ref={usageAddress} className="longInput" placeholder="Contractor address"></input>
            <button className="longInput" disabled={!props.vehicle}>Submit</button>
        </form>
    </div>
  );
}

export default VehicleForm;
