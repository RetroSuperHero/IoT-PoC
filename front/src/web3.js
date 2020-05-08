import Web3 from 'web3';
const HDWalletProvider = require('truffle-hdwallet-provider');

function getWeb3(index) {
    const provider = new HDWalletProvider(
        "sunny pyramid peasant genre lonely diary above occur furnace used stamp oven", 
        "https://rinkeby.infura.io/v3/bd0f2dbb71ff4aab8859cc78fc866fea",
        index
    );

    return new Web3(provider);
}

const provider = new HDWalletProvider(
    "sunny pyramid peasant genre lonely diary above occur furnace used stamp oven", 
    "https://rinkeby.infura.io/v3/bd0f2dbb71ff4aab8859cc78fc866fea"
);
const web3 = new Web3(provider);

export default web3;
export { getWeb3 }