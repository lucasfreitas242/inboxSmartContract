const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');
const { abi, evm } = require('../compile');

const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

beforeEach(async () => {
   accounts = await web3.eth.getAccounts();

   inbox = await new web3.eth.Contract(abi)
      .deploy({
         data: evm.bytecode.object,
         arguments: ['olá, Criptomundo!'],
      })
      .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', () => {
   it('deploys a contract', () => {
      console.log(inbox);
   })
})