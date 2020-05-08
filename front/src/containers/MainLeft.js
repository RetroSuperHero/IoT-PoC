import React from 'react';
import '../App.css';
import Header from '../components/Header';
import OtherAccounts from '../components/OtherAccounts';
import UserInfo from '../components/UserInfo';
import MainBottom from './MainBottom';

const MainLeft = (props) => {
  return (
    <div className="left">
        <Header account={props.account} />
        <OtherAccounts fetchData={props.fetchData} />
        <UserInfo account={props.account} userInfo={props.userInfo} web3={props.web3}/>
        <MainBottom />
    </div>
  );
}

export default MainLeft;
