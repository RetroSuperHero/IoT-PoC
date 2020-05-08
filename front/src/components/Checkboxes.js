import React from 'react';

const Checkboxes = (props) => {
    return(
        <div style={{borderBottom: "1px solid #ccc", paddingBottom: 30, marginBottom: 30, textAlign: "center"}}>
            <label className="container" htmlFor="subscribeNews" style={{display: "inline-block"}}>Vehicle
                <input type="checkbox" 
                    id="subscribeNews" 
                    checked={props.vehicle.showVehicle} 
                    style={{display: "inline-block"}} 
                    onClick={() => props.vehicle.setShowVehicle(!props.vehicle.showVehicle)} />
                <span class="checkmark"></span>
            </label>
            <label className="container" htmlFor="subscribeNews" style={{display: "inline-block"}}>User
                <input type="checkbox" 
                    id="subscribeNews" 
                    checked={props.user.showUser} 
                    style={{display: "inline-block"}} 
                    onClick={() => props.user.setShowUser(!props.user.showUser)} />
                <span class="checkmark"></span>
            </label>
            <label className="container" htmlFor="subscribeNews" style={{display: "inline-block"}}>Manager
                <input type="checkbox" 
                    id="subscribeNews" 
                    checked={props.manager.showManager} 
                    style={{display: "inline-block"}} 
                    onClick={() => props.manager.setShowManager(!props.manager.showManager)}/>
                <span class="checkmark"></span>
            </label>
        </div>
    )
}

export default Checkboxes;