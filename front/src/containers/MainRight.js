import React, {useState} from 'react';
import '../App.css';
import Checkboxes from '../components/Checkboxes';
import OpenForm from '../components/OpenForm';
import VehicleForm from '../components/VehicleForm';
import UserForm from '../components/UserForm';
import ManagerForm from '../components/ManagerForm';

const MainRight = (props) => {
    const [showVehicle, setShowVehicle] = useState(true);
    const [showUser, setShowUser] = useState(true);
    const [showManager, setShowManager] = useState(true);

    return (
        <div className="right">        
            <div className="rightInner">
                <Checkboxes 
                    vehicle={{showVehicle, setShowVehicle}}
                    user={{showUser, setShowUser}}
                    manager={{showManager, setShowManager}}/>
                
                {!props.userInfo.user && !props.userInfo.vehicle ? <OpenForm account={props.account} fee={props.userInfo.fee} /> : ""}

                {showVehicle ? <VehicleForm account={props.account} vehicle={props.userInfo.vehicle} /> : ""}

                {showUser ? <UserForm account={props.account} user={props.userInfo.user} /> : ""}

                {showManager ? <ManagerForm account={props.account} manager={props.userInfo.manager} /> : ""}
            </div>
        </div>
    );
}

export default MainRight;
