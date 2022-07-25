const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');
const { abi, evm } = require('../compile');

const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

const INITIAL_MESSAGE = 'olá, Criptomundo!';
const CHANGED_MESSAGE = 'tchau, Criptomundo!';

beforeEach(async () => {
   accounts = await web3.eth.getAccounts();

   inbox = await new web3.eth.Contract(abi)
      .deploy({
         data: evm.bytecode.object,
         arguments: [INITIAL_MESSAGE],
      })
      .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
   it('deploys a contract', () => {
      assert.ok(inbox.options.address);
   });

   it('has a default message', async () => {
      const message = await inbox.methods.message().call();
      assert.equal(message, INITIAL_MESSAGE);
      console.log(message);
   })

   it('can change the message', async () => {
      await inbox.methods.setMessage(CHANGED_MESSAGE).send({ from: accounts[0]});
      const message = await inbox.methods.message().call();
      assert.equal(message, CHANGED_MESSAGE);
      console.log(message);

   })
})