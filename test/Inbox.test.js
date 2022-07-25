const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

//Estudos iniciais sobre o Mocha e sua estrutura.

class Carro {
     estacionar() {
        return 'Carro estacionado!';
     }

     dirigir() {
        return 'vrum vrum';
     }
}

let carro;

beforeEach(() => {
   carro = new Carro();
});

describe('Teste Carro para SUCESSO', () => {
    it('Carro pode ser estacionado', () => {
        assert.equal(carro.estacionar(), 'Carro estacionado!');
    });

    it('Carro pode ser dirigido', () => {
      assert.equal(carro.dirigir(), 'vrum vrum');
   });
   
})

describe('Teste Carro para FALHA', () => {
   it('Carro não pode ser estacionado', () => {
      assert.equal(carro.estacionar(), 'Carro não está estacionado!');
    })

   it('Carro não pode ser dirigido', () => {
      assert.equal(carro.dirigir(), 'poof');
   })
})