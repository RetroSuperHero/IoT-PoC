import React from 'react';
import '../App.css';

const UserForm = (props) => {
  return (
    <div style={{borderBottom: "1px solid #ccc", paddingBottom: 30, marginBottom: 30}}>
        <h2 style={{margin: 0, color: "#282d35", fontWeight: 200, fontSize: 30}}>User methods:</h2>
        <form>
            <h3 style={{margin: 0, color: "#282d35", fontWeight: 300, fontSize: 25, marginTop: 15}}>Pay for usage:</h3>
            <input className="longInput" placeholder="Usage ID"></input>
            <button className="longInput" disabled={!props.user}>Submit</button>
        </form>
        <form>
            <h3 style={{margin: 0, color: "#282d35", fontWeight: 300, fontSize: 25, marginTop: 15}}>Fullfill necessity:</h3>
            <input className="longInput" placeholder="Necessity ID"></input>
            <button className="longInput" disabled={!props.user}>Submit</button>
        </form>
    </div>
  );
}

export default UserForm;
