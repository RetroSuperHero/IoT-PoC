import React, {useState, useEffect} from 'react';
import { getWeb3 } from './web3';
import carPool from './carPool';
import './App.css';
import MainLeft from './containers/MainLeft';
import MainRight from './containers/MainRight';

let web3Provider;

const App = () => {
  const [account, setAccount] = useState(null);
  const [manager, setManager] = useState(false)
  const [vehicle, setVehicle] = useState(false)
  const [user, setUser] = useState(false)
  const [fee, setFee] = useState(0)

  const fetchData = async (fetchAccount) => {
    fetchAccount = fetchAccount ? fetchAccount : account

    carPool.methods.minimalFee().call()
        .then(fetchedFee => setFee(fetchedFee));

    carPool.methods.managers(fetchAccount).call()
        .then(fetchedManager => setManager(fetchedManager));
    carPool.methods.vehicles(fetchAccount).call()
        .then(fetchedVehicle => setVehicle(fetchedVehicle));
    carPool.methods.users(fetchAccount).call()
        .then(fetchedUser => setUser(fetchedUser));
  }

  const changeUser = async (index) => {
    web3Provider = getWeb3(index)
    const accounts = await web3Provider.eth.getAccounts()
    setAccount(accounts[0]);
    
    fetchData(accounts[0])
  }

  useEffect(async () => {
    changeUser(0)
  }, []);

  return (
    <div className="App">
      <div className="App-container"> 
        <MainLeft 
          account={account} 
          fetchData={changeUser} 
          userInfo={{manager, user, vehicle, fee}}
          web3={web3Provider} />

        <MainRight
          account={account} 
          userInfo={{manager, user, vehicle, fee}} />
      </div>
    </div>
  );
}

export default App;
