const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    "sunny pyramid peasant genre lonely diary above occur furnace used stamp oven", 
    "https://rinkeby.infura.io/v3/10968e5d89594787935ea32a55d4ebfd"
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    console.log(interface)

    const contract = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: "0x" + bytecode, arguments:[100] })
        // .estimateGas(function(err, gas){
        //     console.log(gas);
        // });
        .send({ gas: '2000000', from: accounts[0], gasPrice: '47000000' });

    console.log(interface);
    console.log('Contract deployed to', contract.options.address);
}

deploy();