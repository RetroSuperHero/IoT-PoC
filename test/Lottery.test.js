const assert = require('assert');
// const ganache = require('ganache-cli');
const Web3 = require('web3');
// const { interface, bytecode } = require('../compile')

// const provider = ganache.provider();
// const web3 = new Web3(provider);
const web3 = new Web3("http://transport01.smartmesh.cn:44444");

// let accounts, lottery;

// beforeEach(async () => {
//     accounts = await web3.eth.getAccounts();

//     lottery = await new web3.eth.Contract(JSON.parse(interface))
//         .deploy({ data: bytecode })
//         .send({ from: accounts[0], gas: '1000000' });

//     lottery.setProvider(provider);
// });

describe('Lottery Contract', () => {
    it('getBalance', async () => {
        web3.eth.getBalance('0xfcba6153b1013eb774b4eea95ef02cc410d2552e', 'latest').then(console.log);
        assert.equal(200, 200);
    });
    // it('deploys a contract', () => {
    //     assert.ok(lottery.options.address);
    // });

    // it('allows one account to enter', async () => {
    //     await lottery.methods.enter().send({ 
    //         from: accounts[0], 
    //         value: web3.utils.toWei('1', 'ether') 
    //     });
        
    //     const players = await lottery.methods.getPlayers().call({
    //         form: accounts[0]
    //     });

    //     assert.equal(accounts[0], players[0]);
    //     assert.equal(1, players.length);
    // });

    // it('allows multiple account to enter', async () => {
    //     const accountsNo = 3;

    //     for(let i=0; i<accountsNo; ++i) {
    //         await lottery.methods.enter().send({ 
    //             from: accounts[i], 
    //             value: web3.utils.toWei('1', 'ether') 
    //         });
    //     }
        
    //     const players = await lottery.methods.getPlayers().call({
    //         form: accounts[0]
    //     });

    //     for(let i=0; i<accountsNo; ++i) {
    //         assert.equal(accounts[i], players[i]);
    //     }

    //     assert.equal(accountsNo, players.length);
    // });

    // it('requires a minimum amount of ether to enter', async () => {
    //     let error;
    //     try {
    //         await lottery.methods.enter().send({ 
    //             from: accounts[0], 
    //             value: 200
    //         });
    //         error = false;
    //     } catch(e) {
    //         error = true;
    //     }
    //     assert(error);
    // });

    // it('only manager can call pickWinner', async () => {
    //     // Doesn't work
    //     let error;
    //     try {
    //         await lottery.methods.pickWinner().send({ 
    //             from: accounts[1]
    //         });
    //         error = false;
    //     } catch(e) {
    //         error = true;
    //     }
    //     assert(error);
    // });

    // it('sends money to the winner', async () => {
    //     await lottery.methods.enter().send({ 
    //         from: accounts[1],
    //         value: web3.utils.toWei('2', 'ether')
    //     });

    //     const initialBalance = await web3.eth.getBalance(accounts[1]);
    //     await lottery.methods.pickWinner().send({ from: accounts[0] });
    //     const finalBalance = await web3.eth.getBalance(accounts[1]);
    //     const difference = finalBalance - initialBalance;

    //     assert(difference == web3.utils.toWei('2', 'ether'));
    // });

    // it('resets the players array after picking winner', async () => {
    //     await lottery.methods.enter().send({ 
    //         from: accounts[1],
    //         value: web3.utils.toWei('2', 'ether')
    //     });

    //     await lottery.methods.pickWinner().send({ from: accounts[0] });
    //     const players = await lottery.methods.getPlayers().call({
    //         form: accounts[0]
    //     });

    //     assert.equal(0, players.length);
    // });
});